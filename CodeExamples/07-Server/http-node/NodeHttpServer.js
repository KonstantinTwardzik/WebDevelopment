const http = require("http");

const PORT = 8080;

http.createServer((request, response) => {
	let data = "Hello, World!";
	let lol = "lol";
	response.writeHead(200, { "Content-Type": "text/plain", "Content-Length": lol.length });
	response.end(lol);
}).listen(PORT, () => { console.log("HTTP server listening on port %d.", PORT); });
