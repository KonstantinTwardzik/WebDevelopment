class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	print() {
		console.log("%s %s", this.firstName, this.lastName);
	}
}

let p1 = new Person("John", "Smith");
p1.print();

class Employee extends Person {
	constructor(firstName, lastName, salary = 48000) {
		super(firstName, lastName);						// call superclass constructor

		this.salary = salary;							// new property
	}

	print() {											// override method
		super.print();									// calling overriden method
		console.log("Salary: %s", this.salary);
	}
}

let e1 = new Employee("Jane", "Doe", 55000);
e1.print();

class Animal {}

console.log(e1 instanceof Employee);
console.log(e1 instanceof Person);
console.log(e1 instanceof Animal);
