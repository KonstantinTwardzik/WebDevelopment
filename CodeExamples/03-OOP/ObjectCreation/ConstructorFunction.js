function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.print = function () {
		console.log("%s %s", this.firstName, this.lastName);
	};
}

var p1 = new Person("Hans", "Wurst");
p1.print();

var p2 = new Person("Max", "Mustermann");
p2.print();

new Person("Eva", "Meier").print();
