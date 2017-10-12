// npm install websocket

const WebSocketServer = require("websocket").server;
const http = require("http");

const PORT = 8080;

let httpServer = http.createServer((request, response) => {
	let data = "Hello, World!";
	response.writeHead(200, { "Content-Type": "text/plain", "Content-Length": data.length });
	response.end(data);
}).listen(PORT, () => { console.log("HTTP/WebSocket server listening on port %d.", PORT); });

let webSocketserver = new WebSocketServer({ httpServer: httpServer });

webSocketserver.on("request", request => {
	let connection = request.accept();

	connection.on("message", function (message) {
		if (message.type === "utf8") {
			console.log("Server received: %s", message.utf8Data);
			connection.sendUTF(message.utf8Data);
		}
	});

	connection.on("close", () => {
		console.log("Client %s closed connection.", connection.remoteAddress);
	});
});