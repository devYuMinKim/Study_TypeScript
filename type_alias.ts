// 인터페이스
interface Person {
	name: string,
	age: number
}

const ps = {} as Person;
ps.name = 'Kim';
ps.age = 23;
ps.address = 'Daegu'; // Error 발생


// 타입 앨리어스
type Person {
	name: string,
	age: number
}

const ps = {} as Person;
ps.name = 'Kim';
ps.age = 23;
ps.address = 'Daegu'; // Error 발생


// 문자열 리터럴로 타입 지정하기
type Str = 'Kim';

// 유니온 타입으로 타입 지정하기
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정하기
type Name = 'Kim' | 'Park';

// 숫자 리터럴 유니온 타입으로 타입 지정하기
type Num = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온 타입으로 타입 지정하기
type Obj = {a: 1} | {b: 2};

// 함수 유니온 타입으로 타입 지정하기
type Func = (() => string) | (() => void);

// 인터페이스 유니온 타입으로 타입 지정하기
type Shape = Square | Rectangle | Circle;

// 튜플로 타입 지정하기
type Tuple = [string, boolean];
const tp: Tuple = ['', '']; // Error 발생