var p1 = {
	firstName: "Max",
	lastName: "Mustermann",
	print: function () {			// method
		console.log("%s %s", this.firstName, this.lastName);
	}
};

p1.print();

var p2 = {
	firstName: "Hans",
	lastName: "Wurst",
	car: {							// nested object
		manufacturer: "ACME",
		model: "Pinky"
	},
	print: function () {
		console.log("%s %s (Car: %s %s)", this.firstName, this.lastName, this.car.manufacturer, this.car.model);
	}
};

p2.print();
