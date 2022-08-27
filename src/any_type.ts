/*
 * any type
 */

// 대부분의 모든 값을 수용할 수 있는 any는 지양하자
function func0(anyParam:any) {
	anyParam.trim() // error가 발생할 수 있는 상황임에도 에러 메세지가 없다. 물론, 콘솔 창에는 error가 뜬다.
}

func1([1,2,3])