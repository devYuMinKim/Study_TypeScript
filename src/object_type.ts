/*
 * Object Type
 */

// error case
/*
const obj: object = {
	str: 'str',
	num: 123,
	child: {
		str: 'str',
		num: 123,
	}
}

obj.str.trim() // error 발생
*/

const obj2: {
	str: string, 
	num: number, 
	child: {
		str: string,
		num: number,
	}
	} = {
	str: 'str',
	num: 123,
	child: {
		str: 'str',
		num: 123
	}
}

obj2.str // 정상