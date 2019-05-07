# my_javascript
github https://github.com/ 程序员交友网站、进行代码托管、去加入一些知名项目的开发、自己静态的页面...

    git 与 github进行关联

    设置秘钥:
        1.进入github
        2.找到你的头像，点击选择settings          
        3.在最左边有SSH and GPG keys

    生成秘钥:
        https://blog.csdn.net/lqlqlq007/article/details/78983879
    
    点击鼠标右键，选择git Bash here
        
        输入:
            ssh-keygen -t rsa -C "这里换上你的邮箱"

            此处无脑回车，会出现方框

        git config --global  user.name "这里换上你的用户名"
        git config --global user.email "这里换上你的邮箱"


    输入:
        ssh -T git@github.com 

        只要出现Hi ....就说明绑定成功
git 是个版本控制工具 新建控制项目： 1、git init 2、到github网站中新建项目（推荐使用） 步骤:

                    1.点击头像旁边的 +号 选择 New repository
                    2.填写项目名称、描述、勾选readme、点击创建按钮
                    3.找到clone按钮，点击复制
                    4.在你想管理的文件夹下打开git工具，输入git clone 刚才复制的地址
                    可以使用ctrl+v, shift+insert,点击鼠标右键,选择粘贴

        命令：
        git  status  查看当前版本状态

        git add 文件名 工作区到存储区（暂存区）

        git commit -m "注释" :暂存区到版本区

        git reset --hard 最新的master编号

        git diff 工作区查看暂存区
        
        git diff --cached 暂存区查看版本区

        git diff master  工作区查看版本区

        git log  查看版本信息（q键退出）

        git push origin master 把形成版本的代码提交到远程仓库

        git reflog 查看操作过的版本

        git reset --hard 还原版本


        //===========================================================

        ###JavaScript基础笔记   
一、JavaScript
	JS:是轻量级的客户端脚本编程语言
    
	1.编程语言
	HTML+CSS是标记语言
	编程语言是具备一定逻辑的，拥有自己的编程思想（面向对象编程[OOP]、面向过程编程）
		    - 面向对象
		      + C++
		      + JAVA
		      + PHP
		      + C#(.net)
		      + ...
		    - 面向过程
		      + C
      
	2.目前JS已经不仅仅是客户端语言了，基于NODE可以做服务器端程序，所以JS是全栈编程语言
    
	3.学习JS，我们学习它的几部分组成
		 - ECMAScript(ES)：JS的核心语法
		 - DOM：document object model 文档对象模型，提供各种API（属性和方法）让JS可以获取或者操作页面中的HTML元素（DOM和元素）
		 - BOM：browser object model 浏览器对象模型，提供各种API（属性和方法）让JS可以操作浏览器
		 

二：ECMAScript
它是JS的语法规范，JS中的变量、数据类型、语法规范、操作语句、设计模式等等都是ES规定的。

三：Js的使用方式:

1、行内 
  <button onclick="alert(1)"> 强烈不推荐使用
2、内嵌
     在body结束标签的上方写script标签，script标签中写入js代码
       
        <script>
        
	              js代码
	              // 单行注释
	              /**/ 多行注释
          </script>
          /body
在课堂中基本采用内嵌
3.外链

          <script src="js的路径">

      注意:使用src引入的script是不能直接在元素内写js的，写了也出不来。
	<script src="1.js">
                  // alert(1); //调取浏览器的默认弹框
          </script> 
          上面的代码，是弹不出1来的。

```
//请求方式
fetch(url) url-> 文件路径
.then(d=>d.text())
.then(arr=>{
console.log(arr);
})
```
                
----
四：通过id的方式去获取元素
	       
	document.getElementById('id')
    onclick  点击行为（事件）
    把一个触发事件要做的事情放到function内
    = function(){
        alert('哈哈');
    }


    操作属性:
        obj.属性名

        读操作:
            console.log(obj.属性名)
        写操作:
            obj.属性名 = 要设置的值

        要操作元素的样式:
            ele.style.某个样式 = '值';
            ele.className 操作类名
        
	   要操作元素内容:
            input的内容: value
                input.value = '哈哈';

	   操作别的元素的内容:
                innerText  操作文本  读操作，只能获得文本
                innerHTML  操作结构  读操作，获取到某个元素下的所有内容（包括文本、标签）

----
五：变量（variable）
它不是具体的值，只是一个用来存储具体值的容器或者代名词，因为它存储的值可以改变，所以称为变量;
常量的不可以改变，常量和变量的目的都是为了复用。

	基于ES语法规范，在JS中创建变量有以下方式
		- var （ES3）
		- function（ES3）创建（名也是变量，只不过存储的值是类型的而已）
		- let （ES6）
		- const （ES6）创建的是常量
		- import （ES6）基于ES6的模块规范导出需要的信息
		- class（ES6）基于ES6创建类

```javascript
/*
 *语法：
 *     var [变量名] = 值
 *     let [变量名] = 值
 *     const [变量名] = 值
 *     function 名( ){
 *
 *    }
 *    ...
 *  /
var n = 13;
n = 15;
alert(n+10);//=>弹出来25 此时的N代表15

const m = 100;
m = 200;//=>报错：Uncaught TypeError: Assignment to constant variable.（不能给一个常量重新赋值，常量存储的值是不能被修改，能够修改的就是变量了）
```
创建变量，命名的时候要遵循一些规范
- 严格区分大小写
- 遵循驼峰命名法：按照数字、字母、下划线或$来命名（数字不能作为名字的开头），命名的时候基于英文单词拼接成一个完整的名字（第一个单词字母小写，其余每一个有意义单词的首字母都大写）
- 不能使用关键字和保留字：在JS中有特殊含义的叫关键字，未来可能会成为关键字的叫做保留字

```
var n = 12;
var N = 13;//=>两个n不是同一个变量

var studentInfo / student_info / _studentInfo(下划线在前面的，都是公共变量) / $studentInfo(一般存储的是JQ元素)...

var xueShengXinXi(尽量不要使用拼音)
语义化要强一些:如下
	add / create / insert / del / update / remove / info / detail / log
```

----
六：数据值是一门编程语言进行生产的材料，JS中包含的值有以下这些类型
- 基本数据类型（按值操作类型）
	+ 数字number
	+ 字符串string
	+ 布尔boolean
	+ null
	+ undefined
- 引用数据类型   object
	+ 对象object
		+ 普通对象
		+ 数组对象
		+ 正则对象
		+ 日期对象
		+ ...
	+ function		
- ES6中新增加的一个特殊的类型：Symbol，唯一的值	

```
[基本数据类型]
var n = 13; //=>0 -13 13.2 数字类型中有一个特殊的值NaN(not a number代表不是一个有效的数字，但是属于number类型的)

var s = ''; //=>"" '13' "{}" JS中所有用单引号（反单引号）或者双引号包裹起来的都是字符串，里面的内容是当前字符串中的字符（一个字符串由零到多个字符组成）；
说明：字符串可以读取长度，不可写入长度
注意：双引号不能包含双引号， 单引号不能包含单引号
    //var str = "qwer";
    //var str2 = "as\"df"; // 把中间的双引号转译成了 双引号本身
   // var str3 = `珠峰`;
    //var oDiv = document.getElementsByTagName('div')[0];
   // 给 oDiv设置内容为 str3
   // oDiv.innerHTML = 'str3';// 给的就是字符串  ‘str3’
   // oDiv.innerHTML = str;// 给的是变量 str3对应的值
   // oDiv.innerHTML = str+str3+str2;// 字符串的拼接
   // oDiv.innerHTML = '<h1>'+
     //        '<div>'+
      //           '珠峰'+
       //      '</div>'+
       //  '</h1>';

    // 模板字符串
    // oDiv.innerHTML = `<h1>
    //         <div>
    //             珠峰
    //         </div>
    //     </h1>
    // `

    // oDiv.innerHTML = '<h1>'+
    //         '<div>'+
    //             str3+
    //         '</div>'+
    //     '</h1>';

   // oDiv.innerHTML = `<h1>
     //       <div>
      //          str3
      //          ${str3+str2+str}
      //      </div>
      //  </h1>
   // `; 
    // 反引号包含的字符串， 我们想用变量时， 需要使用 ${变量} 的语法
    
    // 1、写法  引号(单双反)包含   有 “\”  代表转义
    // 2、字符串拼接 一种是直接+ ；若是 反引号 还可以通过 ${}



var b = true; //=>布尔类型只有两个值true真 false假

var n = null;//空对象指针

var u = undefined;/未定义

[引用数据类型]
var o = {name:'学习',age:9}; //=>普通对象:由大括号包裹起来，里面包含多组属性名和属性值（包含多组键值对） {}空对象

var ary = [12,23,32,45]; //=>中括号包裹起来，包含零到多项内容，这种是数组对象   [] 空数组

var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g; //=>由元字符组成一个完整的正则  // 不是空正则，是单行注释

function fn (){

} 对象

[Symbol]
创建出来的是一个唯一的值
var a = Symbol('学习');
var b = Symbol('学习');
a == b =>false
```

扩展：JS代码如何被运行以及运行后如何输出结果
[如何被运行]
- 把代码运行在浏览器中（浏览器内核来渲染解析）
- 基于NODE来运行（NODE也是一个基于V8引擎渲染和解析JS的工具）

[如何输出结果]
- alert：在浏览器中通过弹框的方式输出（浏览器提示框）
```
var num = 12;
alert(num); //=>window.alert

var str = '学习';
alert(str);

基于alert输出的结果都会转换为字符串：把值（如果是表达式，需要先计算出结果）通过toString这个方法转换成字符串，然后再输出
alert(1+1); =>'2' 
alert(true); =>'true'
alert([12,23]); =>'12,23'
alert({name:'学习'}); =>'[object Object]' 对象toString后的结果就是object object，为啥？
```

- confirm：和alert的用法一致，只不过提示的框中有确定和取消两个按钮，所以他是确认提示框
```
var flag = confirm('确定要退出吗？')
if(flag){
	// =>flag:true  用户点击的是确定按钮
}else{
	// =>flag:false 用户点击的是取消按钮
}
```
- prompt：在confirm的基础上增加输入框（不常用）
- console.log：在浏览器控制台输出日志（按F12（FN+F12））打开浏览器的控制台
	+ Elements：当前页面中的元素和样式都在这里可以看到，还可以调节样式
	+ Console：控制台，可以在JS代码中通过.log输出到这里，也可以在这里直接编写JS代码
	+ Sources：当前网站的源文件都在这里
	+ ...
- console.dir：比log输出的更加详细一些（尤其是输出对象那个数据值的时候）
- console.table：把一个JSON数据按照表格的方式输出
- ...（常用的是log、dir扩展更多的console输出方法） 

**七、数据类型的详细剖析**

**1. number数字类型**
NaN：not a number  但是它是数字类型的
isNaN：检测当前值是否不是有效数字，返回true代表不是有效数字，返回false是有效数字
```
// =>语法：isNaN([value])
var num = 12;
isNaN(num); //=>检测num变量存储的值是否为非有效数字 false

isNaN('13'); =>false
isNaN('学习'); =>true
isNaN(true); =>false
isNaN(false); =>false
isNaN(null); =>false
isNaN(undefined); =>true
isNaN({name:'学习'}); =>true
isNaN([12,23]); =>true
isNaN([12]); =>false
isNaN(/^$/); =>true
isNaN(function(){}); =>true

重要：isNaN检测的机制
1、首先验证当前要检测的值是否为数字类型的，如果不是，浏览器会默认把值转换成数字类型
   
把非数字类型的值转换为数字  
- 其他基本类型转换为数字：直接使用Number这个方法转换的
   
   [字符串转数字]
   Number('13') ->13
   Number('13px') ->NaN 如果当前字符串中出现任意一个非有效数字字符，结果则为NaN
   Number('13.5') ->13.5 可以识别小数
   
   [布尔转数字]
   Number(true) ->1
   Number(false) ->0

   [其他转数字]
   Number(null) ->0
   Number(undefined) ->NaN
  
  - 把引用数据类型值转换为数字：先把引用值调取toString转换为字符串，然后再把字符串调取Number转换为数字
  
  {对象}
	  ({}).toString() ->'[object Object]' ->NaN
	
  [数组]
	  [12,23].toString ->'12,23' ->NaN
	  [12].toString ->'12' ->12
  
  [正则]
	  /^$/.toString ->'^$' ->NaN

注意：
Number('') ->0
[].toString() ->'' 
=>isNaN([]):false
当前检测的值已经是数字类型，是有效数字返回false，不是返回true（数字类型中只有NAN不是有效数字，其余都是有效数字）

Number() ->0
Number([]) ->0


```

2、parseInt / parseFloat
>等同于Number，也是为了把其他类型的值转换为数字类型
>和Number的区别在于字符串分析上
>Number：出现任意非有效数字字符，结果就是NaN
>parseInt：把一个字符串中的整数部分解析出来
>parseFloat是把一个字符串中小数（浮点数）部分解析出来
```
parseInt('13.5px') =>13
parseFloat('13.5px') =>13.5

parseInt('width:13.5px') =>NaN 从字符串最左边字符开始查找有效数字字符，并且转换为数字，但是一旦遇到一个非有效数字字符，查找结束
```

3、NaN的比较
```
NaN == NaN：false  NaN和谁都不相等，包括自己
```

思考题：有一个变量num，存储的值不知道，我想检测它是否为一个有效数字，下面方案是否可以？
```
if(Number(num) == NaN){
	alert('num不是有效数字')
}
NaN和谁都不相等，条件永远不成立（即使num确实不是有效数字，转换的结果确实是NaN,但是NaN != NaN）

if(isNaN(num)){
	// =>检测是否为有效数字，只要这一种方案
	alert('num不是有效数字！')
}
```

####布尔类型
>只有两个值：true /  false

如何把其他数据类型转换为布尔类型？
- Boolean( ) 
- !
- !!
```javascript
Boolean(1) =>true
Boolean(-1) =>true
Boolean(isNaN) =>true
Boolean(0) =>false
Boolean(NaN) =>false
Boolean('') =>false
Boolean(null) =>false
Boolean(undefined) =>false

!'学习' => false 先把其他数据类型转换为布尔类型，然后取反

!!null => false 取两次反，等价于没取反，也就剩下转换为布尔类型了
```
规律：**‘在JS中只有“0/NaN/空字符串/null/undefined”这五个值转换为布尔类型为false(值类型 基本数据类型)，其余非空字符串


（引用数据类型）都转换为true’**

####null && undefined
- null 空指针对象，一般在学习、开发中遇到null的情况基本上是元素没有获取到
- undefined 未定义，有五中种情况会出现undefined：
	- 1.变量定义未赋值

	- 2.对象没有某个属性的时候(对象没有属性是不会报错的)

	- 3.函数没有，默认为undefined

	- 4.函数的形参数没有传实参

	- 5.基本数据类型的自定义属性

null一般都是意料之中的没有（通俗理解：一般都是人为手动的先赋值为null，后面的程序中我们会再次给他赋值）
```javascript
var num = null; //=>null是手动赋值，预示着后面会把num变量的值进行修改
...
num = 12;
```
undefined代表的没有一般都不是人为手动控制的，大部分都是浏览器自主为空（后面可以赋值也可以不赋值）
```javascript
var num; //=>此时变量的值，浏览器给分配的就是undefined
...
后面可以赋值也可以不赋值
```

汤姆（BOY）的女朋友是null,他的男朋友是undefined

----
####引用数据类型
#####object对象数据类型
>**普通对象**
> - 由大括号包裹起来的
> - 由零到多组属性名和属性值（键值对）组成

`属性是用来描述当前对象特征的，属性名是当前具备这个特征，属性值是对这个特征的描述（专业语法，属性名称为键[key]，属性值称为值[value]，一组属性名和属性值称为一组键值对）`

```javascript 
var obj = {
	name:'杰瑞',
	age:10
};
//=>对象的操作：对键值对的增删改查

