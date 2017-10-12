const fs = require("fs");

try {
	fs.mkdirSync("./newDirSync");
	fs.rmdirSync("./newDirSync");

	let files = fs.readdirSync(".");
	for (let file of files) {
		console.log(file);
	}
}
catch (error) {
	console.error(error.toString());
}

fs.mkdir("./newDirAsync", error => {
	if (error) {
		console.error(error.toString());
		return;
	}

	fs.rmdir("./newDirAsync", error => {
		if (error) {
			console.error(error.toString());
			return;
		}
	});
});

fs.readdir(".", (error, files) => {
	if (error) {
		console.error(error.toString());
		return;
	}
	for (let file of files) {
		console.log(file);
	}
});
