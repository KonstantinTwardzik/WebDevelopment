console.log("\n# if/else if/else");

var h = new Date().getHours();
console.log("Stunde: %d", h);

if (h < 9) {
	console.log("Morgen");
}
else if (h < 12) {
	console.log("Vormittag");
}
else {
	console.log("Zeit zum Aufstehen");
}

console.log("\n# shorter boolean evaluation");

function log(msg) {
	if (msg !== undefined && msg !== null && msg.length !== 0) {
		console.log(msg);
	}
}

log(undefined);		//
log(null);			//
log("");			//
log("Hello");		// Hello

function log2(msg) {
	if (msg && msg.length) {
		console.log(msg);
	}
}

log2(undefined);	//
log2(null);			//
log2("");			//
log2("Hello");		// Hello
