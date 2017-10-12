class ReverseSortedArray {
	constructor(array) {
		this.array = array.sort();
	}

	[Symbol.iterator]() {
		let currentIndex = this.array.length - 1;

		return {
			next: () => {
				if (currentIndex >= 0) {
					return {
						value: this.array[currentIndex--],
						done: false
					};
				}
				else {
					return {
						done: true
					};
				}
			}
		};
	}

	toArray() {
		let result = [];
		for (let element of this) {
			result.push(element);
		}
		return result;
	}
}

module.exports = ReverseSortedArray;
