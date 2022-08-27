/*
 * undefined & null
 */

const nu: null = null;
const un: undefined = undefined;

console.log(nu == un); // 느슨한 검사, true
console.log(nu === un); // false

// return Type을 지정하지 않아도 string or (null or undefined) 값이 리턴되는 것을 알아서 추정해준다.
function sayHello(word: string) {
	if (word === 'world') {
		return 'hello' + word
	}

	return null // string or null
	return; // string or undefined
}

function log(message: string | number) {
	console.log(message)

	return undefined
}