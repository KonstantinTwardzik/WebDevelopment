let salaries = new Map([
	["Jane Doe", 55000],
	["Hans Wurst", 32000],
	["Max Mustermann", 44000]
]);

let names = ["Jane Doe", "Hans Wurst", "Max Mustermann"];

let employees = new Set(names);

console.log("\n# Map");

for (let name of salaries.keys()) {
	console.log(name);
}

for (let salary of salaries.values()) {
	console.log(salary);
}

for (let employee of salaries.entries()) {
	console.log("%s: %d", employee[0], employee[1]);
}

for (let employee of salaries) {
	console.log(employee);
}

console.log("\n# Set");

for (let name of employees.keys()) {
	console.log(name);
}

for (let name of employees.values()) {
	console.log(name);
}

for (let employee of employees.entries()) {
	console.log("%s: %s", employee[0], employee[1]);
}

for (let employee of employees) {
	console.log(employee);
}

console.log("\n# Array");

for (let name of names.keys()) {
	console.log(name);
}

for (let name of names.entries()) {
	console.log("%s: %s", name[0], name[1]);
}

for (let name of names) {
	console.log(name);
}