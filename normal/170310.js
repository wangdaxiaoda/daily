多个对象的循环引用：
let a = {};
let b = {};
a.r = b;
b.r = a;

标记清除：
function test() {
    let a = 10; //被标记，进入环境
    let b = 1; //被标记，进入环境
}
test(); //执行完毕后，a、b又被标记离开环境，被回收

关于DOM引起的内存泄漏问题
window.onload = function outerFunction() {
    var obj = document.getElementById("element");
    obj.onclick = function innerFunction() {};
};
原因： 这段代码看起来没什么问题， 但是obj引用了document.getElementById(“element”)， 而document.getElementById(“element”) 的onclick方法会引用外部环境中的变量， 自然也包括obj， 是不是很隐蔽啊。
办法：
window.onload = function outerFunction() {
    var obj = document.getElementById("element");
    obj.onclick = function innerFunction() {};
    obj = null;
};
当原有的DOM被移除是， 子节点引用没有被语出则无法回收
var select = document.querySelector;
var treeRef = select('#tree');
var leafRef = select('#leaf');
select('body').removeChild(treeRef); //#tree不能被回收，因为leafRef还在
办法：
trefRef = null;
leafRef = null;

timer定时器泄漏
var a = 0;
for (let i = 0; i < 9000; i++) {
    let bugObj = {
        callAgain: function() {
            let ref = this;
            a = setTimeOut(function() {
                ref.callAgain();
            }, 9000);
        }
    }
}
bugObj.callAgain();

这个时候应该先停止定时器， 然后在回收bugObj
clearTimeout(a);
bugObj = null;
