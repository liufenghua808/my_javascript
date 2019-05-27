var data = {
    "0": {
        "id": 0,
        "pid": -1,
        "title": "微云",
        "type": "file",
        "checked": false

    },
    "1": {
        "id": 1,
        "pid": 0,
        "title": "我的文档",
        "type": "file",
        "checked": false
    },
    "2": {
        "id": 2,
        "pid": 0,
        "title": "我的音乐",
        "checked": false
    },
    "3": {
        "id": 3,
        "pid": 2,
        "title": "周杰伦",
        "checked": false
    },
    "4": {
        "id": 4,
        "pid": 3,
        "title": "发如雪",
        "checked": false
    },
    "600": {
        "id": 600,
        "pid": 3,
        "title": "夜曲",
        "checked": false
    },
    "2999": {
        "id": 2999,
        "pid": 1,
        "title": "js程序设计",
        "checked": false
    },
    "4000": {
        "id": 4000,
        "pid": 3,
        "title": "稻香",
        "checked": false
    },
    "23333": {
        "id": 23333,
        "pid": 2,
        "title": "王杰",
        "checked": false
    },
    "29000": {
        "id": 29000,
        "pid": 1,
        "title": "js权威指南",
        "checked": false
    },
    "244444": {
        "id": 244444,
        "pid": 2,
        "title": "张国荣",
        "checked": false
    },
    "2003": {
        "id": 2003,
        "pid": 3,
        "title": "当爱已成往事",
        "checked": false
    },
    "321321": {
        "id": 321321,
        "pid": 0,
        "title": "123",
        "checked": false
    }
}


// let arr = [
//     {
//         id:'0',
//         title:'我的文档'
//     },
//     {
//         id:'1',
//         title:'我的音乐',
//         child:[
//             {
//                 child:[]
//             }
//         ]
//     }
// ]

// var dingj={

// }
// for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//         const item = data[key];
//         if(item.pid<0){
//             dingj[key]=item;
//         }
//     }
// }


// for (const key in dingj) {
//     if (dingj.hasOwnProperty(key)) {
//         const item = dingj[key];
//         item.children=dep(data,item.id);
//     }
// }

// console.log(dingj)

// function dep(obj,id){
//     let ruobj={}
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const item = obj[key];
//             if(item.pid==id){
//                 ruobj[key]=item;

//                 item.children=dep(data,item.id);
//             }
//         }
//     }
//     return ruobj
// }