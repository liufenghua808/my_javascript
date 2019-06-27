//获取hash,进行分割，存储
function getHash() {
    //获取hash值（字符串），字符串分割成数组		
    let arr1 = window.location.hash.substring(1).split('&');
    let obj = {};
    //this.obj = {};
    arr1.forEach(item => {
        let ary = item.split('='); //循环获取arr1每一项字符串，每一项用‘=’分割成数组
        obj[ary[0]] = ary[1];
        //console.log(obj);

    });
    return obj;
}


//hash发生变化时，请求对应页码的数据并渲染到页面
window.onhashchange = function () {
    let obj = getHash();
    //请求相应页面的数据进行渲染
    curDate(obj);
}

//如果没有page参数，默认page=1
let obj = getHash();
if (!obj.page) {
    obj.page = '1';
    window.location.hash = '#page=1';
}
curDate(obj);

//请求相应页面的数据进行渲染
function curDate(obj) {
    fetch('/api/weibo?act=get&page=' + obj.page)
        .then(e => e.json())
        .then(d => {
            console.log(d);
            render(d, obj.page * 1);
        });
}


// axios.get('/api/weibo?act=get&page=1')
//     .then((data) => JSON.parse(data))
//     .then(d => {
//         console.log(d);
//         render(d);
//     })


//页面渲染
/**
 * data:当前页面的数据
 * current_page:当前页码
 * 
 * 
 */
function render(data, current_page) {
    let html = '';
    data.forEach(item => {
        //转换时间格式
        var unixTimestamp = new Date(item.time);
        commonTime = unixTimestamp.toLocaleString();

        html += `<div class="reply">
                <p class="replyContent">${item.content}</p>
                <p class="operation">
                    <span class="replyTime">${commonTime}</span>
                    <span class="handle">
                        <a href="javascript:;" class="top" top-id=${item.id}>${item.like}</a>
                        <a href="javascript:;" class="down_icon" down-id=${item.id}>${item.dislike}</a>
                        <a href="javascript:;" class="cut" cut-id=${item.id}>删除</a>
                    </span>
                </p>
            </div>`;
    });
    div1.innerHTML = html;


    //获取cookie
    function getCookie(key) {
        let ary = document.cookie.split('; ');
        for (let item of ary) {
            let arr = item.split('=');
            if (arr[0] === key) {
                return arr[1];
            }
        }
        return null;
    }

    //设置cookie
    function setCookie(key, val, time) {
        if (time) {
            if (typeof time === 'string') {
                document.cookie = key + '=' + val + '; Expires=' + new Date(time);
            } else if (typeof time === 'number') {
                let date = new Date();
                let date1 = new Date;
                date1.setDate(date.getDate() + time);
                document.cookie = key + '=' + val + '; Expires=' + date1;
            }
        } else {
            document.cookie = key + '=' + val;
        }
    }


    let cookie = getCookie('cookieId') ? JSON.parse(getCookie('cookieId')) : [];
    console.log(cookie);

    //点赞
    let tops = document.querySelectorAll('.top');
    tops.forEach(item => {
        item.onclick = function () {
            if (cookie.includes(this.getAttribute("top-id"))) {
                alert('您今天已经点过赞或踩过，不可重复');
            } else {
                fetch('/api/weibo?act=like&id=' + this.getAttribute("top-id"))
                    .then(e => e.json())
                    .then(d => {
                        if (d.code === 0) {
                            this.innerHTML = Number(this.innerHTML) + 1;
                            cookie.push(this.getAttribute("top-id"));
                            setCookie('cookieId', JSON.stringify(cookie), 1);
                            alert('点赞成功');
                            console.log(cookie);
                        }
                    })
            }

        }
    })

    //踩
    let down_icons = document.querySelectorAll('.down_icon');
    down_icons.forEach(item => {
        item.onclick = function () {
            if (cookie.includes(this.getAttribute("down-id"))) {
                alert('您今天已经点过赞或踩过，不可重复')
            } else {
                fetch('/api/weibo?act=dislike&id=' + this.getAttribute("down-id"))
                    .then(e => e.json())
                    .then(d => {
                        if (d.code === 0) {
                            this.innerHTML = Number(this.innerHTML) + 1;
                            cookie.push(this.getAttribute("down-id"));
                            setCookie('cookieId',JSON.stringify(cookie),1);
                            alert('踩成功');
                            console.log(cookie);
                        }
                    })
            }

        }
    })

    //删除
    let cuts = document.querySelectorAll('.cut');
    cuts.forEach(item => {
        item.onclick = function () {
            fetch('/api/weibo?act=del&id=' + this.getAttribute("cut-id"))
                .then(e => e.json())
                .then(d => {
                    if (d.code === 0) {
                        return fetch('/api/weibo?act=get&page=1'); //返回一个promise对象
                    } else {
                        return Promise.reject()
                    }
                })
                .then(e => e.json()) //e.json()是一个promise对象
                .then(data => {
                    window.location.hash = '#page=' + 1;
                    render(data, 1);
                    console.log("删除成功");
                });
        }
    })

    //渲染页码
    pageCount(current_page);

}



//添加数据
submit.onclick = function () {
    fetch('/api/weibo?act=add&content=' + text.value)
        .then(e => e.json())
        .then(d => {
            if (d.code === 0) {
                return fetch('/api/weibo?act=get&page=1'); //返回一个promise对象
            } else {
                return Promise.reject()
            }
        })
        .then(e => e.json()) //e.json()是一个promise对象
        .then(data => { //添加新数据提交之后默认跳到第一页
            window.location.hash = '#page=' + 1;
            render(data, 1);
            // console.log(data);
            console.log("插入成功");
        });
    text.value = '';
}

//回车功能
text.onkeyup = function (ev) {
    if (ev.keyCode === 13) {
        submit.onclick();
    }
}

//分页
function pageCount(current_page) {
    //获取总页码
    fetch('/api/weibo?act=get_page_count')
        .then(e => e.json())
        .then(d => {
            if (d.code === 0) {
                //渲染页码
                let pagestr = '';
                for (let i = 0; i < d.count; i++) {
                    if ((i + 1) === current_page) {
                        pagestr += `<a href="#page=${i + 1}" class="active show">${i + 1}</a>`;
                    } else {
                        pagestr += `<a href="#page=${i + 1}" class="active">${i + 1}</a>`;
                    }
                }
                page.innerHTML = pagestr;

                //页码点击事件
                let lista = page.querySelectorAll('a');
                lista.forEach(item => {
                    item.onclick = function () {
                        window.location.hash = '#page=' + item.innerHTML * 1;

                        // fetch('http://localhost:88/api/weibo?act=get&page=' + item.innerHTML * 1)
                        //     .then(e => e.json())
                        //     .then(data => {
                        //         console.log(data);
                        //         render(data, item.innerHTML * 1)
                        //     })

                    }

                })
            }
        })

}