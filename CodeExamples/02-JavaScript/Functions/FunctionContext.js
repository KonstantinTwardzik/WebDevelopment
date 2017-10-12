function getName() {
	return this.name;
}

var heinz = {
	name: "Heinz",
	getName: getName
};

var anna = {
	name: "Anna",
	getName: getName
};

console.log(getName());         // undefined
console.log(heinz.getName());   // Heinz
console.log(anna.getName());    // Anna
