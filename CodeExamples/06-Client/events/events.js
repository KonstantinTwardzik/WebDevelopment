class MyTimeEvent extends CustomEvent {	
	constructor() {
		super(MyTimeEvent.ON_TIME, {
			detail: {
				time: new Date().toUTCString()
			}
		});
	}

	getTime() {
		return this.detail.time;
	}
}
MyTimeEvent.ON_TIME = "MYTIMEEVENT_ON_TIME";

(function () {
	let currentSize = 10;
	createTable(currentSize);

	// keyboard event listener
	document.addEventListener("keyup", event => {
		if (event.key === "+") {
			currentSize++;			
		}
		else if (event.key === "-") {
			currentSize = Math.max(1, currentSize - 1);
		}
		createTable(currentSize);

		// dispatch custom events
		if (event.key === "t") {
			document.dispatchEvent(new Event("myEvent"));
			document.dispatchEvent(new CustomEvent("myCustomEvent", {
				detail: {
					time: new Date().toUTCString()
				}
			}));
			document.dispatchEvent(new MyTimeEvent());
		}
	});

	// listen for custom events
	document.addEventListener("myEvent", event => console.log(event.type));
	document.addEventListener("myCustomEvent", event => console.log(event.detail.time));
	document.addEventListener(MyTimeEvent.ON_TIME, event => console.log(event.getTime()));
})();

function createTable(size) {
	let table = document.createElement("table");

	// mouse event listener (on complete table)
	table.addEventListener("dblclick", event => console.log(event.target.textContent));

	table.setAttribute("id", "timesTable");
	for (let rowIndex = 1; rowIndex <= size; rowIndex++) {
		let row = document.createElement("tr");
		for (let colIndex = 1; colIndex <= size; colIndex++) {
			let cell = document.createElement("td");
			cell.textContent = rowIndex * colIndex;
			row.appendChild(cell);

			// mouse event listener (on each cell)
			//cell.addEventListener("dblclick", event => console.log(event.target.textContent));
		}
		table.appendChild(row);
	}

	let timesTable = document.getElementById("timesTable");	
	timesTable.parentNode.replaceChild(table, timesTable);
}