const WebSocketClient = require("websocket").client;

const webSocketClient = new WebSocketClient();

webSocketClient.on("connectFailed", error => {
	console.error(error.toString());
});

webSocketClient.on("connect", connection => {
	connection.on("error", error => {
		console.error(error.toString());
	});

	connection.on("close", () => {
		console.log("Server closed connection.");
	});

	connection.on("message", function (message) {
		if (message.type === "utf8") {
			console.log("Client received: %s", message.utf8Data);
		}
	});

	function sendRandomNumber() {
		if (connection.connected) {
			let randomNumber = Math.round(Math.random() * 0xFFFFFF);
			connection.sendUTF(randomNumber.toString());
			setTimeout(sendRandomNumber, 2000);
		}
	}
	sendRandomNumber();
});

webSocketClient.connect("ws://localhost:8080/");
