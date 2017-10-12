var Person = {
	firstName: null,
	lastName: null,
	print: function () {
		console.log("%s %s", this.firstName, this.lastName);
	}
};

var p1 = Object.create(Person);
p1.firstName = "John";
p1.lastName = "Smith";
p1.print();

var Employee = Object.create(Person);	// inherited object
Employee.salary = 48000;				// new property with default value
Employee.print = function () {			// override method
	Person.print.call(this);			// calling overridden method
	console.log("Salary: %s", this.salary);
};

var e1 = Object.create(Employee);
e1.firstName = "Jane";
e1.lastName = "Doe";
e1.salary = 55000;
e1.print();
