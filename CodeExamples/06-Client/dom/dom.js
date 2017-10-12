(function () {
	let list = document.getElementById("list");
	let listItems = list.getElementsByTagName("li");
	for (li of listItems) {
		console.log(li.textContent);
	}

	let importantParagraphs = document.getElementsByClassName("important");
	for (p of importantParagraphs) {
		console.log(p.textContent);
	}

	// Selector API
	let firstListItemsInSubLists = document.querySelectorAll("#nestedList ul li:first-child");
	for (li of firstListItemsInSubLists) {
		console.log(li.innerHTML);
	}

	// DOM traversal
	let b2 = document.getElementById("b2");
	let path = "";
	let current = b2;
	while (current) {
		path = path.length === 0 ? `${current.tagName}` : `${current.tagName} > ${path}`;
		current = current.parentElement;
	}
	console.log(path);

	let siblings = b2.parentElement.children;
	for (sibling of siblings) {
		if (sibling !== b2) {
			console.log(sibling.innerHTML);
		}
	}

	// element creation
	let table = document.createElement("table");
	table.setAttribute("id", "timesTable");
	for (let rowIndex = 1; rowIndex <= 10; rowIndex++) {
		let row = document.createElement("tr");
		for (let colIndex = 1; colIndex <= 10; colIndex++) {
			let cell = document.createElement("td");
			cell.textContent = rowIndex * colIndex;
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	
	let timesTable = document.getElementById("timesTable");	
	timesTable.parentNode.replaceChild(table, timesTable);
})();
