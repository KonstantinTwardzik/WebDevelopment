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
		this.firstName = value;
	}
};

Person.prototype.getLastName = function () {
	return this.lastName;
};

Person.prototype.setLastName = function (value) {
	if (value.length !== 0) {
		this.lastName = value;
	}
};

function Employee(firstName, lastName, salary) {
	Person.call(this, firstName, lastName);

	this.salary = salary || Employee.DEFAULT_SALARY;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.DEFAULT_SALARY = 48000;

Employee.prototype.print = function () {
	Person.prototype.print.call(this);
	console.log("Salary: %s", this.salary);
};

var p1 = new Person("John", "Smith");
p1.print();

var e1 = new Employee("Jane", "Doe", 55000);
e1.print();

console.log(e1.getLastName());