[获取/查询]
语法：对象.属性名 / 对象[属性（这里的属性都是字符串格式）]
obj.name
obj['name'] 一般来说，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）

[增/改]
JS对象中，属性名是不允许重复的，是唯一的
obj.name = 'Merry'; //=>原有对象中存在name属性，此处属于修改属性值
obj.sex = '男'; //=>原有对象中不存在，此处相当于给当前对象新增一个属性sex
obj['age'] = 20;修改

[删]
彻底删除：对象中不存在这个属性了
delete obj['age'];

假删除：并没有移除这个属性，只是让当前属性的值为空
obj.sex=null;

在获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值（哪怕是null），但是如果没有这个属性名，则获取的结果是undefined

obj['friends'] =>undefined
```

思考题：
```javascript
var obj = {
	name:'汤姆',
	age：10
};
var name = 'Jerry';

obj.name  =>"汤姆"  获取name属性值
obj['name']  =>"汤姆"  获取name属性值
obj[name]  =>此处的name是一个变量，我们要获取的属性名不叫做name，是name变量存储的值'Jerry' =>boj['Jerry'] =>没有这个属性，属性值是undefined


----
'name'和name的区别？
=> 'name'是一个字符串值
=> name 是一个变量，不是值，它代表的是本身存储的这个值

```

一个对象的属性名不仅仅是字符串格式的，还有可能是数字格式的

```
var obj = {
	name:'TOM',
	0:12
};

obj[0] =>12
obj['0'] =>12
obj.0 => Uncaught SyntaxError: Unexpected number
	//若对象属性名是数字，那么我们只能使用[]的方式，打点的方式 完全等价于[字符串]

----
当我们存储的属性名不是字符串也不是数字的时候，浏览器会把这个值转换成字符串（toString）,然后再进行存储

obj[{}] = 300; 先把({}).toString()后的结果作为对象的属性名存储进来obj['[object Object]'] = 300

obj[{}] =>获取的时候也是先把对象转换为字符串'[object Object]'，然后获取之前存储的300
```


**数组对象（对象由键值对组成，数组对象特殊机制在于它的属性名是数字）**
```
var oo = {
	a : 12
};
var ary = [12,23] ;  //=>12和23都是属性值，属性名呢？

通过观察结果，我们发现数组对象的属性名是数字（我们把数字属性名称为当前对象的索引）
ary[0]  =>12
ary['0']  =>12
ary.0 =>Uncaught SyntaxError: Unexpected number

正则对象、对象等属性名操作方法都按照这种机制执行

对象[XXX],XXX可以是字符串也可以是数字，对象.XXX,XXX只能是字符串，不可以直接.数字

数组和对象的关系：从属关系：对象拥有的操作行为，数组都有，只不过数组有特殊地方，也可以称数组为特殊的对象。
数组的属性名索引为数字类型，可以增加属性名为字符串的索引,但不可以直接定义属性名是字符串的键值对。
而对象属性名可以是数字类型也可以是非数字类型；
```

####浅分析JS运行机制
```
var a=12;
var b=a;
b=13;
console.log(a); //=>12

var obj1={n:100};
var obj2=obj1;
obj2['n']=200;
console.log(obj1.n);  //=>200
```

> 1、当浏览器（它的内核\引擎）渲染和解析JS的时候，会提供一个供JS代码运行的环境，我们把这个环境称之为“全局作用域（global/window  scope）” 客户端语言环境叫window scope,后台语言环境叫global scope

>2、代码自上而下执行（之前还有一个变量提升阶段）
=>**基本数据类型的值会存储在当前作用域下**
**var a = 12;**
 1)首先开辟一个空间存储12（栈内存）
2）在当前作用域中声明一个变量a（var a）
3)让声明的变量和存储的12进行关联（把存储的12赋值给a
 **=>赋值操作叫做定义）**
 
 基本数据类型（也叫作值类型,按值操作），是按照值来操作的：把原来的值复制一份放到新的空间或者位置上，和原来的值没有关系
 
**=>引用数据类型的值不能直接存储在当前的作用域下（因为可能存储的内容过于复杂），我们需要先开辟一个  新的空间（理解为仓库\堆内存），把内容存储到这个空间中：**

**var obj1={n:100}**

1)首先开辟一个新的内容空间-堆内存，把对象中的键值对一次存储起来（为了保证后面可以找到这个空间，此空间有一个16进制的地址） （按地址操作）
2）声明一个变量 
3）让变量和空间地址关联在一起（或者理解为把空间地址赋值给变量）

**引用类型不是按照值来操作，它操作的是空间的引用地址：把原来空间的地址赋值给新的变量，但是原来的空间没有被克隆，还是一个空间，这样就会出现多个对象关联相同的空间，相互之间就会存在影响了。**

----
```javascript
var a=12;
var b=a;
b=13;
console.log(a); //=>12  按值操作，a和b是两个没有关系的空间位置
```
```javascript
var obj1={n:100};
var obj2=obj1;
obj2['n']=200;
console.log(obj1.n);  //=>200  按地址操作，公用一个地址引用空间
```
![Alt text](./1536040275319.png)

```javascript
/*
* 1、形成一个全局作用域（栈内存）
* 2、代码自上而下执行
*   1）首先开辟一个新的堆内存（AAAFFF111），把键值对存储到堆内存中
*/

var obj={
    n:10,
    m:obj.n*10  //=>TypeError: Cannot read property 'n' of undefined

};
console.log(obj.m);  //报错

首先把 n:10  存储在堆内存中
m:obj.n*10  =>obj.n  此时堆内存信息还没有存储完成，空间的地址还没有给obj,此时的obj是undefined，obj.n<=>undefined.n
```

```javascript
var ary1 = [3,4];
var ary2 = ary1;  // 公用一个空间地址 ary1=[3,4] ary2=[3,4]
ary2[0] = 1;   //  ary1=[1,4] ary2=[1,4]
ary2 = [4,5];  // 新开辟一个新的空间引用地址 ary1=[1,4] ary2=[4,5]
ary2[1] = 2;  //ary1=[1,4] ary2=[4,2]
ary1[1] = 0; //ary1=[1,0] ary2=[4,2]
console.log(ary1,ary2); //ary1=>[1,0]  ary2=>[4,2]

```
![Alt text](./1536043753631.png)

----

####运算符
> **1、位运算符:  + - * / %**

+ % 取余数
+ ！ 取反
+	= 赋值
+	== 相对等于（值相等，只比较值）不用比较数据类型
	如果数字与字符串进行比较,需要把字符串转换成数字;
	如果是字符串与字符串比较，需要转换成unicode进行比较;           
+	===绝对相等（地址、值相等） 性能比 == 要高
+	 != 不等于（不比较数据类型）
+	!==  不全等


>**2、逻辑运算符**

+ &&  并且
+ ||  或者
+ :?  三元（三目）

----

####JS中的判断操作语句
**1、if/else if /else**
>  **1、if(){}**
            if(条件){
                js语句
            }

  > **2、if() else{}**
            if(条件){
                执行语句1
            }else{
                执行语句1
            }

>**3、if(){} else if(){}  else{}**
            if(条件1){
                执行语句1
            }else if(条件2){
                执行语句2
            }else{
                执行语句3
            }

` if括号中的判断条件，最后会转成布尔值
        Nan -> not a number 非法的数字运算
        什么是真？什么是假？
        真：非空字符串、ture、非0数字是真的、对象
        假：空字符串、false、0、NaN、undefined、null`
```javascript
var num = 12;
if(num>10){
	num++; 自身基础上累加1
}else if(num>=0 && num<=10){
	num--;
}else{
	num+=2;
}
console.log(num);  // =>13

```
只要有一个条件成立，后面不管是否存在成立的条件都不再判断执行了
```javascript
var num = 10;
if(num>5){
	num+=2;
}else if(num>8){
	num+=3;
}else{
	num+=4
}
console.log(num);   // =>12
```

关于条件可以怎么写？
```javascript

// >= <= <> == 常规比较
if(0){
	// =>不论你在条件判断中写什么，最后总要把其计算出TRUE/FALSE来判断条件是否成立（把其他类型的值转化为布尔类型，只有0/NaN/''/null/undefined 是false，其余都是true）
}

if('3px'+3){
	// =>'3px3' 结果为true  在JS中，+ — * / % 都是数学运算，除 + 以外，其余运算符在运算的时候，如果遇到非数字类型的限制，首先会转化为数字类型（Number），然后再进行运算

	// => + 在JS中除了数学相加，还有字符串拼接的作用（如果运算中遇到了字符串，则为字符串拼接，而不是数学相加）
}

if('3px'-3){
	// =>NaN-3  结果为false
};
```

BAT面试题

```javascript
var num = parseInt('width:35.5px');
if(num==35.5){
	alert(0);
}else if(num==35){
	alert(1);
}else if(num==NaN){
	alert(2);
}else if(typeof num =='number'){
//=>先算typeof num
//=>再做比较
	alert(3);//alert输出的都是字符串格式的'3'
}else{
	alert(4);
}

// => 弹出框3  这里的3是字符串 alert弹出的值都是字符串
```

#### typeof
> 在JS中用来检测数据类型的方式之一：
> 能检测出的数据类型(小写，字符串)：
> “number”——数值
> “string”——字符串 
> “boolean”——布尔值 
> “object”——对象或者null; （typeof检测对象不严谨，普通对象、数组、null检测出来都是object）
> “function”——函数
> “undefined” ——未定义
`相比ECMAScript的数据类型，是多了一个function，少了null（为object）`
除了它以外，还有：
>  - instanceof：左值是不是右值构造出来的，是就为true,否则为false  
>  - constructor
>  - Object.prototype.toString.call() 

```javascript
语法：typeof[value] =>检测value的数据类型

返回值：使用typeof检测出来的结果是一个字符串，字符串中包含着对应的数据类型，例
如："number"/"string"/"boolean"/"undefined"/"object"/"function" 
相比ECMAScript的数据类型，多了一个function,少了一个null.

typeof null =>"object" 因为null代表空对象指针（没有指向任何的内存空间）

typeof 检测数值/正则/对象，最后返回的都是"object",也就是给予这种方式无法细分对象
```
**面试题：**
console.log(typeof [])
//=>"object"

console.log(typeof typeof[])
//=>typeof "object"
//=>"string"

`如何判断一个对象是数组？
let arr = [1,2,3,4]
1.console.log(arr instanceof Object); 
2.console.log( Object.prototype.toString.call(arr) === '[object Array]' ) 
3.console.log(Array.isArray(arr));`

delete obj.age; //删除某个属性就用delete



**2、三元运算符**
> 语法：条件？成立做的事情：不成立做的事情；<=>相当于简单的if/else
```javascript
var num = 12;
if(num>10){
	num++; //num++ 不立即运算  //=>num=12
	console.log(num);  //=>num=13
}else{
	num--;
}  
//=>改写成三元运算符
var num = 12;
num > 10 ? num++ : num--;不立即运算  //=>num=12
console.log(num);//=>num=13
```
特殊情况
```javascript
//=>如果三元运算符中的某一部分不需要做任何的处理，我们用 null/undefined？void 0...占位即可

var num = 12;
num>10?num++:null;

//=>如果需要执行多项操作，我们把其用小括号包裹起来，每条操作语句用逗号分隔
num = 10;
num>=10?(num++,num*=10):null;

```

思考题：
```javascript
var num = 12;
if(num>0){
	if(num<10){
		num++;
		console.log(num);
	}else{
		num--;           //=>12
		console.log(num);   //=>11
	}
}else{
	if(num==0){
		num++;
		num=num/10;
		console.log(num);
	}
}

改写成三元运算符：
var num = 12;
num>0 ? (num<10 ? num++ : num--) : (num==0 ? (num++,num=num/10) : null); //=>12
console.log(num);  //num>0时，执行num--=>11

```

**3、switch() case**
> JS中的一种判断方式

		if(){
		
		 }else{
		
		 }


		switch (变量) {
		    case 2: （条件）
		        console.log('语句一')
		    break; （中断判断）
		
		   default:（默认）
		       break;
		 }  

 注意:
     break必须写，不然会穿透（当一个条件成立之后，还会执行下面的代码）
 
 能用switch一定能用if判断，能用if判断的地方不一定能用switch

      
```javascript
var num = 10;
if(num==10){
	num++;
}else if(num==5){
	num--;
}else{
	num=0;	
}
console.log(num);  //=>num=11

改成switch case

var num=10;
switch(num){
	case 10:
		num++;
		break;
	case 5:
		num--;
		break;
	default:
		num=0;
}
console.log(num);   //=>11

//=> case 应用于变量（或者表达式）在不同值情况下的不同操作，每一种case结束后都要加break(结束整个判断) switch case 使用 ===（绝对相等，类型和值都相等）  = 赋值  == 判断是否相等

注意：
//=>n++  和 n=n+1 一样吗，如果操作的值属于字符串，且是数学运算符的话 + 起到拼接作用，不是数学运算的话可自动累积？
例1：
var n = 10;
n = n + 1;
console.log(n);  //=>n=11

var n = 10;
n++;
console.log(n); //=>n=11
例2：
var n = '10';
n = n + 1;
console.log(n);  //=>n=101  属于字符串拼接

var n = '10';
n++;
console.log(n); //=>n=11 此时这种写法还是数学运算，不是字符串运算，结果是11

```
switch case中每一种case情况的比较都是基于“===”绝对相等来完成的

```javascript
'10' == 10
=>true 相等比较，如果等号左右两边类型不一样，首先会转换成一样的数据类型，然后再进行比较

=>当前案例中，就是把字符串'10'转换成数字了，然后再比较的。

'10'====10 绝对比较，如果两边的数据类型不一样，则直接不相等，它要求类型和值都完全不一样，则直接不相等，它要求类型和值都完全一样才会相等（真实项目中为了保证代码的严谨性，我们应该更多使用绝对比较）

不加break，后面的条件不管是否成立，都会被执行；利用此机制，我们可以完成一些特殊的处理，例如：如果num等于10和等于5都要做同一件事情，那么我们写在一起，不用加break即可

```
###循环

- **for循环**
for(let i=0;条件;i++){
}
  1.变量初始化（只执行一次）
  2.判断循环条件，成立就进循环体，不成立就不循环
  3.进循环体
  4.设置下次循环的条件

  2->3->4  2->3->4 直到条件不成立。

- **while (条件)** {  
		  js语句;
		  i++;	  
  }

  一般是不知道要循环多少次才使用while

  1.判断条件
  2.条件成立进循环体
  3.设置下次循环的条件


- **for in循环**
  通过枚举对象身上的属性名，来做到循环的目的
  循环的次数跟对象的属性的个数有关系
 `注意：对象循环的方式一般用for in`

####FOR循环
> 作用：按照一定的规律，重复去做某件事情，此时我们就需要使用循环来处理了

```javascript
var  ary = [12,23,34];
/*
*{
*   0:12
*   1:23
*   2:34
*   length:3
* }
* ary[1]  ary['1']
* 输出数组中的每一项内容
*/

