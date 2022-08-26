class Person {
	// 클래스 프로퍼티를 사전 선언하여야 한다.
	name: string;
	age: number;
	readonly location: string = 'Korea'; // readonly를 붙이면 수정 불가하다.

	constructor(name: string) {
		// 클래스 프로퍼티수에 값을 할당
		this.name = name;
	}

	walk() {
		console.log(`${this.name} is walking.`);
	}
}

// 인스턴스 p 생성
const p = new Person('Lee'); // new 연산자로 생성
p.walk(); // Lee is walking 출력