const EventEmitter = require("events");

class Emitter extends EventEmitter {
	constructor() {
		super();

		setInterval(this.emitEvent.bind(this), 1000);
	}

	emitEvent() {
		this.emit(Emitter.ON_EXECUTE, new Date());
	}
}

Emitter.ON_EXECUTE = "EMITTER_ON_EXECUTE";

module.exports = Emitter;
