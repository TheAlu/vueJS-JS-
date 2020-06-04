let name = '小明'
let age = 18
let flag = true

function sum(num1,num2) {
	return num1 + num2
}

if(flag) {
	console.log(sum(20,30));
}

//导出
export {
	flag,
	sum
}


//导出方式2
export var num1 = 1000;


//导出函数/类
export function mul(num1,num2) {
	return num1 * num2
}

export class Person {
	run() {
		console.log('running');
	}
}


//export default
// const address = 'export default'
// export {
// 	address
// }

// const address = 'export default'
// export default address

//export default在同一js里只能有一个
export default function(argument) {
	console.log(argument);
}







