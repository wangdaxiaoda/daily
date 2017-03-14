// function *a(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	yield 4;
// }
// var b = a();
// for(let i of b){
// 	console.log(i)
// }
// 
// promise
// 
// function timeout(ms){
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve,ms,'done')
// 	});
// }

// timeout(100).then((val)=>{console.log(val)}) //done
// var a = new Promise((resolve, reject) => {
//     reject(1);
// });
// a.then(function(val) {
//     console.log(val)
// })

function a(bool){
	return new Promise((resolve, reject) => {
		if(bool){
			resolve(12);
			console.log("laia");
			setTimeout(console.log('ok'),20000)
		}else{
			reject(1)
		}
	});
}

a(true).then(function(val){
	console.log('res'+val);
	return a(val)
}).then(function(val){
	console.log('res'+val);
	return a(val)
}).catch(function(val){
	console.log('rej'+val);
	a(val)
})