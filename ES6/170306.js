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

