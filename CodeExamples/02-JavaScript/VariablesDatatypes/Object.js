console.log("\n# property access");

var phonebookEntry = {
	firstName: "Hans",
	lastName: "Wurst",
	number: "0123-456789"
};

console.log(phonebookEntry.number);
console.log(phonebookEntry["number"]);

phonebookEntry.firstName = "John";
phonebookEntry["lastName"] = "Doe";

console.log("\n# console.dir()");

console.dir(phonebookEntry);

console.log("\n# methods");

var phonebookEntry2 = {
	firstName: "Hans",
	lastName: "Wurst",
	number: "0123-456789",
	print: function () {
		console.log("%s, %s: %s", this.firstName, this.lastName, this.number);
	}
};

phonebookEntry2.print();	// Hans, Wurst: 0123-456789

console.log("\n# enums");

var Color = {
	RED: 0,
	GREEN: 1,
	BLUE: 2
};

console.log(Color.RED);
var color = Color.BLUE;
console.log(color === Color.GREEN);

var Color2 = {
	RED: "RED",
	GREEN: "GREEN",
	BLUE: "BLUE"
};

console.log(Color2.RED);

var Color3 = {
	RED: 0xFF0000,
	GREEN: 0x00FF00,
	BLUE: 0x0000FF
};

console.log(Color3.RED);
