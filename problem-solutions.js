// 1. Task: Array Filtering and Mapping
const people = [
	{ name: "Alice", age: 30, gender: "female" },
	{ name: "Bob", age: 25, gender: "male" },
	{ name: "Carol", age: 22, gender: "female" },
	{ name: "David", age: 35, gender: "male" },
];

const getMaleNames = (array) => {
	return array
		.filter((person) => person.gender !== "female")
		.map((person) => person.name);
};

const maleNames = getMaleNames(people);
console.log(maleNames);

// 2. Task: Object Manipulation
const books = [
	{ title: "1984", author: "George Orwell", year: 1949 },
	{ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const getBookTitles = (array) => {
	return array.map((book) => book.title);
};

const titles = getBookTitles(books);
console.log(titles);

// 3. Task: Function Composition
const square = (x) => x * x;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

const composeFunctions = (x) => {
	return addFive(double(square(x)));
};

const result = composeFunctions(2);
console.log(result);

// 4. Task: Sorting Objects
const cars = [
	{ make: "Toyota", model: "Camry", year: 2020 },
	{ make: "Ford", model: "Mustang", year: 2018 },
	{ make: "Honda", model: "Civic", year: 2019 },
];

const sortCarsByYear = (array) => {
	return array.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// 5. Task: Find and Modify
const peopleToModify = [
	{ name: "Alice", age: 30 },
	{ name: "Bob", age: 25 },
	{ name: "Carol", age: 22 },
];

const findAndModify = (array, personName, newAge) => {
	const person = array.find((p) => p.name === personName);
	if (person) {
		person.age = newAge;
	}
	return array;
};

const updatedPeople = findAndModify(peopleToModify, "Bob", 26);
console.log(updatedPeople);
