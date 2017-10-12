const express = require("express");
const path = require("path");

const PORT = 8080;

let server = express();

server.use(express.static(path.join(__dirname, "webapp")));
//server.use("/public", express.static(path.join(__dirname, "webapp")));

server.get("/json", (request, response) => {
	response.json({
		message: "Hello, World!",
		success: true
	});
});

server.listen(PORT, () => { console.log("HTTP server listening on port %d.", PORT); });
