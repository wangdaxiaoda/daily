//!!特别申明，下面所有的例子中，下面的都比上面一个好

// 1.对引用使用const，不要使用var
var a = 1; // bad
const a = 1; //good

//2.如果是一些会变动的引用 ,使用let代替var
var count = 1;
if (true) {
    count++;
}

let count = 1;
if (true) {
    count++;
}

// 3.使用字面值创建对象
const item = new Object(); //bad
const item = {}; //good

// 4.使用对象方法,对象属性的简写
const atom = {
    add: function(val) {
        return val;
    }
}

const atom = {
    add(val) {
        return val;
    }
}

const a = "a";

const obj = {
    a: a
}

const obj = {
    a
}

//5. 不要直接调用原型的方法
console.log(Object.hasOwnProperty(key));

console.log(Object.prototype.hasOwnProperty.call(Object, key));

// 6.使用字面值创建数组;使用(...)赋值数组
const arr = new Array();
const arr = [];

for (let i = 0; i < len; i++) {
    arrC[i] = arr[i];
}

const arrC = [...arr];

//7.用函数声明替代函数表达式
const foo = function() {}

function foo() {}

// 函数表达式：
(() => { console.log("123") })()

//8.不要在非函数代码块中声明函数(if，while等)
if (true) {
    function test() {
        ...
    }
}

let test;
if (true) {
    test = () => {}
}

//9.不要使用arguments，用rest语法...替代
function contantAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}

function contantAll(...args) {
    return args.join('');
}

//10.总是使用class，避免直接操作prototype
function queue(contents = []) {
    this._queue = [...contents];
}
queue.prototype.pop = function() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
}

class Queue {
    constructor(contents = []) {
        this._queue = [...contents];
    }
    pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
    }
}

// 11.不要使用遍历，使用高阶函数map()和reduce()
const arr = [1,2,3,4,5];

let sum =0;
for(let i of arr){
	sum+=i;
}

arr.forEach((num)=>sum+=num);//good

const sum = arr.reduce((a,b)=>a+b,0);

// 12. 给注释增加FIXME--need to figure this out或TODO--need to implement