//console.log(ary[0],ary[1],ary[2]); //确定数组有几项

重复输出不知道有多少向内容，可用for循环
*  itar [TAB] 自动补全循环的代码

for (var i = 0; i < ary.length; i++) {
//=>第一次循环：i = 0 i < 3 ...i=1 =>ary[0]
//=>第二次循环：i = 1 i < 3 ...i=2 =>ary[1]
//=>第三次循环：i = 2 i < 3 ...i=3 =>ary[2]
//=>第四次循环：i = 3 i < 3 循环结束（本次没有循环）
    console.log(ary[i]);
}
FOR循环的语法组成
1.定义初始值  var i = 0
2.设置循环成立的条件（条件成立循环继续，不成立循环结束） i < ary.length;
3.条件成立会执行循环体中的内容（大括号包裹的就是循环体） console.log(ary[i]);
4.执行步长累加的操作  i++

```
`注意：如果遇到for循环里嵌套for循环，里面的变量名不要和外面的变量一样，或者都使用 let 声明`
```javascript
var ary = [12,23,34,45];
//=>输出每一项：倒着输出 45 34 23 12
for(var i=ary.length-1;i>=0;i--){
    console.log(ary[i]);
}


//=>输出数组中的内容：输出奇数项的内容

//=>方法1
for(var i = 0; i < ary.length; i++){
  i=0 第一项 奇数项
  i=1 第二项 偶数项
  i=2 第三项 奇数项
  i=3 第四项 偶数项
  索引为偶数，代表的是奇数项，如何判断当前i的值是奇数还是偶数？
  12%5：%称为模，用12除以5取余数*/
 if(i % 2 === 0) {
     console.log(ary[i]);
 }
}
//方法二、或者只是遍历奇数项
for(var i = 0; i < ary.length; i += 2){
        console.log(ary[i]);

}

输出数组中的内容：输出偶数项的内容?
//方法一
for(var i = 0; i <= ary.length; i++){
 i=0 第一项 奇数项
 i=1 第二项 偶数项
 i=2 第三项 奇数项
 i=3 第四项 偶数项

索引为奇数，代表的是偶数项，如何判断当前i的值是奇数还是偶数？ 
if(i % 2 === 1) {
    console.log(ary[i]);
}}
//方法二
for(var i = 1; i < ary.length; i += 2){
console.log(ary[i]);
}
```

```
在FOR循环的循环体中，经常出现两个常用的关键字；
1.continue：继续
2.break:中断或者结束

for (var i = 0; i < 11; i++) {
if(i<5){
    i++;
    console.log(i);
    continue;   //=>结束本轮循环（循环体中continue后面的代码将不再执行，继续执行下一轮循环）
}
if(i>5){
    i +=2;
    console.log(i);
    break;//=>强制结束整个循环，不做任何的处理
}

i += 3;
console.log(i);

}
```
----
**CSS3隔行换色实例**
```javascript
<!DOCTYPE html>
<html>
<head lang="en">
   <meta charset="UTF-8">
   <title></title>
   <style>
*{
 margin:0;
 padding:0;
}
ul,ol{
 list-style: none;
}
.box{
 margin: 20px auto;
 width: 300px;
}
.box li{
padding: 0 5px;
 line-height: 35px;
 border-bottom: 1px dashed #AAAAAA;
 cursor: pointer;

 white-space: nowrap;  /*不论宽度多宽，超出部分不进行折行*/
 white-space: normal /*不论宽度多宽，超出部分进行折行*/
 overflow: hidden;/*超出宽度外的文字隐藏*/
 text-overflow: ellipsis; /*超出一行的内容自动裁切，以省略号代替*/
}

/*CSS3*/
nth-child（n）:当前容器所有子元素中的第n个
.box li:nth-child(1):BOX容器所有元素中的第一个并且标签名是li的
 nth-of-type(n)：先给当前容器按照某一个标签名进行分组，获取分组中的第N个
 .box li:nth-of-type(1):先获取BOX中所有的LI，再获取Li中的第一个



.box li:nth-child(1){
  color:red;
}     /*表示只有第一个LI中的字体是红色，其余LI不受影响*/

.box li:nth-of-type(even){  /*EVEN:偶数  ODD：奇数*/
  background: aquamarine;

}      /*表示先获取LI中的字体是红色，其余LI不受影响*/
.box li:nth-of-type(odd){
  color:red;
}
隔三行变化
.box li:nth-of-type(3n+1){
  color:red;
}
.box li:nth-of-type(3n+2){
    color:green;
}
.box li:nth-of-type(3n){
      color:blue;
}
.box li:hover{/*鼠标滑过的样式，鼠标离开回归原有样式*/
  background: lightblue;
}

    </style>
</head>
<body>
<ul class="box" id="box">
    <li>个很大飒飒大刚回来更好地萨拉干哈看到过哈空间都干哈女噶速度快干哈空间的更好1111</li>
    <li>高科技感慨道非公开发大水国际快递感觉到风格和史蒂夫</li>
    <li>如题热舞头尾入台腿儿图吞吞吐吐吞吞吐吐吞吞吐吐吞吞吐吐吞吞吐吐体热隅</li>
    <li>过节看电视剧噶交付给拉风的感公司酒店高</li>
    <li>感觉到了苏格拉底国家队分发热ITIE让他突然说丢热</li>
    <li>如饿哦一痛而贵金属打个卡的黄瓜发生的噶啥当公司肯定放虎归山看对方</li>
</ul>

</table>
</body>
</html>
```
**效果：**
![Alt text](./1536820316526.png)

----
###获取页面中的DOM元素
`document.getElementById`
> 在整个文档中，通过元素的ID属性值，获取到这个元素对象

> getElementById是获取元素的方法，而document限定了获取元素的范围，我们把这个范围称之为：“上下文[context]”

```javascript
var oBox = document.getElementById('box');

1.通过getElementById获取的元素是一个对象数据类型的值（里面包含很多内置的属性）

	typeof oBox =>"object"

2.分析包含的属性
className:存储的是一个字符串，代表的是当前元素的样式类名
id:存储的是当前元素的id值（字符串）
innerHTML：存储的是当前元素中所有的内容（包含html标签）
innerTEXT：存储的是当前元素的所有文本内容（没有元素标签）
onclick：元素的一个事件属性，基于这个属性，可以给当前元素绑定点击事件
onmouseover:鼠标滑过事件
onmouseout:鼠标离开事件
style：存储当前元素所有的"行内样式"值(获取和操作的都只能是写在标签上的行内样式，
写在样式表中的样式，无法基于这个属性获取到)
<div style='xxx:xxx'>
...

```

`[context].getElementsByTagName`
>在指定的上下文中，通过元素的标签名获取一组元素集合
>
>上下文是我们自己来指定的

```javascript
var boxList = oBox.getElementsByTagName('li');

1、获取的结果是一个元素集合（HTMLCollection）,首先它也是对象数据类型的，结构和数组非常相似（数字作为索引，length代表长度），但是不是数组，我们把它叫做“类数组”

boxList[0]获取当前集合中的第一个LI（通过索引获取到具体的某一个LI即可）

boxList.length 获取集合中LI的数量

2、集合中的每一项存储的值又是一个元素对象（对象数据类型，包含很多的内置属性，例如：id/className...）

boxList[1].style.color='yellow';修改集合中第二个LI的文字颜色
```

###函数
**函数:在js中属于代码块，能写功能的，目的为了复用**
>**一、声明与调用**
>主要由声明和调用两个部分组成。
**1、声明：三种声明方式:**
-  函数声明 ：
		    function 自定义名(){}
			说明：调用的时候可以在声明之前调用
- 表达式:
		    let ff = function(){}
			说明：调用的时候必须在声明之后调用，不然报错
- 类声明:
		     let f = new Function();
			说明：内部要为字符串
```
//fn(); 声明调用可以放在声明前
  function fn(){console.log('声明');} //声明方式
  fn();
  
  let fn1 = function(){console.log('表达式声明方式');} //表达式
  fn1();

  let fn2 = new Function(console.log('sad','err','类声明方式'));  //类
  fn2();
```

 **2、函数的调用（只有函数才能被调用）:**
- 函数名 + 括号调用；
- 事件调用：一般是赋值一个匿名或者是赋值一个（名）地址；
   
```
//赋值匿名
document.onclick = function(){
let a = 10;
console.log(a);};
//赋值一个名
document.onclick = fn;  
function fn(){
let a = 10;
console.log(a);
}; 
```
- 定时器调用：例如：
		setTimeout(function(){},1000)
		setInterval(function(){},1000)

 `函数定义的原理:`
            当定义一个函数的时候开辟了一个新的堆内存
            然后把中的代码转成字符串存到了堆内存中
            最后把堆内存的地址，赋值给名或者变量

 `函数调用的原理:`
            在调用的时候，函数内形成一个执行栈
            把代码块内的字符串代码拷贝一份放到执行栈中执行
            参数赋值
            执行上下文
            预解析的机制
            内的变量销毁
            
**3、参数**
>在函数定义的时候，自定义的参数名叫形参（形式上的）形参当做变量来看；

>在函数调用的时候，括号中传的数据叫实参（实实际际的实参是可以为所有的数据类型`（1,'',null,undefined,true,[ ],{ },function(){}）`

>参数与参数之间用逗号分隔，参数是可以为多个的

` 注意:
            形参是对应实参的，他们的顺序也是要一一对应的
            如果中间没有实参，那么必须占位。`

4、**arguments**
> arguments（箭头函数没有arguments集合）是一个在函数内的类数组（长得像数组，有下标有长度,但是不是真数组）这个类数组代表的是实参集合。

>通过下标去获取某个实参。

>arguments的某个是跟形参一一对应的。

>一般是实参有很多个，能用到arguments

**5、函数返回值**
- 函数内的参数或者变量默认是不能被外界所访问的。
- 函数内如果没有某个变量或者参数，会去外查找，直到window结束。
- 当一个函数在调用（名+括号）的时候，做了两件事。
        1.执行内的代码
        2.返回值（要用return条件：如果想让外使用内运算结果时，使用return）              
- 默认(没有写return)的返回值为undefined
- 通过return去设置返回值,return后面是什么，返回的结果就是什么。

```
return会终止后面的代码执行，return下面的代码都不会执行。

 如果函数中使用循环，并且也使用了return那么会终止循环.

 如果有return，但是后面没有值，也是undefined。

function fn(){
  alert(1);
  return 5;
  alert(2);
}    
fn();

function fn() {
 for(let i=0;i<5;i++){
     if(i === 3){
         return i;
     }
     alert(i); //当i等于3的时候就终止了循环。
 }
}
console.log(fn());

```

**六、匿名函数**
>( ) 
提权:
    (1+1)*2
括号中的就变成了表达式
匿名自执行
注意:在匿名的前面加上分号，不然容易报错。

**点和[ ]的区别**
>	
- 凡是能用点的地方都能用[]
- 不过[]内要么是变量，要么是属性名(字符串)
- 点 -> 只有属性名才用.
```javascript
btn.onclick = function(){
let val = v1['value'];
let val2 = v2['value'];
console['log'](val,val2); 
box['style'][val] = val2;
}
```

###其他运算符
```

+ - * / %

逻辑运算符:
|| 或者
   A || B
   1.在if中使用||如果A不成立那么会去找B,如果2个都不成立那么就为false
   2.从顺序上来来说，如果A成立就不会去B了,如果A不成立那么会去找B。

&& 并且
   A && B
   1.在if中使用 && 的含义 A要成立，B也要成立
   2.从顺序的角度上来说，A需要成立才会找B，如果A不成立就是A


三元（三目运算符）
   一元 -> typeof a;
   二元 -> 1 + 1
   a?a:b
   判断a是否成立,如果成立就走a否则走b
       
```
###流程控制
```

 循环中的跳过
     continue

 循环中的跳出
     break

for(let i=0;i<6;i++){
 if(i===3){
     //continue  //跳过
      break;    //跳出
 };
 alert(i);
}  
```

###自定义属性（重要）
**自定义属性:**
    就是给某个对象（元素）加上一个自定义的“变量”目的是为了让这个“变量”跟某个对象（元素）进行对应。
`当需要操作一个元素的时候去对应另一个元素（数据）那么就要想到索引（自定义属性）`
        
```

obj.属性名 || obj['属性名']

let a = 10; 变量，前面没有.
obj = {
    a:10
}
obj.a 属性，前面有.

function fn(){}  函数
fn()
obj = {
    fn:function(){}  方法
}
obj.fn()

this,在事件中，一般事件触发谁，this就是谁
onclick  点击
onmouseover  移入

{
    key:value
}
   
