/** Class representing a point. */
class Point {
	/**
	 * Create a point.
	 * @param {number} x - The x value.
	 * @param {number} y - The y value.
	 */
	constructor(x, y) {
		this._set(x, y);
	}

	/**
	 * Set the x and y value.
	 * @param {number} x - The x value.
	 * @param {number} y - The y value.
	 * @private
	 * */
	_set(x, y) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Get the x value.
	 * @return {number} The x value.
	 */
	getX() {
		return this.x;
	}

	/**
	 * Get the y value.
	 * @return {number} The y value.
	 */
	getY() {
		return this.y;
	}

	/**
	 * Convert a string containing two comma-separated numbers into a point.
	 * @param {string} str - The string containing two comma-separated numbers.
	 * @return {Point} A Point object.
	 */
	static fromString(str) {
		return new Point(0, 0);	// TODO
	}
}

module.exports = Point;
