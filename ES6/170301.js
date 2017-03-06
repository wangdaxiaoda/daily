// var a =[1,2,3];
// console.log((function(...a){}).length);
// console.log((function(a){}).length);

// var items = [1,2,3];
// var arr = [];
// function topush(arr,...items){
// 	arr.push(...items);
// }
// console.log(arr[0]);
// 
var arr1 = [1,2,3];
var arr2 = [11,21,31];
arr1.push(...arr2);
console.log(arr1);

let map = new Map([
	[1,'one'],
	[2,'two'],
	[3,'three']
	]);
let arr = [...map.keys()];
console.log(arr);