```

###let 和var 的区别
>let 与 var 的区别
   
   1.let一个变量只能申明一次
   2.let声明之后才能使用（有暂存死区）
   3.let不做window映射
   4.let支持块级作用域

###数组

**1、数组含义**

- 数组写法:
  let arr = [ ]; 性能要高
  let arr = new Array();

- 有length,既能读也能写

- 数组中获取每个值通过下标去操作它 [1,2,3][number]

- 数组的最后一位一定是数组.length-1

- 把数组清空，arr.length = 0;


要知道数组中有什么方法，直接console.dir数组
去看__proto__下的方法即可。

**2、数组的方法**
 >push( ):
            给数组的最后一位添加，一个或者多个数据，一个与一个之间用逗号分隔
            返回值为新数组的长度。
            
> pop(传参都是唬人的) 
            往数组的最后一位删除一个数据
            返回值为:删除的那个
> unshift( ):
        往数组的首位添加一个或者多个数据
        返回值是新数组的长度

> shift():
        往数组的首位删除一个数据
        返回值是删除的那个
        
**splice( )方法**
> splice:能够增删改查数组,根据参数的不同，结果就不同

 >**删除：**(2个参数)    
   - 第一个参数就是从数组的第几位起（选择数组的起始位置）
        从0开始计数
   - 第二个参数就是操作几个数据(删除几个)
        返回值就是删除的那几个
```
//删除示例：
let arr2 = [1, 2, 3, 4];
let re3 = arr2.splice(0, 2); //从下标是0对应的位置开始删除两位
console.log(arr2);//[3, 4]
console.log(re3);//返回值 [1, 2]
注意:
如果第2位为0，那么返回值为空数组，
也就是说，第二位不为0，返回值就是你删除的那(几)个数据
返回的是*数组*。
```
>**添加：**
 - (从哪开始添加,是否替换,添加的数据)
        第一个参数就是从数组的第几位起（选择数组的起始位置）
        从0开始计数
 - 第二个参数
            就是操作几个数据(是否替换)
            如果是替换，写替换几个数字
 - 第三个参数:(或者以上)添加多个
```javascript
//添加示例
let arr = [1, 2, 3, 5, 6, 7, 8];
let re = arr.splice(3, 0, 9, 0); //从下标3对应的位置删除0个，添加 9，0
console.log(arr); //  (9)  [1, 2, 3, 9, 0, 5, 6, 7, 8]
console.log(re); //返回值 []  如果第2位为0，那么返回值为空数组
```
>**替换:**
      
```javascript
//替换示例
let arr1 = [1, 2, 3, 5, 6, 7, 8];
let re1 = arr1.splice(3, 2, 9, 0);//从下标3对应的位置添加 9，0,替换2位5,6
console.log(arr1);  // [1, 2, 3, 9, 0, 7, 8]
console.log(re1); //返回值 [5,6] 返回值为被替换掉的数组
```

  **join( )：数组转字符串**
  > join( )：  只有数组才可以使用这个方法，以某个字符串为连接符，连接数组的每一项
  > 最后返回一个字符串。
`注意：如果不需要连接符，必须使用空字符串表示''`
```
let  arr = ['你','好','吗'];
console.log(arr.join('and')); //你and好and吗
console.log(arr.join('|')); //你|好|吗
console.log(arr.join('')); //你好吗
console.log(arr.join());//你,好,吗
console.log(arr.join().length);  //5   ,号也是一个字符
```

**reverse( )：数组翻转**
> 如：[1,2,3] -> [3,2,1]  
```
let str = '98765432';
console.log(str.split());  // ["98765432"] 字符串转换成数组
console.log(str.split(''));//["9", "8", "7", "6", "5", "4", "3", "2"]
console.log((str.split('')).reverse('')); // ["2", "3", "4", "5", "6", "7", "8", "9"] 
console.log(((str.split('')).reverse('')).join('')); //23456789
```

**some(function (item,i,all){})：判断数组中是否有满足条件的元素**
> some:
            查看数组中某项数据是否满足某个条件，
            只要有一个符合条件就返回true，
            如果所有项条件都不成立，返回false
            返回一个布尔值
    
    
    let arr = [1,2,3,4,5];
    //查看数组中是否有6，明显没有，就返回false
    console.log(arr.some(function(item){return item===6}))
    
**every(function (item,i,all){})**
>判断数组中是不是每一项都符合某个条件；
>全部都符合返回true，只要有一项不符合就返回false；
>参数:function (item,i,all){}
    
```
//就想知道，这个数组中是否所有项都为true
let arr = [true,true,true,true,false];
let a = arr.every(function(item){
  return item;
})
console.log(a);
```


**数组的forEach(function(item,i,all){},参数)方法**
>forEach:专门用来循环数组的。
- 两个参数:第一个参数:
       函数-> function(){}:
       function(数组中的每个值,索引值,整个数组){ };
- 第二个参数:
       改变this指向,写啥是啥（如果写个null,undefined还是为window）
       

```javascript
let arr = [true, 'haha', 10, {}, [1, 2, 3]];
arr.forEach(function (item, i, all) {
console.log(item);//循环打印数组中的每项
console.log(i); //循环打印出索引
console.log(this);//循环打印出5个数组
}, arr);
```

**map(function(item,i,all){})：循环生成新数组**
>map:循环数组，它的返回值为新的数组
function(item,i,all){
                return 新数组的每项
            }
```javascript
let arr = [1,'你好','哈哈','呵呵'];

  let newArr = arr.map(function(item,i,all){
       // console.log(item,i,all)
       return '<li>'+ item +'</li>'
   });

   console.log(newArr);  
	    //Array(4)
		0: "<li>1</li>"
		1: "<li>你好</li>"
		2: "<li>哈哈</li>"
		3: "<li>呵呵</li>"
			length: 4
  
ul.innerHTML = newArr.join('');
结果：	1
		你好
		哈哈
		呵呵

```

**filter(function(item,i,all){})：过滤出符合条件的元素，并能生成新的数组**
> filter过滤条件成立的值
  - 参数:
                function(item,i,all){
                    return  条件成立的某项
                }
     在回调函数中，只有成立的结果才会被放到数组中;
     return的值，必须为true  
```javascript
//过滤大于28的数字
   let arr = [12, 34, 56, 23, 45, 25];
   let arr2 = arr.filter(function (item, i) {
       return item <= 28 && item >= 20;
   })
   console.log(arr2);  //[23,25]
```    

**sort(function(a,b){})：排序**
> sort默认排序是按照unicode编码来排序的;
> 也可以使用自定义排序;
>  sort中需要传入一个函数，让a,b 这个函数*必须*返回一个数字是正数就交换位置，是负数就不交换位置;a-b就是从小到大排序;b-a就是从大到小排序
```javascript
let arr = ['2px', 3, 4, 7, 1, 6, 12];
arr.sort(function (a, b) {
   return parseInt(a) - parseInt(b);
});
console.log(arr); //[1,'2px',3,4,6,7,12]
```

**concat()：连接数组,生成新的数组**
> concat() ：链接一个或者多个数组
                    返回值为新的数组
                    就算是没有数组链接
                    比如：
                        arr.concat() -> 克隆一份数组
```javascript
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
console.log(arr2.concat( [7, 8, 9],arr3)); //[1, 2, 3, 7, 8, 9, 4, 5, 6]
```

**slice(包含起始位置,结束位置但不包含结束位置)：截取数组**
- 返回值为新数组
- 不会改变原数组
```javascript
	let arr = [1,2,3,6,5];
    console.log(arr.slice(2,4));//[3,6]
    console.log(arr); //[1,2,3,6,5] 不影响原数组
```
`注意：sort和reverse方法返回的都是原数组`

###字符串方法
- 字符串：
	- 只要用 ' '（单引号）， " "（双引号）， ``（反单引号）包起来的都市字符串；
	- 字符串有长度，只能都，不能写。
	- 只要是页面中获取到的在浏览器看到的都是字符串，如：
	-  value
        innerHTML
         inerText
         href
         src
         className
         id
         width
           ...
  -   声明字符串：
	  -  let str = '123';
	     new String('123')
 - 字符串的方法基本上是不改变原字符串的。

**substring(a，b):字符串截取：从a位置开始截取，到b位置结束，但不包含结束位置** 
> 如果你只传一个参数，那么就是从哪开始，截取到字符串的最后
```javascript
let str = 'dsjdsadsandkjwyque01k';
console.log(str.substring(3,9));//dsadsa
console.log(str.substring(3));//dsadsandkjwyque01k
```
**substr(a，b):字符串截取：从a下标对应元素开始截取，截取b个**

```javascript
let str = 'dsjdsadsandkjwyque01k';
console.log(str.substr(3,9));//dsadsandk
console.log(str.substr(3));//dsadsandkjwyque01k
```

**split(分隔符)：以字符为分隔符，把字符串分割为数组，返回值是数组**
- 如果没有分割符，使用空字符串去切;
- 如果什么都不传，把整个字符串放到数组中。
```javascript
let str = '珠-峰'; //-> 
console.log(str.split('-')); //-> ['珠','峰']
let str = '珠峰';
console.log(str.split('')); //-> ['珠','峰']
```

**indexOf()：(指定字符,从哪位开始)**
- 找到指定字符首次出现的位置,返回出来索引;
- 找不到返回-1；
```javascript
let str = 'xsdmufGxw';
console.log(str.indexOf('x'))  //0
console.log(str.indexOf('x',2)) // 找到第二个x ，第二个x对应的索引是7
console.log(str.indexOf('z')) //没有z 返回-1
```

**includes()：包含。字符串中是否包含指定字符，包含就返回true，否则false**
```javascript
let str = 'xsdmufGxw';
console.log(str.includes('z'));  //false
```

**toUpperCase():  把小写英文转成大写英文**
```javascript
let str = 'xsdmufGxw';
console.log(str.toUpperCase());//XSDMUFGXW
```
**toLowerCase()：把大写英文转成小写英文**
```javascript
let str = 'xsdmufGxw';
console.log(str.toLowerCase())//xsdmufgxw
```
**trim()：去掉字符串前后空格**
```javascript
console.log(' dsadjsadsap'.trim());//dsadjsadsa
```

###时间对象
**常用于日历、倒计时、时钟**
**时间对象:**
- 用户本地的时间（所以说不安全）
          let date =   new Date()
- 获取出来的都是数字类型

**时间对象获取方法：**
- 年：date.getFullYear();
- 月：date.getMonth(); 获取出来的月比当前月份少1,所以要加1
- 日：date.getDate();
- 周几：date.getDay();  //星期几
- 时：date.getHours();
- 分：date.getMinutes();
- 秒：date.getSeconds();

###定时器
**setInterval(函数,指定时间(毫秒),第一个函数的实参)**
- 每间隔一段指定时间，就执行一次函数;
- 返回值为数字(即为定时器的编号)
```javascript
let timer = setInterval(function () {
    console.log('bong,bong');
}, 1000);//每隔1000毫秒打印一次bong,bong
```
**clearInterval(timer)：清除连续定时器 timer**

**setTimeout(函数,指定时间(毫秒),第一个函数的实参)**
- 当到指定的时间时，只执行一次函数;
- 返回值为数字(即为定时器的编号)
```javascript
let timer = setTimeout(function () {
    console.log('bong,bong');
}, 1000);//到1000毫秒时打印一次bong,bong
```
**clearTimeout(timer)：清除一次性定时器timer**

----
**使用时间对象和定时器制作数码时钟示例1：**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="box"></div>
    <script>
        function fn() {
            let d = new Date();
            let iY = d.getFullYear();
            let iM = d.getMonth() + 1;
            let iDate = d.getDate();
            let iH = d.getHours();
            let iMi = d.getMinutes();
            let iSe = d.getSeconds();
            let str = iY + '年' + touD(iM) + '月' + touD(iDate) + '日' + touD(iH) + ':' + touD(iMi) + ':' + touD(iSe);
            console.log(str);
            box.innerHTML = str;
        }
        fn();
        setInterval(fn, 1000);/每1000ms(1s)执行一次
        function touD(n) {
            return n < 10 ? '0' + n : '' + n;  
        } 
    </script>
</body>
</html>
```
**使用时间对象和定时器制作倒计时示例2：**
```
倒计时：未来的时间 -  现在的时间 = 剩下的时间
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
  <div id="box"></div>
  <script>
	//时间对象中可以放数字，月份以当前月份 - 1
	let d = new Date(2019,3,11,18,30); //未来的时间
	function fn(){
		let s = (d - d2)/1000;
        let m = Math.floor(s/60);
        let h = Math.floor(s/3600);
        box.innerHTML = h +'时'+Math.floor(m%60)+'分'+Math.floor(s%60) +'秒';
   }
	fn();
	setInterval(fn,1000);  //每1000ms(1s)执行一次    
</script>
</body>
</html>
```
**扩展：**
```
        january 一月 简称 Jan
        February 二月 简称 Feb
        March 三月 简称 Mar
        April 四月 简称 Apr
        May 五月 简称 May
        June 六月 简称 Jun
        July 七月 简称 Jul
        August 八月 简称 Aug
        Septemper 九月 简称 Sep
        October 十月 简称 Oct
        November 十一 月 简称 Nov
        December 十二月 简称 Dec
```
```
Math.floor(11.638683333) -> 11  向下取整
Math.ceil(11.638683333) -> 12   向上取整

let s = (d - d2)/1000;
天：Math.floor(s/86400)
    s%=86400
时:Math.floor(s/3600)
    s %= 3600
分:Math.floor(s/60)
    s %= 60
秒: s


第一种公式：
天：86400 = 60*60*24  : Math.floor(t/86400)	
小时：Math.floor(t%86400/3600)
分钟：Math.floor(t%86400%3600/60)
秒：Math.floor(t%60)

第二种公式：
天	Math.floor(t/86400);
t%=86400;
小时	var h=Math.floor(t/3600);
t%=3600;
分钟	var m=Math.floor(t/60);
秒	t%=60;
```

```
常用的取整公式
  x ~ y : Math.round(Math.random()*(y-x) + x)
  0 ~ x : Math.round(Math.random()*x)
  1 ~ x : Math.ceil(Math.random()*x)||1
  0 ~ x-1 : Math.floor(Math.random()*x) 
        
``` 

###递归
**递归：函数自己调用自己**
>为什么要自己调用自己？
   一个函数里面有相应的运算或者是逻辑处理需要这个处理重复执行，所以才需要自己调用自己。         
`注意:递归容易死循环，所以需要在写上递归中终止条件`
```
 function fn(n){
        if(n==1)return 1;
        return fn(n-1) + n;
    }
 console.log(fn(5));//15  n是5的时候，返回值是15
```
**递归调用小例子：**
```
<body>
<div id="box"></div>
<script>
	box.onclick = function(){
	    fn();
	}

	let num = 0;
	function fn(){
	    num += 100;
	    box.style.left  = num + 'px';
	    setTimeout(function(){
	        fn(); //调用自己
	    }, 1500);
	}
</script>
</body>
```

###DOM：Document  Object  Model 文档对象模型
- 通过document提供了一些api，能够赋予开发者操作页面的能力；
- 当通过document提供的api获取到元素的时候，获取到的元素是个对象它跟页面的标签是相映射的关系，也就是说，通过操作对象的属性能够操作标签;
- 以下都属于动态类数组
  document.getElementById('box')   //id='box'
  document.getElementsByTagName(div)  
  document.getElementsByClassName('box')  //class='box'
  document.getElementsByName()
  xx.children
  
- document.querySelectorAll( '#box') 静态的类数组  id='box'
- DOM树 -> 由节点组成
**难点关系:**
- 父子关系
	- parentNode  父节点
	- childNodes  所有子节点（包括元素节点、文本节点、注释节点）
	- children  获取某个元素下的元素子节点。
- 祖孙关系
- 兄弟关系
	 - previousElementSibling上一个兄弟节点
	 - nextElementSibling 下一个兄弟节点
	 - 没有就是null
- 第一个娃
	 - firstElementChild
- 最后一个娃
	- lastElementChild




**示例**
```

<body id="body">
 <div id="box">
     <p id="p"></p>
     11<div id='div1'></div>22
     33<div id='div2'></div>44
 </div>

console.log((document.getElementById('box')).parentNode);//box对象的父节点是<bod></bod>
 console.log((document.getElementById('div1')).parentNode);//div1对象的父节点是<div id="box"></div>
 console.dir((document.getElementById('box')).childNodes);//5个子节点 text、div、text、div、text
 console.dir((document.getElementById('box')).children);//元素节点 p、div1  div2
 console.dir((document.getElementById('div2')).previousElementSibling);//元素节点 div1
 console.dir((document.getElementById('p')).nextElementSibling);//元素节点div1
 console.dir((document.getElementById('box')).firstElementChild);//元素节点p
 console.dir((document.getElementById('box')).firstChild);//text
 console.dir((document.getElementById('box')).lastElementChild);//元素节点 div2

```

###节点
```     
标签:元素节点  数字1

属性节点: 数字2

文本节点: 数字3  文字、换行

注释节点: 数字 8

document :数字9

整个html中全是节点

属性:nodeType ->值是一个数字
    去查看节点类型的

childNodes：  子节点

nodeValue：  查看节点内容

attributes：属性节点
```

