/**
 * 숫자 열거형 (Enum)
 */

enum Prize {
  Gold = 100,
  Silver, // 101 자동할당
  Bronze  // 102 자동할당 => 숫자 열거형
}

interface Inter {
  name: 'name'
}

// console.log(Inter.name) // 출력 불가능. 인터페이스의 경우 자바스크립트에서 값으로 취급되지 않기 때문.

// 열거형의 경우 다양한 방식으로 활용 가능
console.log(Prize);
console.log(Prize.Gold)
console.log(Prize['Gold'])

// 1씩 규칙적으로 증가하는 요소라면 굳이 일일이 지정하지 않아도 된다.
enum Order {
  First = 1,
  Second,
  Third
}