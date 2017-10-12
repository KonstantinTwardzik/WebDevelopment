const fs = require("fs");

try {
	let data = fs.readFileSync("../Luxemburg_2012.gpx");
	console.log(data.toString());
}
catch (error) {
	console.error(error.toString());
}

fs.readFile("../Luxemburg_2012.gpx", (error, data) => {
	if (error) {
		console.error(error.toString());
		return;
	}
	console.log(data.toString());
});
