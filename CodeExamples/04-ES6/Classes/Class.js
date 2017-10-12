class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	print() {
		console.log("%s %s", this.firstName, this.lastName);
	}
}

let p1 = new Person("Hans", "Wurst");
p1.print();

let p2 = new Person("Max", "Mustermann");
p2.print();

new Person("Eva", "Meier").print();
