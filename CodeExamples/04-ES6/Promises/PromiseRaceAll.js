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

Promise.all([asyncA(), asyncB(), asyncC(), asyncD()]).then(values => {
	console.log(values);
})
.catch(reason => {
	console.error(reason);
});

Promise.race([asyncA(), asyncB(), asyncC(), asyncD()]).then(value => {
	console.log(value);
}).catch(reason => {
	console.error(reason);
});
