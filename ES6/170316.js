异步操作和async函数
ES6诞生之前，异步编程大概只有4种
回调函数、事件监听、发布/订阅、Promise对象

异步的概念：
一个任务分成两段，先执行第一段，然后转而执行其他任务。等做好准备，再执行第二段（例子：任务-读取文件，先发出请求，然后执行其他任务;等返回文件后，再执行第二段（处理文件））

thunk函数：临时函数（"传名调用"）
var x =1;
function f(m){
	return m*2;
}
f(x+5);
传值调用：会先算出x+5，在传入函数f
传名调用：会先把x+5传入函数（return (x+5)*2），然后再把x传入f
这个f就是临时函数，也叫作thunk函数
例子：
var thu = function(x){
	return x+5
}
function f(thu){
	return thu*2
}

多参数函数改成单参数函数（柯里化）
fs.readFile(fileName,callBack);//多参数版本

var readFileThunk = Thunk(fileName);//单参数版本
readFileThunk(callBack);
function Thunk(fileName){
	return function(callBack){
		return readFile(fileName,callBack);
	}
}

