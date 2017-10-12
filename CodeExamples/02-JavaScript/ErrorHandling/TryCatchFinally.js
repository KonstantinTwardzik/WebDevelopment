try {
	// do something that may
	// throw an error, e.g.
	throw new Error("Oops.");
}
catch (error) {
	console.error(error);
}
finally {
	console.log("Done.");
}