**操作元素**
```
创建一个元素节点
document.createElement('li')

末尾添加元素(往元素的末尾添加元素):
parent.appendChild(child);
'<div></div>'

首位添加元素(往元素的首位添加元素);
parent.insertBefore(插入的元素,参照元素);

删除：parent.removeChild(哪个元素)

克隆元素； cloneNode(true)
如果添加了true，不但能克隆元素本身，还克隆子级

注：在chrome的73.0.3683.103中多次克隆报错
  
```

###Math方法
**Math 是一个内置对象 处理数学问题 比如 四舍五入 取整 随机数等等**
- Math.round() // 四舍五入
- Math.ceil() // 向上取整,有小数 整数部分就加1 
- Math.floor() // 向下取整
- Math.abs() // 返回绝对值
- Math.max() // 返回一堆数中最大值
- Math.min() // 返回一堆数中最小值
- Math.random() // 方法返回介于0到1之间一个随机数，不包括1（包前不包后）
- Math.PI // 圆周率 3.141592653589793
```javascript       
随机小数：
// [0, 1} 随机小数
Math.random( )

// [n, m) 随机小数
Math.random( ) * (m - n) + n

生成随机整数：
Math.round(Math.random( ) * (max - min)) + min

// 0~10 生成0-10之间的随机整数（前后都包括）
Math.round(Math.random() * 10)
// 10~30
Math.round(Math.random()*(30-10) + 10)


生成从0~100随机整数：
Math.round(Math.random() * 100)

```

###数组去重：
**1、使用indexOf()、includes()方法去重：**
```javascript
let arr = [1,2,1,3,4,2,5,6,3,4];
let ary = [];
for循环方法：
// 判断原有ary中是否含有arr[i]数据，如果没有才进行添加
// for(let i = 0;i<arr.length;i++){
//     if(ary.indexOf(arr[i]) === -1){
//         ary.push(arr[i]);
//     }
// }
forEach方法：
// arr.forEach(function(item){
//     if(ary.indexOf(item) === -1){
//          ary.push(item);
//      }
// })
// console.log(ary);

includes方法：
// 判断原有ary中是否包含arr[i]数据，如果没有才进行添加
arr.forEach(function(item){
    if(!ary.includes(item)){
         ary.push(item);
     }
})
console.log(ary);
```
**2、使用普通对象去重：**
```javascript
let arr = [2, 3, 4, 5, 6, 2, 34, 5, 6, 9];
let obj = {}; //声明一个空对象，用于标记
let ary = []; //声明空数组，用于装去重后的数组

//使用forEach 先循环出arr里所有的数据item
//item作为obj的属性与原有obj进行比较，如果原obj中不含有item属性
//则把item添加到ary中
arr.forEach(function(item){
   if(!obj[item]){   
       ary.push(item);
       obj[item] = 1;
   }
})
console.log(ary); //[2, 3, 4, 5, 6, 34, 9]
console.log(obj);//{2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 9: 1, 34: 1}
obj = null; //一般没用的对象最后设置成null,为了释放内存
```

**3、数组去重：双循环去重**
> 数组塌陷：数组前一项删除后，后一项会自动往前移一位

```javascript
let arr = [1,2,1,3,4,2,5,6,3,4];

for(let i=0;i<arr.length;i++){
  let ind1 = arr[i]; //获取出arr每一项
//从获取的每项arr[i]分别与后边所有项进行比较，去重         
  for(let j=i+1;j<arr.length;){
      let ind2 = arr[j];
      //如果arr数组里有连续相同的项，arr.splice(j,1)会出现数组塌陷，所以只要ind1 == ind2，仍然从开始找
      (ind1 == ind2) ?arr.splice(j,1):j++; 
  }
}
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

###随机验证码
```javascript
<body>
 <button id='btn'>验证码</button>
 <script>
	let btn = document.getElementById('btn');
//从已给的字符串中获取字符，随机生成验证码

   function strCode(len) {  //形参设置为len  表示随机生成验证码的长度
   let str = '0123456789abcdefghijklmnopqistuvwxyzABCDEFGHIJKLMNOPQISTUVWXYZ'
   let code = ''; //空字符串，用于放随机生成的字符串
   len = len || 4;  //如果len 不是undefined,执行len=len(不是undef其实代表strCode函数传了有效实参)；len是undefined,执行len=4
/*
for (let i = 0; i < len; i++) {
let ind = Math.round(Math.random() * (str.length - 1)); //获取str的0到str.length-1 随机整数索引
let str1 = str[ind];
if (code.indexOf(str1) === -1) { //随机验证码去重
  code += str1; //获取str的ind索引对应的字符给到code
}
 }*/


//while循环实现
while (code.length < len) {
   let ind = Math.round(Math.random() * (str.length - 1)); //获取str的0到str.length-1 随机整数索引
   let str1 = str[ind];
   if (code.indexOf(str1) === -1) { //随机验证码去重
       code += str1; //获取str的ind索引对应的字符给到code
   }

}
return code;
}
// console.log(strCode());

btn.onclick = function () {
  this.innerHTML = strCode(); //把随机生成的字符获取到给btn
  console.log(strCode());
}
</script>
</body>
```

###变量提升
- 变量提升(声) ：在代码执行之前，把其中带var 和 function 关键字的 先提前声明；
- var ：只声明 不定义 ； 默认值 undefined
- function： 声明加定义
- var 可以重复声明 ； let 不可以
-  var 可以变量提升 ； let 不可以
- var 可以成为window属性； let 不可以
-  const 声明就是一个 常量；不能重新赋值；
-  在条件句中， 带var 也是会提前声明；
- 但是对于 function  高版本浏览器 是 只声明不定义
	- IE低版本 是 声明+定义

>  全局  看var 和 function;
    函数内部  先形参赋值  再看var 和 function;

###作用域
- 全局作用域  和  局部作用域/私有作用域(函数形成的)
- es6 多了 块级作用域  let const会识别块级作用域
- 全局变量   在全局作用域声明的变量 是  全局变量
- 私有变量   在私有作用域声明的变量 是  私有变量 
- 形参都是私有变量
 
**作用域链 **：
 变量的查找机制，先在本级私有作用域查找某个变量，若有没有，则去**上级作用域**查找，。。。，一直查找到window,若 window里也没有该变量，则就报错.

```javascript
// 函数执行的过程
// 形成一个私有作用域，形参赋值，变量提升，代码执行

//示例1：
var ary = [1, 2, 3];

function sum(arr) {
  // arr 私有变量，值是 ary 的地址； arr和ary是同一个地址
  arr[0] = 10; // ary [10,2,3]
  console.log(arr); // 10 2 3 
  arr = [2, 2, 3]; // 给 arr 了 一个新的地址；ary 还是原来的地址
  return arr // 返出去的是一个新的地址
}
console.log(sum(ary)); // [2,2,3]
console.log(ary); // [10,2,3];
```
```javascript
//示例2
var a = {
x: 1
};
var b = a; //此时 a和b用同一个地址 {x:1}
// 点的优先级 比 赋值 要高
b.c = a = {
y: 1
};
console.log(a.c, b.c); // undefined  {y:1}
//1、b.c代表 b新增一个c属性，此时b为{x:1;c:null},a也是{x:1;c:null} 然后再进行赋值操作
//2、再给开辟一个新地址 a = {y:1}并且赋值给b.c,此时 b.c={y:1}   此时a和b.c公用一个地址
//3、所以a和b.c {y:1} ,a.c没有声明 为undefined
```

```javascript
// 第三题
var foo = 0;

function bar() {
  if (!foo) {
      //var foo = 10; //私有变量（对应if(!foo)中foo=undedined）
      //foo = 10;  //全局变量  （对应if(!foo)中foo=0）
      let foo = 10; //块级私有变量，不识别变量提升，外部不可访问
      console.log(foo); // 1、10   2、10   3、10
  }
  console.log(foo); //1、10  2、10  3、0
}
bar();
console.log(foo); //1、0  2、10   3、0



var n = 13;

function fn(n) { //函数形参先赋值 再提升变量
  console.log(n); //13
  var n = 14; //私有变量
  console.log(n); //14
}
fn(n);
console.log(n); //13

```

```javascript
//第四题；
var n = 10;

function outer() {
  let n = 15;

  function inner() {
      function center() {
          alert(n);  //alert(15);
      }
      center();
  }
  inner();
  console.log(n);//15
}
outer()
console.log(n); //10

```

```javascript

//第五题；
var n = 0;

function b() {
  // n++;
  // alert(n)
  console.log(++n); //1 获取的是全局变量 n=0
}

function a() {
  var n = 10;
  b();
}
a();
console.log(n); //1

```
```javascript
//第六题；
var n = 0;

function b() {
 n++; //1  获取的是全局变量 n=0
 alert(n) // 1
 console.log(++n); //2 

 function a() {
     var n = 10; //私有变量
     console.log(n);//10

 }
 a();
 console.log(n);//2  全局的n
}
b();

console.log(n); //2 全局的n
```
```javascript
//第七题
console.log(num, str); //undefined undefined 提升变量 
var num = 18;
var str = "lily";

function fn2() {
   console.log(str, num); //str='lily'全局变量  num=undefined 变量提升
   num = 19;
   str = "candy";
   var num = 14;
   console.log(str, num); //str='candy'全局变量改变  num=14私有变量赋值14
}
fn2();
console.log(str, num); //str='candy' 全局变量  num=18全局变量

```

```javascript

//第八题
alert(a); // undefined  提升变量
console.log("a" in window); // true  undefined默认属于window
if ("a" in window) {
   var a = 10; //全局变量，在函数里才会形参私有作用域
   console.log(a); //10
}
alert(a); // 10


alert(a); // undefined
console.log("a" in window); // true
if (!("a" in window)) {
   var a = 10;
   console.log(a);
}
alert(a); // undefined
console.log(a); //undefined

 
```

```javascript
//第九题
//情况一
f = function () {
   return 1;
};
g = function () {
   return 2;
};
(function () {
   console.log(g); //undefined

   // Uncaught TypeError: g is not a function 报错不再往下执行
   if (g() && [] == ![]) {
       f = function f() {
           return 3;
       };
       function g() {
           return 4;
       };   //g声明没有定义，会提示不是一个函数
   }
})();
console.log(f());
console.log(g());

//情况二
f = function () {
   return 1;
};
g = function () {
   return 2;
};
(function () {
   console.log(g); // undefinde  g声明未定义
   if (g() && [] == ![]) {//g声明没有定义，会提示不是一个函数
       f = function f() {
           return 3;
       };
        function g() {
           return 4;
       };   
   }
})();
console.log(f()); //3
console.log(g()); //4
```

###作用域、变量提升相关总结：
**变量提升**：
- 在代码执行之前，先把代码中带有var  function  关键字的变量提前声明
-  var 只声明  不定义
- function  既声明又定义
- 等号右边 不进行变量提升；

**判断句中的提升:**
- 对于 var  没有影响；
-  对于function 只声明 不定义
- 函数执行时的变量提升： 多了一步形参赋值
- 对于 let const ;暂时性死区;

**作用域 ：**栈内存，提供代码运行环境；堆内存 存储内容
- 全局作用域：页面一打开，就会形成一个全局的作用域
- 私有作用域：函数执行时，会形成私有作用域；
- 块级作用域：只对let const 起作用：if for的{}

**全局变量：** 全局作用域声明的变量是全局变量；
**私有变量：** 私有作用域声明的变量是私有变量（形参）

**函数存储：**
- 先开辟一个堆内存，把函数体当作字符串存储到 这个堆内存中；
- 然后把地址赋给函数名；

**函数执行：**
- 先开辟一个栈内存(私有作用域)，把函数体当作JS代码执行
- 执行之前，先行参赋值，再去变量提升；
- 然后代码从上到下依次执行；

       
**作用域链：**变量的查找机制；上级作用域：查看当前执行的函数是在哪个作用域定义的， 最终查到 window;

###总结2
**1.全局作用域： 执行栈，在script标签内第一层js代码**
           
- (1)如果当前script中的全局没有某个变量，
 这个时候还会向上面的script中去查找（只会向上找，默认不会向下找）
 有就输出，否则报错。

- (2)如果有多个script标签，上面的script中的代码报错
 是不会影响，下面script标签内的代码执行的。

- (3)全局的this为window

- (4)从作用域链的角度来说，最终会找到widnow下有没有某个属性(var的情况)


- (5)多个script标签如果都用了let，那么同样走let特性(不能有重名变量)

- (6)使用var的时候等同于在widnow下注册了一个属性，并且在没赋值之前为undefined
    不过在chrome|FF下 在变量的上方打印window的时候会有属性值结果，要注意的是，显示出来的是
    骗人的（跟undefined走）


- (7)函数默认也是挂在window身上的

- (8)变量必须加var或者let来声明,不然在变量没赋值之前访问这个变量就报错


**2.私有作用域**
- 在函数执行栈中运行代码，函数中的变量和参数
- 会默认处理在函数内部，不会被外界所干扰。

- 如果函数内的计算或者逻辑处理需要被外界所接受 一般使用return。

- 防止全局污染（封闭空间,教科书上说它就是闭包，但是，这样不一定是我们眼中的闭包）

**3.块级作用域**
 {
			 }

- let、const 识别块级作用域
 
- var不识别

- 要小心function(){}


**4.作用域链**

- 1.当前域没有会去它的上级域查找，直到window结束，window都没有就报错
- 2.变量提升:
	- 当代码在执行前会把var和function提前进行解析
	- 并且变量赋值为undefined，函数赋值代码块.

- 3.执行上下文
	- 我只看等号赋值
- 4.如果在函数中，参数赋值比执行上下文要提前(也可以理解为，函数比正常执行多了一个参数赋值)
- 5.赋值参数问题
	- 如果实参是简单类型，函数内再怎么搞都不会影响原值
	- 如果实参是个引用类型，函数内*直接改形参的&&值&&*那么会影响原值，
	- 但是如果在函数内赋值了一个新的对象，那么此时赋值之后再怎么改参数, 都不会影响原值

###属性操作
```javascript
let obj = {
    name:value
}
obj.name

ele.href
ele.innerHTML
ele.value
ele.src
ele.id
ele.className
.....


box.属性有2种方式是可以直接获得到的
    1.设置了一个
        box.zdy = 0;
        console.log(box.zdy)

    2.元素对象默认的属性
        box.id

在行间获取自定义属性
    ele.getAttribute('属性名')


在行间设置自定义属性
    ele.setAttribute('属性名','属性值')

