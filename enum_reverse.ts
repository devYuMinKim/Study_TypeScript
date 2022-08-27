/**
 * 리버스 매핑 (역방향 찾기)
 */

enum Order {
  First = 1,
  Second = 2,
  Third = 3,
}

enum OrderStr {
  First = 'First',
  Second = 'Second',
  Third = 'Third'
}

console.log(Order)
console.log(OrderStr)

const firstVal = Order.First
const keyOfFirstVal = Order[firstVal]

console.log(firstVal)
console.log(keyOfFirstVal)