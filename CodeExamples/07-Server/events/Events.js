const Emitter = require("./Emitter");

let emitter = new Emitter();
emitter.on(Emitter.ON_EXECUTE, date => {
	console.log(date.toString());
});

emitter.once(Emitter.ON_EXECUTE, () => {
	console.log("TADA!");
});
