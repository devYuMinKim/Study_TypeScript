/**
 * const 열거
 */

enum Desk {
  Color = 'White',
  Width = 1400,
}

// 다음과 같이 열거형에 손쉽게 접근할 수 있다.
Desk.Color
// 하지만, 존재하지 않는 열거형에 접근하려 하면..
// Desk.Height  // Errors in code: Property 'Height' does not exist on type 'typeof Desk'
// Desk[Height] // Errors in code: Cannot find name 'Height'

// 이는 불안전한 접근을 아직은 허용할 수 있기 때문이다.
// 여기서 const를 통해 열거형 선언을 하면 에러명이 동일해진다.

const enum Desks {
  Color = 'Black',
  Width = 1300,
}

// Desks.Height  // Errors in code: Property 'Height' does not exist on type 'typeof Desks'
// Desks[Height] // Errors in code: Property 'Height' does not exist on type 'typeof Desks'

