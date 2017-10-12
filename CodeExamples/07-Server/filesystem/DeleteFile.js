const fs = require("fs");

try {
	fs.unlinkSync("./outputSync.txt");
}
catch (error) {
	console.error(error.toString());
}

fs.unlink("./outputAsync.txt", error => {
	if (error) {
		console.error(error.toString());
		return;
	}
});
