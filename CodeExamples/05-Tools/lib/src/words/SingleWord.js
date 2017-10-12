const randomWord = require("random-curse-words");

class SingleWord {
	static print() {
		document.getElementById("output").appendChild(SingleWord._createElement());
		document.getElementById("output").appendChild(document.createElement("br"));
		document.getElementById("output").appendChild(document.createElement("br"));
	}

	static _createElement() {
		let p = document.createElement("p");
		let text = document.createTextNode(randomWord());
		p.appendChild(text);
		return p;
	}
}

module.exports = SingleWord;
