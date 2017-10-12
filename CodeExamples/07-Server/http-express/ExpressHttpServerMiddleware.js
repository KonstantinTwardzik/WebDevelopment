const express = require("express");

const PORT = 8080;

let server = express();

function log(request, response, next) {
	console.log(new Date().toUTCString(), request.ip, request.originalUrl);
	next();
}

server.use(log);
//server.use("/json", log);

server.get("/", (request, response) => {
	response.send("Hello, World!");
});

server.get("/json", (request, response) => {
	response.json({
		message: "Hello, World!",
		success: true
	});
});

server.listen(PORT, () => { console.log("HTTP server listening on port %d.", PORT); });
