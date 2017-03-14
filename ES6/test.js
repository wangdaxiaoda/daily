// class A{
// 	ha(){
// 		console.log("ha");
// 	}
// }
// class B extends A{
// }
// let he = new B();
// console.log(A[Symbol.hasInstance](he));

// let arr1 = [1,2];
// let arr2 = [3,4];
// let arr3 = [5,6];
// arr2[Symbol.isConcatSpreadable]=true;
// arr3[Symbol.isConcatSpreadable]=false;
// console.log(arr1.concat(arr2,arr3));

// console.log('hello'.indexOf('e'));

// class a{
// 	[Symbol.replace](b){
// 		return b.replace('e','c');
// 	}
// }
// console.log('hello'.replace(new a()))

// class c{
// 	*[Symbol.iterator](){
// 		let i = 0;
// 		while(this[i]!==undefined){
// 			yield this[i]
// 			++i;
// 		}
// 	}
// }
// let mc = new c();
// mc[0]=1;
// mc[1]=2;
// for(let val of mc){
// 	console.log(val);
// }

// let obj = {
// 	[Symbol.toPrimitive](a){
// 		switch(a){
// 			case 'number':return 123;
// 			case 'string':return 'str';
// 			case 'undefined':return 'undefined';
// 			case 'default':return 'default';
// 		}
// 	}
// }
// let obj1={};
// console.log(obj);
// console.log(2*obj);
// console.log(123+obj);
// console.log(""+obj);
// console.log(obj1 === 'default');
// console.log(String(obj));
// 

// class a {
//     constructor(val) {
//         if (new.target !== undefined) {
//             this.val = val;
//         } else {
//             console.log('请使用new方法创建实例')
//             throw new Error('请使用new方法创建实例')
//         }
//     }
// }

// function a() {
//     if (new.target !== undefined) {
//     	console.log('true')
//     } else {
//     	console.log('false')
//         // throw new Error('请使用new方法创建实例')
//     }
// }
// let a1 = new a();
// let a2 = a.call();

// let a = new Set();
// let b = new Set();
// [1,2,3,4,3,2,1].map(x=>a.add(x));
// a.forEach(x=>console.log(x));//1,2,3,4

// a.add({});a.add({});
// console.log(a.size);//2

// b.add(2);b.add(2);
// console.log(b.size);//1

// let obj1={"1":1,"2":2,"3":4,"5":5,"6":6}
// let m = new Map();
// for(let i of Object.keys(obj1)){
// 	m.set(i,obj1[i]);
// }
// console.log(m);

// function* a() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
// let he = a();
// console.log(he.next().value);
// console.log(he.next());

// console.log('hello' + (yield 123));
// 
// function* foo(){
// 	for(let i=0;true;i++){
// 		let reset = yield i;
// 		if(reset){i=-1}
// 	}
// }
// var g = foo();
// console.log(g.next());console.log(g.next());console.log(g.next());
// console.log(g.next(true));

function* a(x){
	var y = 2*(yield(x+1));
	var z = yield(y/3);
	return (x+y+z);
}
let c = a(5)
console.log(c.next());//6
console.log(c.next(6));//4
console.log(c.next(2));//19
console.log(c.next());

// let a = 0;
// function he(b){
// 	return a+b;
// }
// console.log(he(2));

// function Foo(val){
// 	this.val = val;
// 	this.lest = function(){
// 		console.log(this.val);
// 	}
// }
// class Foo{
// 	constructor(val){
// 		this.val = val;
// 	}
// 	lest(){
// 		console.log(this.val);
// 	}
// }
// class Foo1 extends Foo {
// 	constructor(val) {
// 		super(val)
// 	}
// }
// let h1 = new Foo1("222");
// h1.lest()
