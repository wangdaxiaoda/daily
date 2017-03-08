// set,map数据结构
//Set类数组，是一个构造函数,值是唯一的
let a = new Set();
[1,2,3,4,3,2,1].map(x=>a.add(x));
a.forEach(x=>console.log(x));//1,2,3,4

let a = new Set([1,2,3,4,4]);
a.size //4

// 向set传入值的时候，不会做类型转换，5和‘5’是不用的，所以不能用精确相等运算符(===)
let a = new Set();

a.add({});a.add({});
console.log(a.size);//2

b.add(2);b.add(2);
console.log(b.size);//1

// 用set去重数组中的值
function dore(arr){
	return Array.from(new Set(arr));
}
dore([1,2,2,3])//[1,2,3]

// map结构提供了“值-值”的对应关系，比object的‘字符串-值’好很多(什么值都可以作为键)
// map的键是跟内存地址保存的，简单类型的键（数字，字符串，布尔值），严格相等的话，都视为同一个键
let map = new Map()
map.set(-0,2)
map.get(+0)//2

object转map
let obj1={"1":1,"2":2,"3":4,"5":5,"6":6}
let m = new Map();
for(let i of Object.keys(obj1)){
	m.set(i,obj1[i]);
}



