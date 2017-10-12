function asyncA() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = Math.random();
			if (result < 0.2) {
				reject("A: Result is too low.");
			}
			else {
				resolve(result);
			}
		}, 100);
	});
}

function asyncB() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = Math.random();
			if (result < 0.2) {
				reject("B: Result is too low.");
			}
			else {
				resolve(result);
			}
		}, 100);
	});
}

function asyncC() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = Math.random();
			if (result < 0.2) {
				reject("C: Result is too low.");
			}
			else {
				resolve(result);
			}
		}, 100);
	});
}

function asyncD() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = Math.random();
			if (result < 0.2) {
				reject("D: Result is too low.");
			}
			else {
				resolve(result);
			}
		}, 100);
	});
}

asyncA().then(value => {
	console.log(value);
	return asyncB();
}).then(value => {
	console.log(value);
	return asyncC();
}).then(value => {
	console.log(value);
	return asyncD();
}).then(value => {
	console.log(value);
}).catch(reason => {
	console.error(reason);
});


