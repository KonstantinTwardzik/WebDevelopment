var de = de || {};
de.hochschuletrier = de.hochschuletrier || {};
de.hochschuletrier.informatik = de.hochschuletrier.informatik || {};
de.hochschuletrier.informatik.we = de.hochschuletrier.informatik.we || (function () {
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

	return {
		Person: Person,
		Employee: Employee
	};
})();

var p = new de.hochschuletrier.informatik.we.Person("Hans", "Wurst");
p.print();
var e = new de.hochschuletrier.informatik.we.Employee("Jane", "Doe", 55000);
e.print();
