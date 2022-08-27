/*
 * Array Type
 */

// String Array
const strArr:string[] = ['str', 'str2', 'str3']
const strArr2: Array<string> = ['str', 'str2', 'str3']

// number Array
const numArr: Array<number> = [1, 2, 3]

// boolean Array
const boolArr: boolean[] = [false, true, false, true]

// 동작 X
/*
strArr.push(1)
numArr.push('str')
*/

// 정상 동작
boolArr.push(false)

// Tuple로
const arr_1 = ['str', 123, false]