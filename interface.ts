/*
 * 인터페이스
 *
 * interface
 * - 정의
 * - 설계
 *
 * implements
 * - 구현
 */

interface Person {
  name: string
  age: number
 }
 
 // 이러한 방식으로 사용 가능
 const jang: Person {
   name: 'Jang',
   age: 99
 }

 // 클래스와 인터페이스
 // 인터페이스의 정의
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Todo implements ITodo {
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ) { }
}

// 인터페이스 상속
interface Person {
  name: string;
  age?: number;
}

interface Developer {
  skills: string[];
}

interface WebDeveloper extends Person, Developer {}

const webDeveloper: WebDeveloper =  {
  name: 'Lee',
  age: 20,
  skills: ['HTML', 'CSS', 'JavaScript']
}