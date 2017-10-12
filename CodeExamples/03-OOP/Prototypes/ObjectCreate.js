var Person = {
	firstName: null,
	lastName: null,
	print: function () {
		console.log("%s %s", this.firstName, this.lastName);
	}
};

var p = Object.create(Person);

console.log(Object.getPrototypeOf(p));	// { firstName: null, lastName: null, print: [Function: print] }
