// Symbol
/*创建独一无二的值；不使用new，因为生成的原始类型的值，不是一个对象
Symbol值不能与其他类型的值进行运算
Symbol值可以显示的转换为其他类型的值    let sym = Symbol("hello");  String(sym)或者sym.toString()   Boolean(sym) 但是不能转换成数值
*/

// 使用方法
const mySym = Symbol();

/*1.*/let obj[mySym] = "heh";

/*2.*/var a = {
	[mySym]:'heh'
}

/*3.*/ let obj1 = {};
Object.defineProperty(obj1,mySym,{value:"wdxd"})

/*调用：*/   	// a[mySym],不能使用a.mySym,因为.运算后面总是字符串，如果使用.指代的就不是mySym代表的Symbol值，而是mySym字符串

// Symbol作为属性名，不能通过一般的for、Object.keys()、Object.getOwnPropertyNames()获取
// 新方法 Object.getOwnPropertySymbols()获取，返回一个数组
// 新API：Reflect.ownKeys方法返回可以返回所有类型的键名

// Symbol的11个内置方法
是否是构造函数的实例化 
		Foo[Symbol.hasInstance](foo) //boolean
		class Myclass{
			[Symbol.hasInstance](a){
				return a instanceOf Array
			}
		}

concat时，数组是否可扩展 
		arr[Symbol.isConcatPreadable]=false //[,[]]
		class a extends Array{ //说明此类实例化的数组对象是可以扩展的
			[Symbol.isConcatPreadable](){
				return true
			}
		}

对于支持正则表达式的string对象的方法  
当有string对象使用到以下方法时，自动替换
class a{
	[Symbol.match](a){
		return 'hello'.indexOf(a);
	}
}
'l'.match(new a());//2

还有search，replace，split，都是类似的

默认遍历器
class c{
	*[Symbol.iterator](){
		let i = 0;
		while(this[i]!==undefined){
			yield this[i]
			++i;
		}
	}
}
let mc = new c();
mc[0]=1;
mc[1]=2;
for(let val of mc){
	console.log(val);
}//1,2

转换类型时，调用方法
let obj = {
	[Symbol.toPrimitive](a){
		switch(a){
			case 'number':return 123;
			case 'string':return 'str';
			case 'undefined':return null;
		}
	}
}
123+obj;//246
""+obj;//'str'
obj === undefined;//
String(obj);//'str'