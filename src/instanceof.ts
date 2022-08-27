function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // expected output: true
console.log(auto instanceof Object); // expected output: true

// 생성자 정의
function C(){}
function D(){}

var o = new C();

o instanceof C; // true, 왜냐하면 Object.getPrototypeOf(o) === C.prototype
o instanceof D; // false, 왜냐하면 D.prototype이 o 객체의 프로토타입 체인에 없음

o instanceof Object; // true, 왜냐하면
C.prototype instanceof Object; // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false, 왜냐하면 C.prototype이 더 이상 o의 프로토타입 체인에 없음

D.prototype = new C(); // C를 D의 [[Prototype]] 링크로 추가
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true, 왜냐하면 이제 C.prototype이 o3의 프로토타입 체인에 존재