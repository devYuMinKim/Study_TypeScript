/**
 * 문자 열거형 (Enum)
 */

// 값 지정하지 않으면 error 발생
enum Prize {
  Gold = 'Gold',
  Silver = 'Silver',
  Bronze = 'Bronze'
}

// 값으로 사용 가능
console.log(Prize)
console.log(Prize.Gold)
console.log(Prize['Bronze'])