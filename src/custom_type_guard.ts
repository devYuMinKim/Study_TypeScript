// 다음과 같은 양식으로 작성한다.
function isDate(date: Date | string): 매개변수 is 타입 {
	return date instanceof Date
}


function isDate(date: Date | string): date is Date {
	return date instanceof Date
}

function getDate(date: Date | string): Date {
	if (isDate(date)) {
		return date
	}

	return new Date(date)
}

// ---

interface Dog {
	name: string,
	bark(): '멍멍'
}

interface Cat {
	name: string,
	meow(): '냐옹'
}

function isDog(animal: Dog | Cat): animal is Dog {
	return 'bark' in animal
}

function isCat(animal: Dog | Cat): animal is Cat {
	return 'meow' in animal
}

function sayAnimal(animal: Dog | Cat) {
	if (isDog(animal)) {
		animal.bark()
		animal.name
	}

	if (isCat(animal)) {
		animal.meow()
	}
}