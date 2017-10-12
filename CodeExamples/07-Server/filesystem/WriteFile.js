const fs = require("fs");

try {
	fs.writeFileSync("./outputSync.txt", "Sync\n1\n");
}
catch (error) {
	console.error(error.toString());
}

fs.writeFile("./outputAsync.txt", "Async\n2\n", error => {
	if (error) {
		console.error(error.toString());
		return;
	}
});
