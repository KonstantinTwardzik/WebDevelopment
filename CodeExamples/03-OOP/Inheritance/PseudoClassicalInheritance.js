function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.print = function () {
	console.log("%s %s", this.firstName, this.lastName);
};

var p1 = new Person("John", "Smith");
p1.print();

function Employee(firstName, lastName, salary) {
	Person.call(this, firstName, lastName);				// call superclass constructor

	this.salary = salary || 48000;						// new property with default value
}

Employee.prototype = Object.create(Person.prototype);	// overwrite implicit prototype
Employee.prototype.constructor = Employee;				// link prototype

Employee.prototype.print = function () {				// override method
	Person.prototype.print.call(this);					// calling overriden method
	console.log("Salary: %s", this.salary);
};

var e1 = new Employee("Jane", "Doe", 55000);
e1.print();
