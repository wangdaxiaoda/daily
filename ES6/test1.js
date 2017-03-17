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

// function a(bool){
// 	return new Promise((resolve, reject) => {
// 		if(bool){
// 			resolve(12);
// 			console.log("laia");
// 			setTimeout(console.log('ok'),20000)
// 		}else{
// 			reject(1)
// 		}
// 	});
// }

// a(true).then(function(val){
// 	console.log('res'+val);
// 	return a(val)
// }).then(function(val){
// 	console.log('res'+val);
// 	return a(val)
// }).catch(function(val){
// 	console.log('rej'+val);
// 	a(val)
// })
// 
// let p = Promise.resolve('hello');
// p.then(val=>console.log(val));//'hello'
// 
// function a(y){
// 	// this.x = x
// 	return(this.x+y)
// }
// var obj = {x:1,y:2}
// var b = a.bind(obj);
// console.log(b(1));
var param = 10

function step1(x) {
    return x + 1;
}

function step2(x) {
    return x + 2;
}

function step3(x) {
    return x + 3;
}

function step4(x) {
    return x + 4;
}



//关于这一块存在很大的疑问，promise，generator，async




var arr1 = [step1, step2, step3, step4];

function pro(param, arr1) {
    var ret = null;
    var p = Promise.resolve();
    for (var i of arr1) {
        p = p.then(function(val) {
            ret = val;
            return i(param)
        })
    }
    p.then(function() {
        return ret;
    })
}
console.log(pro(param,arr1))
function gene(param, arr1) {
    return function*() {
        var ret = null;
        try {
            for (var i of arr1) {
                ret = yield i(param)
            }
        } catch (e) {
            console.log(e)
        }
        return ret
    }
}
console.log(gene(param,arr1)().next());
console.log(gene(param,arr1)().next());
// async function as(param, arr1) {
//     var ret = null;
//     try {
//         for (var i of arr1) {
//             ret = await i(param)
//         }
//     } catch (e) {

//     }
//     return ret
// }
