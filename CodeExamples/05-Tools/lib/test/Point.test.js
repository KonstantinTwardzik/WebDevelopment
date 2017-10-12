var assert = require("assert");

var Point = require("../src/geometry/Point");

describe("Point", function () {
	describe("getX()", function () {
		it("should return value which was given to constructor", function () {
			const X = 10;
			const Y = -20;
			assert.equal(new Point(X, Y).getX(), X);
		});
	});

	describe("getY()", function () {
		it("should return value which was given to constructor", function () {
			const X = 10;
			const Y = -20;
			assert.equal(new Point(X, Y).getY(), Y);
		});
	});
});
