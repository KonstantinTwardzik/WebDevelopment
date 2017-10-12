function asyncA(callback) {
	setTimeout(() => {
		let result = Math.random();
		if (result < 0.2) {
			callback("A: Result is too low.", result);
		}
		else {
			callback(null, result);
		}
	}, 100);
}

function asyncB(callback) {
	setTimeout(() => {
		let result = Math.random();
		if (result < 0.2) {
			callback("B: Result is too low.", result);
		}
		else {
			callback(null, result);
		}
	}, 100);
}

function asyncC(callback) {
	setTimeout(() => {
		let result = Math.random();
		if (result < 0.2) {
			callback("C: Result is too low.", result);
		}
		else {
			callback(null, result);
		}
	}, 100);
}

function asyncD(callback) {
	setTimeout(() => {
		let result = Math.random();
		if (result < 0.2) {
			callback("D: Result is too low.", result);
		}
		else {
			callback(null, result);
		}
	}, 100);
}

asyncA((error, result) => {
	if (error) {
		console.error(error);
	}
	else {
		console.log(result);
		// call another async function
		asyncB((error, result) => {
			if (error) {
				console.error(error);
			}
			else {
				console.log(result);
				// call another async function
				asyncC((error, result) => {
					if (error) {
						console.error(error);
					}
					else {
						console.log(result);
						// call another async function
						asyncD((error, result) => {
							if (error) {
								console.error(error);
							}
							else {
								console.log(result);
							}
						});
					}
				});
			}
		});
	}
});
