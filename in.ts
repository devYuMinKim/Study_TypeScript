interface Dog {
	name: string,
	bark(): '멍멍'
}

interface Cat {
	name: string,
	meow(): '냐옹'
}

function sayAnimal(animal: Dog | Cat) {
	if ('bark' in animal) {
		animal.bark()
		animal.name
		animal.meow() // 에러 발생
	}
	
	if ('meow' in animal) {
		animal.meow()
	}
	
	animal.name // 에러 발생
}