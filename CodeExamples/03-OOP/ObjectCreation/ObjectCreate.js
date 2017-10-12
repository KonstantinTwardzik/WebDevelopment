var p1 = Object.create({});
p1.firstName = "Max";
p1.lastName = "Mustermann";

console.dir(p1);

var p2 = Object.create({}, {
	firstName: {
		value: "Hans",
		writable: false,
		configurable: false,
		enumerable: true
	},
	lastName: {
		value: "Wurst",
		writable: false,
		configurable: false,
		enumerable: true
	}
});

console.dir(p2);

var Person = {
	firstName: null,
	lastName: null,
	print: function () {
		console.log("%s %s", this.firstName, this.lastName);
	},
	init: function (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		return this;
	}
};

var p3 = Object.create(Person);
p3.print();

var p4 = Object.create(Person);
p4.firstName = "Max";
p4.lastName = "Mustermann";
p4.print();

var p5 = Object.create(Person, { firstName: { value: "John" }, lastName: { value: "Smith" } });
p5.print();

var p6 = Object.create(Person);
p6.firstName = "Christian";
p6.lastName = "Bettinger";
p6.age = 40;	// dynamically added property
console.dir(p6);

var p7 = Object.create(Person).init("Jane", "Doe");
p7.print();
