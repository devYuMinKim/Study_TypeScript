console.log(typeof 42); // expected output: "number"
console.log(typeof 'blubber'); // expected output: "string"
console.log(typeof true); // expected output: "boolean"
console.log(typeof undeclaredVariable); // expected output: "undefined"

function print(value: number | string): string {
	if (typeof value === 'number') {
		return value // 에러 발생
	}

	if (typeof value === 'string') {
		return value
	}

	// undefined인 경우일 수도 있기 때문에 기입하지 않으면 에러 발생
	return value
}