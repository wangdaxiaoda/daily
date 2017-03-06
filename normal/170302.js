// 闭包

// function add(x){
// 	var y = 2;
// 	function doAdd(x,y){
// 		return x+y;
// 	}
// 	return doAdd(x,++y);
// }
// console.log(add(4));


//数组遍历
var arr = [11,22,33,44,55,66];
// arr.forEach(function(a,b){
// 	console.log(a+"!!"+b);
// })
arr.map(function(x,y){
	console.log(x+"!!!"+y);
})
// var obj = {
// 	"1":111,
// 	"2":222,
// 	"3":333,
// 	"4":444
// }
// obj.maps(function(key,value){
// 	console.log(key+"!!"+value);
// })