```    
###箭头函数
**箭头函数：** 一种函数的简写方式
- 1.let fn = () => {}   没有参数
- 2.let fn = (a,b,c) => {} 多个参数
- 3.let fn = a => {} 一个参数
- 4.let fn = a => a; return a
- 箭头函数的this，跟它的执行上下文有直接的关系。箭头函数的this找老爹
- `箭头函数没有arguments`
- `箭头函数不能new，neW会报错`

###闭包
 闭包：函数套函数，子函数使用父函数的参数或者变量并且子函数被外界所引用，此时父级形成闭包环境，父级的参数或者变量不被浏览器垃圾回收机制回收.此时，打印父函数的返回值，有个属性为Scopes,Scopes下有个closure的属性，closure 就是闭包。

`使用闭包可以一直存储父级的参数或者变量
不被外界的函数或者变量所干扰（污染）`

###git安装
- git ：是个版本控制工具
- github https://github.com/
	程序员交友网站、进行代码托管、去加入一些知名项目的开发、自己静态的页面..
- git 与 github进行关联
        设置秘钥:
            1.进入github
            2.找到你的头像，点击选择settings         
            3.在最左边有SSH and GPG keys


生成秘钥参考:
https://blog.csdn.net/lqlqlq007/article/details/78983879
             
密钥输入之后：
>点击鼠标右键，选择git Bash here
            
输入：
- ssh-keygen -t rsa -C "这里换上你的邮箱"
>此处无脑回车，会出现方框（没出现方框，说明密钥没有成功生成，也就是没有找到ssh）
- git config --global  user.name "这里换上你的用户名"
- git config --global user.email "这里换上你的邮箱"

输入：
- ssh -T git@github.com 
>只要出现Hi ....就说明绑定成功


**git ：是个版本控制工具**
> 新建控制项目：
    1、git init
    2、到github网站中新建项目（推荐使用）

    
**github建立仓库步骤:     **
  > 1、点击头像旁边的 +号 选择 New repository
	 2、填写项目名称、描述、勾选readme、点击创建按钮
	 3、找到clone按钮，点击复制
	 4、在你想管理的文件夹下打开git工具，输入git clone 刚才复制的地址可以使用ctrl+v, shift+insert,点击鼠标右键,选择粘贴


**git 命令：**
```
cd ..  返回上一级 

 ls 查看当前文件夹下有多少文件

 git  status  查看当前版本状态

 git add 文件名 工作区到存储区（暂存区）

 git commit -m "注释" :暂存区到版本区

 git reset --hard 最新的master编号

 git diff 工作区查看暂存区
 
 git diff --cached 暂存区查看版本区

 git diff master  工作区查看版本区

 git log  查看版本信息（q键退出）

 git push origin master 把形成版本的代码提交到远程仓库

 git reflog 查看操作过的版本

 git reset --hard 还原版本

 git pull   拉取、更新

 git config --global credential.helper store

 当代码已经形成版本之后，想把代码提交到远程仓库(github、gitlab、码云...)
 可以使用：
 git push origin master

 永久免密上传:
 git config --global credential.helper store
```

###单例模式


> 单例模式：单例 --- 单独的实例
实例：把相同的事务总结(归纳、抽象)出来，形成一类事务,把描述事务的属性和方法具体化，这个具体的描述的对象就是实例.


> 教师  -> 那么多职业中的一类职业  （类）
>语文老师 - 倪XX （实例）


**解决命名冲突：**
> 1.封闭空间
	把一段代码放到一个函数内,当执行函数的时候
	函数内的域和外界是互不干扰的
	(function(){})()
		
> 2.命名空间
	把一些变量或者函数变成某个对象下的属性和方法
	对象与对象之间空间地址是不一样的，所以可以解决
	命名冲突的问题

> 变量 let a = 20;
  属性 obj.a = 20;
	
> 函数:function fn(){}
  方法:obj.fn = function(){}
  
**单例模式的优势:**
> 1.解决命名冲突
> 2.把相同事务归为了一类，并且把这些属性或者方法放到了一个堆内存空间中存储。
> 3.模块化的开发

**高级单例模式**
> 单例模式功能相对单一,用来描述具体一个事务让其复杂，那就需要高级单例模式.
> 使用一个匿名函数自执行函数，这个函数返回一个对象。
>高级单例模式，可以实现高内聚、低耦合


###工厂模式

  工厂模式：
> 目的是批量生成多个实例，通过传参去描述具体的实例，把生产后的对象返回到外界使用。

```javascript
    function fn(name,age){
        let obj = {}; //原材料
        //加工
        obj.name = name;
        obj.age = age;
        //出厂
        return obj;
    }

    let 机器人1号 = fn('001',8);
    let 机器人2号 = fn('002',8);

    console.log(机器人1号); //{name:001,age:8}
    console.log(机器人2号);//{name:002,age:8}
```


###构造函数

> 构造函数:
        把属性或者方法挂在this上，然后去new这个函数
        浅规则是构造函数首字母大写。
    
> new 是一元运算符 -> *专门*运算*函数*的

	 1.执行函数,不使用()调用也是可以执行函数的，此时的()只是为了传参
	
	 2.构造函数(fn)中的this指向了当前实例。
	     跟普通函数比较把默认的window转成当前实例
	     function Fn(){}  构造函数
	     fn{}  实例化对象
	
	 3.return 的结果默认指向当前实例this,
	 有return 如果后面跟着的是一个基本类型
	 结果依然是实例,如果后面跟着的是一个引用
	 类型，那么结果就是这个return后的引用类型



面向对象编程:
- 把描述相同的事务抽象出来，归为一类，把描述这个类的属性和方法挂在这个类的原型(prototype)上的一种编程方式就叫面向对象。
- 抽象：抽离出相像的部分
- js面向对象特征：抽象、封装、继承、多态（传不同的参数）
- 类->构造函数->把相同的代码抽离出来归纳在一个函数中

```javascript

// function Fn() {
//     console.log(this);
// }
// new Fn();  //不加new  是普通对象,this指window  加new this指向Fn{}

// // =============================
// function Fn1(name, age) {
//     this.name = name; //this就是当前的实例对象
//     this.age = age;
// }

// //批量生产
// let one = new Fn1('001', '1');
// let one1 = new Fn1('002', '2');
// let one2 = new Fn1('003', '3');
// let one3 = new Fn1('004', '4');

// console.log(one, one1, one2, one3);

function Polices(id, name, sex) {
    this.id = id;
    this.name = name;
    this.work = '警察';
    this.sex = sex;
}
Polices.prototype.cloth = function () {   
    console.log('制服');
}
Polices.prototype.daiqiang = '配枪';

let p1 = new Polices('001', '黑猫警长', 'man');

p1.cloth();//制服
console.log(p1.daiqiang);//配枪
console.dir(p1);/*Polices
                   id: "001"
                   name: "黑猫警长"
                   sex: "man"
                   work: "警察"
                   __proto__: Object*/

```


###原型模式

使用原型的目的:

> 当构造函数中添加方法的时候，每new一次就生成一个同类方法，这些方法虽然同类但是各自不相等，这就导致如果new若干次，那么就会生成若干个一摸一样的方法，这样对性能是不友好的，所以我们要使用原型的方式去把方法挂在原型上。

原型：
> 当定义一个函数的时候,这个函数自身有一些属性或者方法，其中有一个属性叫做prototype,这个属性就叫原型

` prototype它是一个对象`

 它的用处是如果实例化对象上没有某个属性或者方法还会去这个实例化对象的构造函数中的原型下去查找该属性或者方法.

 如果构造函数的原型上没有这个方法，那么还会去原型下的原型链（__proto__）中查找，找到Object.prototype
			
			{
			      prototype:{
			
			      }
			  }
`换言之：构造函数的原型下的方法只给它的实例化对象使用`
> class 类：以构造函数模式 + 原型模式 = js面向对象模式


```javascript
	创建一个警察类
		function Police(name,id){
		this.name = name;
		this.job = '警察';
		this.uniform = '警服';
		this.id = id;
		this.zongzhi = '为人民服务'
		}
		Police.prototype.wq = function(){
		console.log('带枪');
		}
		Police.prototype.wg = function(){
		console.log('胸口碎大石');
		}
		Police.prototype.cadd = function(){
		console.log('抓贼');
		}

    实例化一个黑猫警长

        let p1 = new Police('黑猫警长',001);
        p1.种族 = '猫'

        let p2 = new Police('x战警',002);
        p1.cadd();
        p1.wq();
        p1.wg();

        p2.cadd();

        [].push
        [].push

```


**原型**
```javascript
只要是个函数，函数下都有一个叫prototype的属性值为对象，这个原型下的方法或者属性只有2种方式可以获取
	1.obj.prototype.xx();
	2.new obj().xx()
	
原型链: __proto__
实例上一定有原型链
	
实例化对象上的原型链 === 构造函数的原型
对象.__proto__ === 函数.prototype
对象上有原型链 -> 指向构造函数的原型

```

> 1.先看对象自身有没有这个属性或者方法  
            有就不找了
            没有的话就接着找

> 2.通过对象的原型链找构造函数的原型
            有就不找了
            没有的话就接着找

> 3.因为函数的原型是个对象，对象身上有原型链，通过原型链又去找构造函数原型
            有就不找了
            没有的话就接着找

> [ ] -> new Array
        function fn(){} -> new Function

>所以说，函数即是函数，又是对象(它是Function的实例化对象)函数即有原型，也有原型链，函数的原型上的属性或者方法只给它的实例化对象使用。

###构造函数、原型、原型链总结

原型：
- prototype为 一个函数天生自带的属性，它的值是一个对象
- 为了优化性能的，prototype只给它的实例化对象使用
- 如果在相同的类中去new多个实例，它们的构造函数原型上的方法是相等的

原型链：
- 一种是__proto__:
- 实例上才有__proto__
- 实例对象.__proto__ === 构造函数下的原型

- 另一种是查找规律:

	- 实例化对象上有或者没有怎么看？（某个属性或者方法）
                
			如果它是构造函数:
			     function Fn(name){
			         this.name = name
			     }
			     new Fn
			     Fn{name:1}
			
			     let fn = new Fn
			     fn{name:1}
			     
			
			 如果它是对象:
			     {name:1}
			
			 f = new Fn
			 f.say = function(){}

            如果说实例化对象上没有怎么办?
                构造函数.原型

            如果说构造函数.原型下没有怎么办？
                构造函数.原型.__proto__ 


**function的三种形态：**

- 普通函数
                function fn(){}
-  构造函数（类）构造对象的函数 得使用new
                function Fn(name){
                    this.name = name;
                }
-  实例化对象  new Function的实例化对象
                let fn = new Function();


```javascript
   <style>
        .box {
            width: 200px;
            height: 50px;
            border: 1px solid #000;
        }

        .box div {
            display: none;
        }

        .box div.show {
            display: block;
        }

        .active {
            background: yellow;
        }
    </style>
</head>

<body>

    <div class='one'>
        <button class="active">按钮1</button>
        <button>按钮2</button>
        <button>按钮3</button>

        <section class="box">
            <div class="show">头条</div>
            <div>体育</div>
            <div>新闻</div>
        </section>
    </div>

    <div class='two'>
        <button class="active">按钮1</button>
        <button>按钮2</button>
        <button>按钮3</button>

        <section class="box">
            <div class="show">头条</div>
            <div>体育</div>
            <div>新闻</div>
        </section>
    </div>



    <script>
function Fn(a) {
this.name = document.querySelector(a);
this.btns = this.name.getElementsByTagName('button');
this.divs = this.name.querySelectorAll('div');
}
//发生点击事件
Fn.prototype.event = function () {
    let opt = this;//实例化对象的this赋值给opt
    //循环找到每个按钮
    for (let i = 0; i < this.btns.length; i++) {
        this.btns[i].onclick = function () {
            opt.change(i); //只有实例化对象才能使用构造函数的方法
        }
    }
}

//定时进行切换
Fn.prototype.play = function () {
    let n = 0;         
    setInterval(() => {
        n++;
        if (n > this.btns.length - 1) {
            //console.log(this); //Fn{} 箭头函数的this找父级所在的作用域
            n = 0;
        }
        this.change(n);
    },500)
}
//按钮循环清楚每个按钮和div的样式，然后在把当前按钮和div样式添加上
Fn.prototype.change = function (index) {
   for (let j = 0; j < this.btns.length; j++) {
       this.btns[j].className = '';
       this.divs[j].className = '';
   }
   this.btns[index].className = 'active';
   this.divs[index].className = 'show';
}

let f1 = new Fn('.one');
let f2 = new Fn('.two');
f1.event();
f2.play();
    </script>

```

###各类this指向

- window:
            1.直接在全局输出this
            2.函数打印this,并且直接调用
            3.定时器中普通函数this为window
            4.匿名函数自执行

- 事件中的this：
            哪个对象触发，this就是那个对象，事件中一般不建议用个箭头函数。

- 实例：new 构造函数 -> this就是实例

- 箭头函数:
            this就走定义箭头函数的域
            箭头函数不能new，一new就报错
            箭头函数也没有arguments

- 对象中的this
           let obj = {fn:function(){console.log(this)}}

###包装对象
默认undefined：
        1.对象没有属性的时候
        2.函数没有返回值
        3.形参没有实参
        4.变量没有赋值
        5.简单类型的自定义属性


`只有在引用类型下才能添加属性或者方法 ` 

包装对象:
    当简单类型去使用某个属性或者方法的时候，
    内部会偷偷地转成对象(new 内置类)把属性
    或者方法提供使用者，然后再悄悄地销毁
    这个过程就叫包装对象。

###对象自身属性
for in不但会枚举本对象，还会枚举原型，此时就会多出来一些莫名其妙的东西

但是我们不想要那么不是对象上的东西.

**obj.hasOwnProperty('属性名')**
    查看某个属性是不是对象自身的

返回值:
    布尔值，是就为true，不是就为false


###修改this方法
> 一个函数，天生就自带一些属性和方法：

> 其中有：apply()、call()、bind()他们都能改变this指向



- call：
            有无数个参数
            第一个参数:
                改变this指向（写啥是啥）
                    null和undefined为window
            第二个参数之后:
                就是实参

- apply:
            有2个参数
            第一个参数:
                改变this指向（写啥是啥）
                    null和undefined为window
            第二个参数:
                数组[1,2,3]
                数组中放参数
- bind:
            有无数个参数
            第一个参数:
                改变this指向（写啥是啥）
                    null和undefined为window
            第二个参数之后：就是实参

`使用bind不能立马执行函数，会返回一个新函数，这个函数的this是改变了的，得执行这个新函数才能输出代码。`

```

    // function fn(a,b,c){
    //     console.log(this,a,b,c);
    // }

    // // fn.call(false,1,2,3);
    // fn.apply(true,[1,2,3]);

    // console.dir(fn);
```
```javascript
如何判断一个变量为数组？

Array.isArray(arr) -> true
arr instanceof Array -> true
Object.prototype.toString.call(arr) === '[object Array]'  ->true

[1,2,3] -> '1,2,3'
1 -> '1'
{} -> '[object Object]'

-> [object String]


Object.prototype.toString.call(arr)
每个数据类型都有自己的toString方法
每个toString方法都不一样

正好Object的toString方法能够显示当前的数据类型

Object.prototype.toString = function(){
    this 处理Object
    return 结果
}

Object.prototype.toString.call(arr) 

'[object Array]'

类数组转数组的方法:
    Array.prototype.slice.call(arr);
    Array.form(arr);

取数组大小值:
    console.log(Math.max.apply(null,ary));
    console.log(Math.max(...ary))
```    

###JSON方法
```
JSON标准格式：长的像对象或者数组的
     '{
         name:'小明',
         age:18
     }'
     '[]'
```

```
对象:
       {
           name:'小明',
           age:18
       }

   xml:
       <person>
           <name>小明</name>
           <age>18</age>
       </person>
