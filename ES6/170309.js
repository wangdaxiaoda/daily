遍历 iterator
next方法： done = true表示遍历已经结束

function makeIterator(arr) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < arr.length ? { value: arr[nextIndex++] } : { done: true }
        }
    }
}
使用TypeScript写， 遍历接口（ iterable）、 指针对象（ iterator） 和next方法返回值的规格
interface Iterable {
    [Symbol.iterator](): Iterator,
}
interface Iterator {
    next(value ? : any): IterationResult,
}
interface IterationResult {
    value: any,
        done: boolean
}

一般的类数组对象、 数组、 map、 set等对象原生自带iterator接口
调用iterator接口的场合
解构赋值：
let a = new Set().add('a').add('b').add('c');
let [x, y] = a; //x='a',y='b'
let [first, ...rest] = a; //first='a',rest=['b','c']
扩展运算符：
let str = 'hello';
[...str] //['h','e','l','l','o'];

Generator函数(类似于普通函数)
特点： 1. function命令和函数名之间有一个 * ；2. 函数体内部使用yield语句定义不同的内部状态

function* helloG() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
let hw = helloG();
调用函数时， 函数并不执行， 而是一个指向内部状态的指针对象， 也就是遍历器对象（ iterator object）

yield语句如果在一个表达式中， 必须放在括号内； 作为参数时或者出现在赋值表达式的右边， 则可以不添加括号
console.log('hello' + (yield 123));

function(yield 'a') {}
let a = yield;

yield语句本身没有返回值， 或者说总是返回undefined， next方法带一个参数， 该参数会被当做上一条yield语句的返回值

自带的return方法, 使用return会结束遍历， 如果有try...finally代码块存在， return会推迟到finally代码块执行完

function* gen() {
    yield 1;
    yield 2;
}
let a = gen();
a.next(); //{value:1,done:false}
a.return(213); //{value:213,done:true}

function* nums() {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
var g = nums();
g.next();//1
g.next();//2
g.return(7);//4
g.next();//5
g.next();//7

作为对象属性的Generator函数
let obj = {
    *myGeMe(){}
}
===
let obj = {
    myGeMe : function* (){

    }
}

Generator函数的this
ES6规定Generator函数返回的遍历器是他的实例，并且继承prototype
function* hi(){}
hi.prototype.hello = function(){
    return 123
}
let a = hi();
hi.hello() //123

不像构造函数，实例不会含this的值
function* a(){this.b=123}
let c = a()
c.b//undefined

可以用bind，把别的对象绑定到generator函数上
function* a(){
    yield this.x = 1;
    yield this.y = 2;
}
let b = {};
let f = a.bind(b)();
f.next();//{value:1,done:false}
f.next();//{value:2,done:false}
f.next();//{value:undefined,done:true}
obj//{x:2,y:3}

控制流管理：
多步操作 
function* longTask(){
    try{
        var val1 = yield step1();
        var val2 = yield step1(val1);
        var val3 = yield step1(val2);
        var val4 = yield step1(val3);
    } catch(e){

    }
}
多个任务需要并行执行时，可以采用数组形式
function* aa(){
    let [val1,val2] = yield[task1(),task2()];
}
