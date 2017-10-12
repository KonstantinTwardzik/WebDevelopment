const express = require("express");

const PORT = 8080;

let server = express();

server.get("/", (request, response) => {
	response.send("Hello, World!");
});

server.get("/json", (request, response) => {
	response.json({
		message: "Hello, World!",
		success: true
	});
});

server.get("/XXX", (request, response) => {
	response.sendStatus(404);
});

server.listen(PORT, () => { console.log("HTTP server listening on port %d.", PORT); });
