function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.print = function () {
	console.log("%s %s", this.firstName, this.lastName);
};

Person.prototype.getFirstName = function () {
	return this.firstName;
};

Person.prototype.setFirstName = function (value) {
	if (value.length !== 0) {
		this._firstName = value;
	}
};

Person.prototype.getLastName = function () {
	return this.lastName;
};

Person.prototype.setLastName = function (value) {
	if (value.length !== 0) {
		this._lastName = value;
	}
};

var p2 = new Person("Hans", "Wurst");
p2.setFirstName("John");
p2.lastName = "Doe";
p2.print();
