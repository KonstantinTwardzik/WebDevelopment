function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	Person.COUNT++;										// instance counter
}

Person.prototype.print = function () {
	console.log("%s %s", this.firstName, this.lastName);
};

Person.COUNT = 0;										// static properties as properties of constructor function

Person.printCount = function () {						// static method as property of constructor function
	console.log("Number of Persons: %d", Person.COUNT);
};

function Employee(firstName, lastName, salary) {
	Person.call(this, firstName, lastName);

	this.salary = salary || Employee.DEFAULT_SALARY;	// default value
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.print = function () {
	Person.prototype.print.call(this);
	console.log("Salary: %s", this.salary);
};

Employee.DEFAULT_SALARY = 48000;						// static property

var e1 = new Employee("Jane", "Doe");
e1.print();

new Person();
new Person();
new Person();
new Person();

Person.printCount();
