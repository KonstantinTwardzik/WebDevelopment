const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8080;

let server = express();

server.use(bodyParser.json());

server.post("/data", (request, response) => {
	console.log("POST", request.body.message, request.body.user);
	response.send("OK");
});

server.put("/data", (request, response) => {
	console.log("PUT", request.body.message, request.body.user);
	response.send("OK");
});

server.listen(PORT, () => { console.log("HTTP server listening on port %d.", PORT); });