```

> JSON -> [] | {}
> JSON.parse() :能够把json转成对象或者数组
>json必须是一个标准格式的json,不然转不出来json中不能放函数、不能为undefined
	 '{"name":12,"nn":"ds"}'

>  JSON.stringify()
      把对象或者数组转成json
      对象中不能放函数、不能为undefined

  
> 低版本可以使用json2.js
> eval 能够把字符串尽量转成js能执行的代码。
> new Function('','console.log()')   

   
###继承
 继承：子类继承了父类的一些特征，然后自己还有一套自己的特征
            
> 为什么要继承？
            就是为了代码能够更好复用，组合起来生成一个新的类别

**继承的几种方式：**

**1、类式继承（构造函数绑定继承）**
造函数方式就是假借call和apply方法，把父类的构造函数嫁接到子类身上，子类new出一个实例的时候，就把父类的构造函数的内容copy到实例中了。
```javascript

//构造函数继承
// 父类
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//父类原型对象属性
Person.prototype.say = function () {
  console.log(this.name + '我是父类！');
}

//子类
function Child(name, age, sex) {
  Person.call(this, name, age); //使用call,apply方法把父类Person构造函数绑定到子类上
  this.sex = sex;
}

let child1 = new Child('小明', 20, '男');
console.log(child1);//{name: "小明", age: 20, sex: "男"}
console.log(child1.say);//undefined  没有继承父类原型的方法say属性

优点：对于基本属性而言，非常棒，每个实例之间不共享属性，立刻拥有自己的私有属性了。 
缺点：对于方法属性而言，实现了属性的私有，没有实现方法的共享。

```

**2、原型继承**

```javascript

//========================2、原型继承（含扩展式继承）

//=======1）prototype模式 子类原型为父类的一个实例（比较耗费性能，需要先执行父类，再去查找）
// 父类
function Person(name, age) {
    this.name = name;
    this.age = age;
}
//父类原型对象属性
Person.prototype.say = function () {
    console.log(this.name + '是父类！');
}

//子类
function Child(name, age, sex) {
    Person.call(this, name, age); //使用call,apply方法把父类Person构造函数绑定到子类上
    this.sex = sex;
}
//它相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
Child.prototype=new Person;
//任何一个prototype对象都有一个constructor属性，指向它的构造函数.
alert(Child.prototype.constructor==Person);//true 
Child.prototype.constructor =Child; //需要手动修改子类原型的构造函数为自己
alert(Child.prototype.constructor==Person);//false
let child1 = new Child('小明', 20, '男');
console.log(child1);//{name: "小明", age: 20, sex: "男"}
child1.say();//输出：小明是父类   //继承了父类的say属性

Child.prototype.say=function(){
    console.log(this.name + '是子类！');
}

child1.say(); //输出：小明是子类！
let p1 = new Person('大明',50,'男');
p1.say(); //输出：大明是父类！ 


//=======2）直接继承prototype  
//这样做的优点是效率比较高（不用执行和建立Person的实例了），比较省内存。
//缺点是 Child.prototype和Person.prototype现在指向了同一个对象
//那么任何对Child.prototype的修改，都会反映到Person.prototype。
// 父类
function Person(name, age) {
    this.name = name;
    this.age = age;
}
//父类原型对象属性
Person.prototype.say = function () {
    console.log(this.name + '是父类！');
}

//子类
function Child(name, age, sex) {
    Person.call(this, name, age); //使用call,apply方法把父类Person构造函数绑定到子类上
    this.sex = sex;
}
//父类原型地址复制给子类
Child.prototype = Person.prototype;
Child.prototype = { ...Person.prototype }; //扩展式继承 不会共享一个地址
Child.prototype.constructor = Child; //需要手动修改子类原型的构造函数为自己

let child1 = new Child('小明', 20, '男');
console.log(child1);//{name: "小明", age: 20, sex: "男"}
child1.say();//输出：小明是父类   //继承了父类的say属性

Child.prototype.say = function () {
    console.log(this.name + '是子类！');
}

child1.say(); //输出：小明是子类！
let p1 = new Person('大明', 50, '男');
p1.say(); //输出：大明是子类！  子类原型属性修改后父类跟着发生了变化
```

**3、组合式继承**

```javascript
// ============================3、下面也可称为组合式继承
//组合式继承采用了原型链式继承和构造函数式继承结合的办法。
// 我们把（我们希望子类有一份拷贝的）基本属性放在父类的构造函数里。 
// 我们把希望共享的函数方法放在父类的原型上。
// 实现了函数的共享，也实现了属性的私有。
// 父类
function Person(name, age) {
   this.name = name;
   this.age = age;
}
//父类原型对象属性
Person.prototype.say = function () {
   console.log(this.name + '是父类！');
}

//子类
function Child(name, age, sex) {
   Person.call(this, name, age); //使用call,apply方法把父类Person构造函数绑定到子类上
   this.sex = sex;
}

function extend(Child, Parent) {
   //F是空对象，所以几乎不占内存。这时，修改Child的prototype对象，就不会影响到Person的prototype对象。
   var F = function () { };
   F.prototype = Parent.prototype;
   Child.prototype = new F();
   Child.prototype.constructor = Child;
   Child.uber = Parent.prototype;//意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。只是为了实现继承的完备性，纯属备用性质

}
extend(Child, Person);
let child1 = new Child('小明', 20, '男');
console.log(child1);//{name: "小明", age: 20, sex: "男"}
child1.say();//输出：小明是父类   //继承了父类的say属性
Child.prototype.say = function () {
   console.log(this.name + '是子类！');
}
child1.say(); //输出：小明是子类！
let p1 = new Person('大明', 50, '男');
p1.say(); //输出：大明是父类！  

```

**4、拷贝继承方式（包含深度拷贝）**
```javascript

//=============================4、拷贝继承方式
// 父类
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//父类原型对象属性
Person.prototype.say = function () {
  console.log(this.name + '我是父类！');
}

//子类
function Child(name, age, sex) {
  Person.call(this, name, age); //使用call,apply方法把父类Person构造函数绑定到子类上
  this.sex = sex;
}

//这个函数的作用，就是将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。
function extend(Child, Parent) {
  let p = Parent.prototype;
  let c = Child.prototype;
  for (let i in p) {
      c[i] = p[i];
  }
  c.uber = p;
}
extend(Child, Person);

let child1 = new Child('小明', 20, '男');
console.log(child1);//{name: "小明", age: 20, sex: "男"}
child1.say();//输出：小明是父类   //继承了父类的say属性

Child.prototype.say = function () {
  console.log(this.name + '是子类！');
}
child1.say(); //输出：小明是子类！

let p1 = new Person('大明', 50, '男');
p1.say(); //输出：大明是父类！


 //==================深度拷贝继承
        
function Person(name,age){
   this.name = name;
   this.age = age;
}
Person.prototype.say = function(){
   alert('我叫'+this.name);
}

function Coder(name,age,job){
   Person.call(this,name,age); //Coder继承Person的属性
   this.job = job;
}


Coder.prototype = deepClone(Person.prototype);  //深度拷贝

Coder.prototype.say = function(){
   alert('我叫'+this.name+'是一个代码传说');
}

Coder.prototype.coding = function(){
   console.log('会敲代码');
}

let p = new Person('001','好几千年');//Person{}
let c = new Coder('002',20,'码农');

p.say();
c.say(); 
c.coding();

function deepClone(obj){
   //先声明一个数组，去存克隆出来的内容
   //判断obj是否为数组，是数组o就为[],否则为{}
   let o = obj.push?[]:{};
   //循环传进来的对象
   for(let attr in obj){
   // for(let i=0;i<arr.length;i++){
       //判断对象中的某个值是否为引用类型
       //如果是，就继续调用deepClone把引用值传到函数中
       if(typeof obj[attr] === 'object'){
           o[attr] = deepClone(obj[attr])
       }else{
           //如果是简单类型就直接赋值
           o[attr] = obj[attr];
       }
   }
   return o;
}

        
```
**5、寄生式组合（混合式）**
```javascript
 //=============5、寄生式组合（混合式）
// 父类
function Person(name, age) {
   this.name = name;
   this.age = age;
}
//父类原型对象属性
Person.prototype.say = function () {
   console.log(this.name + '我是父类！');
}

//子类
function Child(name, age, sex) {
   Person.call(this, name, age); //使用call,apply方法把父类Person构造函数绑定到子类上
   this.sex = sex;
}

//  Object.create({})   必须传入一个对象

//       返回值为一个新的对象，这个对象的原型链指向传入的参数

Child.prototype=Object.create(Person.prototype);


let child1 = new Child('小明', 20, '男');
console.log(child1);//{name: "小明", age: 20, sex: "男"}
child1.say();//输出：小明是父类   //继承了父类的say属性

Child.prototype.say = function () {
   console.log(this.name + '是子类！');
}

child1.say(); //输出：小明是子类！

let p1 = new Person('大明', 50, '男');
p1.say(); //输出：大明是父类！
```
**6、class类继承**
```javascript

====================6、class类继承
class Animal{
   constructor(name){
       this.name=name;
   }

  static sleep(){ //设置静态方法
       console.log(this.name+'正在睡觉');
  }
   eat(){ //动态方法
       console.log(this.name+'都喜欢吃！');
   }
}

class Cats extends Animal{
   constructor(name){
       super(name);//继承父类 不写super(),下面的this找不到
       this.cry = '喵喵';
       this.life = '九条命';
   }
   skill(){
       console.log(this.name+'抓Jerry');
   }
   eat(){
       console.log(this.name+'吃鱼');
   }
}
class ColorCat extends Cats{
   constructor(...arg){ //剩余运算符
       super(...arg); //扩展运算符
       this.color = '有颜色的猫！';
   }
}

let tom = new Cats('汤姆');
console.log(tom);
tom.eat(); //这种实例执行方法的方式为动态方式    //Array from()这类属于静态方法
tom.skill();

let animal1 = new Animal('动物');
console.log(animal1);
animal1.eat();
Animal.sleep();
// animal1.sleep();//静态方法高级对象（实例化）对象无法调用，也继承不了

let color1 = new ColorCat('花猫');
console.log(color1);

```
```javascript
1、继承的方式有哪些？
扩展式:	
	child.prototype = 	{...Parent.prototype}
原型式:
 function paohui(){}
 paohui.prototype = parent.prototype
 child.prototype = new paohui

拷贝:   
	child.prototype = deepclone(parent.prototype)

 child.prototype = Object.assgin(parent.prototype)

寄生:
	child.prototype = Object.create(parent.prototype)

类式:
 function Parent(){
     this.name=name }
 function Child(){
 Parent.call(this)
 }
class式：class Child extends Parent {}

2、什么式浅拷贝，什么深拷贝，deepClone的原理
浅拷贝：
let obj  = {age:18}
let obj2 = {age:18} 
一个引用类型赋值的时候，只赋值第一层的简单类型，这样
两个空间地址不一样，改变一个空间的属性是不会影响另一个空间地址的属性的
把一个对象中的第一层的简单类型赋值给另一个对象

let obj2 = Object.assgin(obj)
let obj2 = {...obj}

for(let attr in obj){
obj2[attr] = obj[attr];
}

深拷贝:把一个对象中的第一层有引用类型，那么赋值的时候改变一个会影响另一个（因为赋值的过程还是赋值地址），需要只要发现引用类型就深入到内部去找简单类型，直到对象中的所有属性都是简单类型为止。

function deepclone(obj){
let o = obj.push?[]:{};
for(let attr in obj){

if(obj.hasOwnProperty(attr)){
if(typeof obj[attr] === 'object'){

o[attr] = deepclone(obj[attr])

}else{
	o[attr] = obj[attr]
}
}
}

return o;
}

```


>  constructor 
	 实例下的constructor == 实例的构造函数
  但是这个constructor是随时随地随便可以修改的
  constructor只能当做实例中指向构造函数的一种参考物并不是能够左右实例的构造函数真相。

constructor什么时候会被修改呢？
  给构造函数的原型赋址对象的时候会变

解决:
  手动修正constructor指向
  {
      constructor:构造函数
  }


###class类

   
  class (类) 保留字：class是ES6才出来的新语法，优势就是写起来方便，它其实还是之前构造函数的语法糖 
	> class 类名 {
				使用constructor去接收参数
				            constructor(a,b){
				}
				  方法名 () { } 
				  }

**设置静态方法：**
       > static 方法名( ){
            console.log('睡觉');
        }

###三点(...a)
> 1.扩展运算符
	2.剩余运算符  
```javascript
class Person {
   constructor(name,age) {
       this.name = name;
       this.age = age;
   }
}

class Women extends Person {
   //剩余运算符
   constructor(fs,...arg) {
       //扩展运算符
       super(...arg);
       // console.log(arg)
       this.sex = '女';
       this.fushi = fs;
   }
}

let w = new Women('爱穿裙子','女孩纸',18);
console.log(w);
```

###正则（对象）
**正则表达式**，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本。

**创建正则的两种方式：**
 简写：/^\d+$/   字面量方式创建
 实例化：new RegExp('字符串'，'修饰符')   构造函数方式
**元字符：**
当\ + 字母的时候会有特殊含义，这种带有特殊含义的，我们叫元字符
  >           
**特殊元字符：**
 \n  换行
 \d   0-9之间的一个数字
 \D 非0-9之间的任意字符


**1.创建正则表达式对象**
>方式一：使用关键字new创建
	var reg = new RegExp('pattern','modifiers');
	 pattern：正则表达式的匹配模式。(字符串形式)
	 modifiers：匹配模式修饰器
- 3种模式修饰符分别是：
	g：表示全局。匹配全部，如果不写g则匹配成功一个就结束。
	i：表示忽略大小写。在匹配的时候不区分大小写
	m：表示可以多行匹配。
	
>方式二：使用正则表达式字面量创建
 var reg = /pattern/modifiers;
 说明：pattern表示正则表达式的模式，最后一个/的后面是模式修饰符。


**2.正则表达式常用方法**
> 
**test()方法:**
用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
var isMatch = 正则表达式对象.test(字符串);
参数：要匹配的字符串
返回值：匹配成功返回true，失败返回false。

> **exec()方法:**
用于检索字符串中的正则表达式的匹配
var values = 正则表达式对象.exec(字符串);
参数：要匹配的字符串
返回值：返回的是一个Array，且将匹配成功的值存放在数组下标0的位置。如果没有匹配则返回null。

**3.正则表达式操作的字符串方法常用方法:**
>search(regex) 方法
用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

>replace(regex,replaceValue)方法 
用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串，返回替换后的字符串（注：替换所有）。
 - 
    string.replace(要替换的字符串||正则,替换成什么||函数);
    当第二个参数为函数的时候
    默认情况:
        函数的第一个参数就是每次匹配到的结果
        函数的第二个参数index
        函数的第三个参数input
        函数的第四个（及以后）参数undefined
    此函数必须要有return，不然默认为undefined
    返回值为新的字符串
    | 或者

>match(regex)方法 找到一个或多个正则表达式的匹配结果，返回数组。

>split(regex,limit)方法把字符串分割为字符串数组。

```javascript
function testTest() {
let s = "Hello wrld!world";
//i 表示忽略字母大小写，g表示匹配全局，匹配全部，如果不写g则匹配成功一个就结束，m表示可以多行匹配
//方法一：创建正则表达式对象
// var regExp = new RegExp("world","igm");
//方法二：使用正则表达式字面量创建
let regExp = /^world$/igm;
// test()方法：匹配的字符串，匹配成功返回true，失败返回false
let isExit = regExp.test(s);
console.log(isExit);  //false
}
//exec() 方法 ：匹配的字符串，返回的是一个Array，且将匹配成功的值存放在数组下标0的位置。如果没有匹配则返回null。
function testExec() {
let str = "abc1234ABC";
let regExp = /[a-z]+/gim;
//console.log(regExp.exec(str));
//匹配字母输出
while (true) {
let exec = regExp.exec(str);
//console.log(exec)
if (exec) {
console.log(exec[0]); //abc  ABC

} else {
break;
}

}

}
//search(regex)方法：    检索与正则表达式相匹配的第一个匹配项的索引。
function testSearch() {
var str = "bb3:n:";
// 返回第一个 : 的出现位置
var number = str.search(/:/);
console.log(":出现的第一个位置：" + number); //:出现的第一个位置：3
}

