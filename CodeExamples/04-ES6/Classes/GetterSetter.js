class Person {
	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		return this._firstName;
	}

	set firstName(value) {
		if (value.length !== 0) {
			this._firstName = value;
		}
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(value) {
		if (value.length !== 0) {
			this._lastName = value;
		}
	}

	print() {
		console.log("%s %s", this._firstName, this._lastName);
	}
}

let p = new Person("Hans", "Wurst");
p.firstName = "John";
p.print();					// John Wurst

console.log(p.lastName);	// Wurst
