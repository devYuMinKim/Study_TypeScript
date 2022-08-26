/*
 * Function Type
 */

function func(num: number, str: string) {
	return num + str
}

// func('str', 123) // error 발생
func(123, 'str') // 정상

function func1(num1: number, str: string): number {
	return num1 + Number(str)
}

func1(123, '123')

// 함수 표현식
const func2 = (str1: string, str2: string): string => {
	return str1 + ' ' + str2
}

// 객체 타입
const func3 = (obj: { str1: string, str2: string }) => {
	return obj.str1 + ' ' + obj.str2
}