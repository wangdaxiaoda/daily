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
