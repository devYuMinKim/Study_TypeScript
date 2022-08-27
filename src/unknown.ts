/*
 * unknown
 */

// any의 경우, 아무런 error 메시지가 뜨지 않는다.
function func1(x: any) {
	let val1: any = x;
	let val2: unknown = x;
	let val3: string = x;
	let val4: boolean = x;
	let val5: number = x;
	let val6: string[] = x;
	let val7: {} = x;
}

// val1, val2를 제외한 나머지에서 error 발생
function func2(x: unknown) {
	let val1: any = x;      // 정상
	let val2: unknown = x;  // 정상
  // error
  /*
	let val3: string = x;   // error
	let val4: boolean = x;  // error
	let val5: number = x;   // error
	let val6: string[] = x; // error
	let val7: {} = x;       // error
  */
}

let num1: any = 99;
num1.trim(); // 동작할 수 없음에도 error message가 나오지 않는다. 물론, 동작하지 않으며 콘솔창에는 error message가 나온다.

let num2: unknown = 99;
if(typeof num2 === 'string') { // 타입 가드, num이 string 타입일 경우 동작한다. 즉, 다음 코드는 동작하지 않는다.
	num2.trim();
}