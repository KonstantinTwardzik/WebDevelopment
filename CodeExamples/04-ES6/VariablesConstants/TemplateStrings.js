let name = "Heinz";
let age = 42;

function getRandomName() {
	let names = ["Jane", "John", "Max"];
	return names[Math.floor(Math.random() * names.length)];
}

let text = `Hello ${getRandomName()}. My name is ${name} and I'm ${age} years old.`;

console.log(text);
