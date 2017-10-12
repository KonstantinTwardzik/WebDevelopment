(function () {
	let request = new XMLHttpRequest();
	request.addEventListener("error", error => { console.error(error.toString()); });
	request.addEventListener("load", () => { 
		if (request.status === 200) {
			showCountryInfo(request.response); 
		}
	});
	request.open("GET", "http://api.geonames.org/countryInfo?lang=de&country=LU&username=cbettinger");
	request.setRequestHeader("Accept", "text/xml");
	request.responseType = "document";
	request.send();

	function showCountryInfo(info) {	
		let country = info.getElementsByTagName("country")[0];
		let table = document.getElementById("countryInfo");

		for (let child of country.children) {
			let row = document.createElement("tr");
			let keyColumn = document.createElement("td");
			keyColumn.textContent = child.tagName;
			row.appendChild(keyColumn);
			let valueColumn = document.createElement("td");
			valueColumn.textContent = child.textContent;
			row.appendChild(valueColumn);
			table.appendChild(row);
		}
	}
})();