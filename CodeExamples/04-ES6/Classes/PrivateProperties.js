class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFirstName() {
		return this.firstName;
	}

	setFirstName(value) {
		if (value.length !== 0) {
			this.firstName = value;
		}
	}

	getLastName() {
		return this.lastName;
	}

	setLastName(value) {
		if (value.length !== 0) {
			this.lastName = value;
		}
	}

	print() {
		this._log();
	}

	_log() {
		console.log("%s %s", this.firstName, this.lastName);
	}
}

let p = new Person("Hans", "Wurst");
p.setFirstName("John");
p.print();		// John Wurst

console.log(p instanceof Person);	// true
