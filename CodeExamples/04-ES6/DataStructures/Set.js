let employees = new Set(["Jane Doe", "Hans Wurst", "Jane Doe"]);
console.log(employees.size);

console.log(employees.has("Max Mustermann"));

employees.add("Max Mustermann");
employees.delete("Jane Doe");
console.log(employees.size);

employees.clear();
console.log(employees.size);
