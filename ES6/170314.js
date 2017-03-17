Promise函数
Promise对象的特点:
promise代表了一个异步操作
1.对象的状态不受外界的影响，有三种状态（pending，resolved，rejected），只有异步操作的结果决定了是哪一种状态，其他的操作无法改变这个状态
2.状态的改变只有两种情况，一种是从pending到resolved，另一种是从pengding到rejected，只要其中一种发生，状态就不会再改变。
  改变完了之后再对promise对象添加回调函数，也会立即得到这个结果，不同于事件，一旦错过就无法监听到结果了

基本用法   Promise是一个构造函数,有一个函数作为参数，函数里面自带两个参数（resolve，reject）
var pro = new Promise((resolve, reject) => {});  
promise实例生成之后，可以使用then方法指定resolve，reject函数
pro.then(function(val){
	//success
},function(val){
	//fail
})

promise.resolve——把现有的对象变成promise对象
Promise.resolve('foo')相当于
new Promise(resolve=>resolve('foo'))

let p = Promise.resolve('hello');
p.then(val=>console.log(val));//'hello'

promise.reject用法和promise.resolve类似
Promise.reject('foo')===new Promise((resolve,reject)=>reject("foo"));

自加两个很有用的附加方法：
done():因为promise的回调链（then，catch）中，要是最后一个方法报错，就捕捉不到了（因为promise的错误不会冒泡到全局）
Promise.prototype.done = function(onFulfilled,onRejected){
	this.then(onFulfilled,onRejected)  //TODO 为什么先加一个then，而不是直接使用catch
	.catch(function(reason){
		setTimeout(()=>{throw reason},0);  //Todo 为什么不直接throw reason
	})
}

finally():不管promise对象最后的状态如何，都会执行finally方法
Promise.prototype.finally = function(callback){
	let p = this.constructor;
	return this.then(
		value=>p.resolve(callback()).then(()=>value),
		reason=>p.resolve(callback()).then(()=>{throw reason})
		)
}
