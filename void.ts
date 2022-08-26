/*
 * void
 */

// 다음 두 코드 모두 undefined를 반환하지만 두 코드는 엄연히 다르다!
function test(): undefined { return }
function test2(): void {}

function voidFunc() {} // 타입 추론으로 TypeScript에서 알아서 void로 추론해준다!