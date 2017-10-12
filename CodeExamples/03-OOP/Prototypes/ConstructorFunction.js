function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.print = function () {
	console.log("%s %s", this.firstName, this.lastName);
};

var p1 = new Person("Hans", "Wurst");
var p2 = new Person("Max", "Mustermann");

console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(p2));
console.log(Person.prototype);
console.log(Object.getPrototypeOf(p1) === Person.prototype);
console.log(Person.prototype.constructor === Person);

function Animal() {
	//
}

console.log(p1 instanceof Person);
console.log(p1 instanceof Animal);

p1.print();
p2.print();

console.dir(p1);
console.dir(Person.prototype);
