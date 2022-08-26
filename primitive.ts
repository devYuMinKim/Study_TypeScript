/*
 * Primitive (원시값)
 */
const str: string = 'String'
const num: number = 123
const bool: boolean = true
const big: bigint = 100n

// 이와 같은 형태도 가능하다
// 문자열의 경우, 소문자로 넣어야 인정됨
// 숫자의 경우 또한 동일한 값을 넣어줘야 됨
// boolean 값 또한 동일한 값을 넣어줘야 됨
const str1: 'string' = 'string'
const num1: 123 = 123
const bool1: true = true

// 타입 추론
const str2 = 'string'
const num2 = 123
const bool2 = true