//match(regex)方法 ：找到一个或多个正则表达式的匹配结果，返回数组。
function testMatch() {
var str = "a2bb3:n:5";
// 匹配所有的数字
var match = str.match(/\d+$/g); //["5"]
console.log(match.toString()); //5
}

// replace(regex,replaceValue)方法 :替换所有与正则表达式匹配的子字符串，返回替换后的字符串。
function testReplace() {
var str = "a2bb3:n:5";
//将数字替换为+
var replace = str.replace(/\d+/g, "+");
console.log(replace); //a+bb+:n:+
}

// split(regex,limit)方法 把字符串分割为字符串数组。limit表示只取匹配成功的limit个
function testSplit() {
var str = "a2:bb3:n:5";
//第二个参数表示只取几个值
//使用: 分割字符串，并只取2个
var split = str.split(/:+/g, 3);
console.log(split.toString()); //a2,bb3,n
}
testTest();
testExec();
testSearch();
testMatch();
testReplace();
testSplit();

```

**子项：**
 () 小括号

1.()  提权  (1+1)*1
2.()  子项
    能够在一个规则中提取某些(指定)字符

` 注意:
     子项如果包了一个规则，在规则之后有量词，那么结果为最后一个
         比如:
             let str = '2019'
             (\d)+  -> 找到的数字不是2是9`

\d 一个数字
\D 一个非数字 （不是数字）

子项的顺序是从左往右数的，每有一个()就是一个子项
从第二个参数起子项与形参一一对应

**重复子项：**
子项重复项: \ + 数字

      比如:
          /(d1)c1(b1)\1\2/
          当前有2个子项，一个是d1另一个是b1
          \1就代表第一个子项，\2就代表第二个子项
         
**[ ]在中括号中任意选择一个字符**
比如:
  [12345] 可以为1也可以为2也可以为3...

也可以简写为[1-5],因为 - 是1到5的意思
为什么能那么写呢？
  因为顺序是按照unicode编码来的
数字是:[0-9]
小写英文:[a-z]
大写英文:[A-Z]
从大A到小z:  [A-z] 不行的;  [A-Za-z]

**正则总结：**
- 1、专门用来检索模糊范围字符串的一种规则叫正则
               > /不带引号的字符串/ ->/a/ 找字符串'a'
                new RegExp('字符串'|//,'修饰符')->new RegExp('a','i')  /a/
- 2、正则的方法
                >reg.exec(str)捕获一项
                reg.test(str)验证字符串是否匹配正则  返回正则

- 3、字符串能正则的方法
             >string.match 捕获一项或者多项
	            string.replace(''|/()/,''|fn)  fn要有返回值
			有子项 ，从第二个参数起就一一对象

- 4、()提权、子项
                > ( \d ) + ->最后一个  2019-9
                (\d)\1(\D)\2： \1重复第一个子项  \2重复第二个子项

- 5、[ ]
               > 数字[0-9]
                英文[A-Za-z]
                中文[\u4e00 \u9fa5]

- 6、^ $ 开头和结尾
               > /^(\d)$/
- 7、修饰符
                >i   忽略大小写
                g   全局
                m   多行

- 8、量词
			>  { }  {n,m}范围 最小n次，最多m次
				{n} 最大是n最小也是n
                ?   {0,1}最小0次，最多1次
                *   {0，}最小0次，最多无限次
                +   最小1次，最多无限次
           
- 9、转义字符
               > \d  一个数字
                \D  一个非数字
                \n  换行
                \s  一个空格
                \S  一个非空格
                \w 一个数字、字母、下划线
                \W 一个非数字、字母、下划线之外的任意字符
                \b 一个边界符
                \B 一个非边界符
                \r\n    回车换行
                .   除回车\r之外的任意字符

- 10、正则的特征
                    >懒惰性：
                        如：\d  直接会找到9
                    贪婪性：
                        如：\d+ 有多少会匹配多少数字
        
###盒子模型
**计算样式：**
```
obj = {
            style:{
                height:'100px'
                width:''
            }
        }
```
- 元素的style下的属性，默认为空字符串。
- 计算后的样式:
- getComputedStyle(element).属性
- 获取到的结果为**带单位**的字符串：比如:100px
        
   **获取宽高：**
- ele.clientWidth/ele.clientHeight  
        支持padding,不包含边框
            元素**可视区**宽度  不带单位的数字
- ele.offsetWidth/ele.offsetHeight
        支持padding,也包含边框,不带单位的数字
`上面这2个，如果设置一个固定值，就以固定值为依据显示;不会以被内容撑开显示`
        
- ele.scrollHeight/ele.scrollWidth
        被内容撑开的高度（不包含边框）
`不管设不设置固定样式，都以被内容撑开为显示结果`

**距离：**
- offsetParent
            定位父级:没有定位父级走body
    
- offsetLeft
            当前元素（左外边框）到定位父级的（左内边框）距离
- offsetTop
            当前元素（上外边框）到定位父级的（上内边框）距离
`获取的是不带单位的数字`
 `       
如果要使用上面的属性，一定要做到以下几点
        1.子级有绝对定位
        2.定位父级也一定要有定位
        3.子级和父级都要有宽高（触发haslayout，zoom:1）`

示例：
```javascript
<style>
#box{
    width: 100px;
    height:100px;
    background: red;
    position: absolute;
    top:0;
    left:0;
}
</style>
</head>
<body>
    <div id="box"></div>
    <button id="btn">停止</button>
<script>
    /*
        渲染帧是指浏览器一次完整绘制过程，
        帧之间的时间间隔是DOM视图更新的最小间隔。 
        由于主流的屏幕刷新率都在60hz，
        因此渲染一帧的事件就必须控制在16.7ms内才能保证不掉帧。
        也就是说每一次渲染都要在 16.7ms 内页面才够流畅不会有卡顿感。
    */
    let timer = null;
    box.onclick = function(){
        timer = setInterval(() => {
            box.style.left = box.offsetLeft + 1 + 'px'; //left每次往右走1px
            //console.log(box.style.left );
        }, 16.7);
    }
    btn.onclick=function(){
        clearInterval(timer);
        timer=null;
    }
</script>

```

**绝对位置：**
- 绝对位置：当前元素到页面顶端的位置。
- clientLeft/clientTop 边框尺寸

- getComputedStyle(box3).borderTopWidth 边框尺寸

- getBoundingClientRect() 当前元素到页面可视区的尺寸、距离
` 注意: **是跟滚动条走的。
        width/height/left/right/top/bottom/x/y`

示例：
```javascript
 <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            padding: 100px;
        }

        #box1 {
            background: tomato;
            position: relative;
            margin-top: 100px;
        }

        #box2 {
            background: gold;
            position: relative;
            border: 10px solid #000;
        }

        #box3 {
            background: firebrick;
            position: absolute;
            border: 10px solid #000;
            margin-top: 50px;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
       
   //方法1
   let obj = box3;
   let t = 0;
   let l = box3.clientTop;//parseInt(getComputedStyle(box3).borderTopWidth)
   // console.log(box3.clientTop);
   //判断当前obj是否不为null

   //box3 -> box2 -> box1 -> 
   while (obj) {
       // t = 当前元素的上外边距 + 当前元素上边框
       t += obj.offsetTop + obj.clientTop;
       console.log(t);
       //重新设置Obj是谁，让obj变为当前的定位父级
       obj = obj.offsetParent;
   }
   console.log(t - l);
   //console.log(document.body.offsetParent); //document的父级为null



   //方法2、通过面向对象方式写
   class Tools {
       position(ele) {
           let left = 0;
           let top = 0;
           let obj = ele;

           while (obj) {
               left += obj.offsetLeft + obj.clientLeft;
               top += obj.offsetTop + obj.clientTop;
               obj = obj.offsetParent;
           }
           left -= ele.clientLeft;
           top -= ele.clientTop;
           return {
               left,
               top
           }
           //如果对象中的key值和value值一样，那么可以简写为一个
           // return {
           //     left:left,
           //     top:top
           // }
       }
   }

   let t1 = new Tools;
   //360 box3到顶部距离
   console.log(t1.position(box3).top);
   //360 box3到顶部距离    **是跟滚动条走的。
   console.log(box3.getBoundingClientRect().top);
   console.log(box3.getBoundingClientRect().right);
   console.log(box3.getBoundingClientRect())

  </script>
```
![Alt text](./QQ截图20190430194121.png)

**BOM：Borwser Object Model 浏览器对象模型**
- 获取浏览器的尺寸
                window.innerWidth/window.innerHeight
` 注意:
window.innerWidth||window.innerHeight如果有滚动条，是忽略了滚动条的尺寸的1280
document.body.clientWidth(浏览器的尺寸,排除滚动条的)使用的时候把默认样式清除 ，（会被默认样式覆盖）1263`
    
- window.open(url,用什么方式打开_blank,_self)： 打开新的窗口
                 注意：需要用户主动触发才不会被拦截
                比如： window.open('http://www.baidu.com')
    
- window.close()：关闭浏览器窗口
                    最好也是用户主动触发体验才好

**滚动条距离：**
- 滚动条的距离，只能读不能写
     window.pageYOffset/window.pageXOffset
     window.scrollTo(x,y) 专门用来写滚动条距离的
    
- 滚动条的距离，既能读也能写(document.documentElement=HTML)
            document.documentElement.scrollTop 

  
**缩放浏览器触发事件：**
- onresize  缩放浏览器的时候触发的事件

**滚动条滚动时触发事件：**
- onscroll 有滚动条的时候滚轮时触发
  
示例：返回顶部
```javascript
	<style>
*{
    margin:0;
    padding:0;
}
#box{
    width:100px;
    height:50px;
    font-size:20px;
    text-align: center;
    line-height: 50px;
    color:#fff;
    background: red;
    cursor: pointer;
    position:fixed;
    bottom:0;
    right:0;
    display: none;
}
body,html{
    height:3000px;
}
</style>
</head>
<body>
    <div id="box">返回顶部</div>
<script>
    window.onscroll = function(){
        console.log(window.pageYOffset);
        //当滚动条位置滚动到大于600时，显示红方块
        if(window.pageYOffset >= 600){
            box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    }

    let timer = null;
    //点击红方块，滚动条归为0
    box.onclick = function(){
        let t = window.pageYOffset;
        timer = setInterval(() => {
            t-=100;
            if(t <= 0){
                t = 0;
                clearInterval(timer);
            }
            window.scrollTo(0,t);
        }, 16.7);
        return t;
    }
</script>
```    

**浏览器内核信息：**

- window.navigator.userAgent，查看用户的浏览器内核信息

`注意:使用的时候判断的字符串有可能会被模拟。
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36  操作系统的版本，位数`
- window.location.href   在当前页面中跳转页面

示例：
```javascript
var str = window.navigator.userAgent;
    if(/chrome/i.test(str)){
        console.log('chrome');
    }else{
        console.log('不是chrome');
    }

    if(/chrome/i.test(str)){
        box.style.background = 'skyblue';
    }else if(/firefox/i.test(str)){
        box.style.background = 'blue';
    }else if(/msie 9.0/i.test(str)){
        box.style.background = 'red';
    }else{
        box.style.background = 'green';
    }

    console.log(window.navigator.userAgent);

    // if(/iphone/i.test(str)){
    //     window.location.href = 'http://www.baidu.com';
    // }else if(/android/i.test(str)){
    //     window.location.href = 'http://www.sogou.com';
    // }else{
    //     window.location.href = 'http://www.zhufengpeixun.cn';
    // }

```

**window.location对象下属性：**
> hash: ""  浏览器hash信息 #之后的信息，更换这个信息是不会刷新页面的
	 window.location.hash 即能读也能写
	 host: ""  ip地址 + 端口号
	 hostname: "" ip地址
	 href: ""  url
	 origin: "file://"
	 port: "" 端口
	 protocol: "file:"  协议
	 reload: ƒ reload()   刷新页面
	 replace: ƒ () 替换页面
	 search: ""  查询信息

-   hash: ""  浏览器hash信息 #之后的信息，更换这个信息是不会刷新页面的
-  window.location.href  /  window.location.search 
      - 即可读也可写，只不过写的时候会刷新页面
      - ?到#号之间的信息
    
> 如：http://www.zhufengpeixun.cn?num=1#page=0
> window.location.hash='#page=0';
> window.location.search='?num=1'
![Alt text](./1556627525699.png)


**刷新页面：window.location.reload()**
示例：

```javascript
<style>
#box{
    width:100px;
    height:100px;
    border: 1px solid #000;
}
</style>
</head>
<body>
    <div id="box"></div>
    <button id="btn">刷新</button>
<script>
    /*
        刷新页面
        window.location.reload()
    */    
    let ary = ['red','yellow','blue','green'];
    let num = 0;
    box.onclick = function(){
        num ++;
        num%=ary.length;
        box.style.background = ary[num];
    }

    btn.onclick = function(){
        window.location.reload();
    }

</script>
```

**抖动小例子：**
```javascript
<body>
<div id="box">
    <div id="box2"></div>
</div>
<script>
let ary = [10,-10,8,-8,6,-6,4,-4,2,-2,0];
let num = 0;
let timer = null;
box.onclick = function(){
let l = this.offsetLeft;
timer = setInterval(() => {
num++;
this.style.left = l + ary[num] + 'px';
if(num == ary.length){
  clearInterval(timer);
  // console.log(1);
  box2.style.transition = '0.5s';
  box2.style.transform = 'scale(.5)';
  num=0;
};
}, 16.7);
}
</script>

```

**函数节流：让某段代码（函数）每间隔一段时间再去执行**
```javascript
	
let time = 100;//时间条件
let oldtime = new Date;  //旧的时间
window.onscroll = function(){
   let newTime = new Date; //每次滚轮都会有个新的时间
   
   if(newTime - oldtime >= time){
       console.log('执行');
   }
   //滚完之后把新的时间赋值老的时间，
   //为了让下一次滚轮时, 老的时间为此次的新时间
   oldtime = newTime; 
}
```

**防抖：当用户频繁触发某个事件的时候就不执行函数，当用户停下来的时候再执行函数**

```javascript
let timer = null;  
window.onscroll = function(){
   // console.log(1);

   clearInterval(timer);
   timer = setTimeout(() => {
       console.log(1);
   }, 100);

}

```

**修改class:**
>元素身上有个classList对象
- add(类名)  添加类名
- remove(类名) 删除类名
- replace(替换谁，替换成什么)替换
- contains(类名) 布尔值
- toggle(类名) 切换  返回值还是布尔值

