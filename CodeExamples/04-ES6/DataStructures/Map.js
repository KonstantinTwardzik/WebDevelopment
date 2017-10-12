let salaries = new Map([
	["Jane Doe", 55000],
	["Hans Wurst", 32000]
]);

console.log(salaries.size);
console.log(salaries.get("Hans Wurst"));
salaries.set("Max Mustermann", 44000);
console.log(salaries.size);
console.log(salaries.has("Max Mustermann"));
salaries.delete("Jane Doe");
console.log(salaries.size);
salaries.clear();
console.log(salaries.size);
