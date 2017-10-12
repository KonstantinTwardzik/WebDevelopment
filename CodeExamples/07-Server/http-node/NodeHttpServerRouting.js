const http = require("http");

const PORT = 8080;

http.createServer((request, response) => {
	if (request.url === "/") {
		let data = "Hello, World!";
		response.writeHead(200, { "Content-Type": "text/plain", "Content-Length": data.length });
		response.end(data);
	}
	else if (request.url === "/json") {
		let data = JSON.stringify({
			message: "Hello, World!",
			success: true
		});
		response.writeHead(200, { "Content-Type": "application/json", "Content-Length": data.length });
		response.end(data);
	}
	else if (request.url === "/data" && request.method === "POST") {
		// parse and process POST data...
		response.writeHead(204);
		response.end();
	}
	else {
		response.writeHead("404");	// do not wait for timeout
		response.end();
	}
}).listen(PORT, () => { console.log("HTTP server listening on port %d.", PORT); });
