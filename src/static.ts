class Foo {
  constructor(prop) {
    this.prop = prop;
  }

  static method() {
    // 정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리키므로 사용할 수 없다..
    return 'method';
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스명으로 호출한다.
console.log(Foo.method());

const foo = new Foo(123);
// 정적 메소드는 인스턴스로 호출할 수 없다.
console.log(foo.staticMethod()); // 에러 발생

class Foo {
  // 생성된 인스턴스의 카운트
  static instanceCounte = 0;
  constructor() {
    // 생성자가 호출될 때마다 카운트를 1씩 증가
    Foo.instanceCount++;
  }
}

var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);  // 2
console.log(foo2.instanceCounter); // 에러 발생