// 传统的构造函数
function H1(x,y){
	this.x = x;
	this.y = y;
}
H1.prototype.getN=function(){
	return ....
}

// class
class H1{
	constructor(x,y){
		this.x = x;
		this.y=y;
	}
	getN(){
		return ...
	}
}

//class的调用方法跟构造函数一样
let hh = new H1();

// 可以通过Object.assign添加类的新方法
class H2{
	constructor(){}
}
Object.assign(H2.prototype,{
	getA(){},
	getB(){}
})

//采用class表达式，写出立即执行的class
let point = new class{
	constructor(name){
		this.name = name;
	}
	print(){
		console.log(this.name);
	}
}("zhushini");
point.print();

// class不存在变量提升，不同于ES5

// Class的继承；通过extends关键字实现
class ColorPoint extends Point{
	constructor{
		super(x,y); //调用父类的构造函数（constructor）;子类自己并没有this，而是继承了父类的this对象
		this.color = color;
	}
}

class A{}
class B extends A{}
B._proto_===A; //true
B.prototype._proto_===A.prototype;//true

//Object.getPrototypeOf可从子类上获取父类
Object.getPrototypeOf(ColorPoint) === Point; //true

//class的静态属性，指的是Class本身的属性，即Class.propname 可读写

new.target属性来判断实例化是否是通过new实现的
function a(){
	if(new.target !== a){
		throw new Error("必须通过new实例化")
	}
}
let a1 = new a() //true
let a2 = a.call()//false
