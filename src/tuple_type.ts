/*
 * Tuple Type
 */

// 기존의 배열 타입
const arr_2: string[] = ['A', 'B', 'C']

const tuple: [number, string] = [1, 'A'] // 길이와 타입이 고정
const tuple2: [number, ...string[]] = [0, 'A', 'B'] // 튜플의 길이를 가변적으로 바꿀 수 있다.