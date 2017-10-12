let employee = {
	firstName: "Hans",
	lastName: "Wurst",
	salary: 33000,
	car: {
		model: "Ford Taurus",
		buildYear: 1999
	}
};

let {
	firstName,
	lastName,
	car: {
		buildYear
	}
} = employee;

console.log("%s %s: %d", lastName, firstName, buildYear);

let employees = [
	{
		firstName: "Hans",
		lastName: "Wurst",
		salary: 33000,
		car: {
			model: "Ford Taurus",
			buildYear: 1999
		}
	},
	{
		firstName: "Jane",
		lastName: "Doe",
		salary: 55000, 

		car: {
			model: "Chevrolet Suburban",
			buildYear: 2016
		}
	},
	{
		firstName: "Max",
		lastName: "Mustermann",
		salary: 44000,
		car: {
			model: "Ford F-150",
			buildYear: 2009
		}
	}
];

let currentYear = new Date().getFullYear();

for (let { firstName, lastName, car: { buildYear } } of employees) {
	console.log("%s %s: %d", lastName, firstName, currentYear - buildYear);
}
