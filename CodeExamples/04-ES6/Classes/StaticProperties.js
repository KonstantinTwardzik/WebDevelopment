class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;

		Person.COUNT++;
	}

	print() {
		console.log("%s %s", this.firstName, this.lastName);
	}

	static printCount() {
		console.log("Number of Persons: %d", Person.COUNT);
	}
}

Person.COUNT = 0;

let p1 = new Person("John", "Smith");
p1.print();

class Employee extends Person {
	constructor(firstName, lastName, salary) {
		super(firstName, lastName);
		this.salary = salary;
	}

	print() {
		super.print();
		console.log("Salary: %s", this.salary);
	}
}

let e1 = new Employee("Jane", "Doe", 55000);
e1.print();

Person.printCount();
