var assert = require("assert");

var Common = require("../src/Common");

describe("Common.isNaturalNumber()", function () {
	describe("wrong type", function () {
		it("should return false if argument is not of type number", function () {
			assert.equal(Common.isNaturalNumber("SomeString"), false);
		});
	});

	describe("not integer", function () {
		it("should return false if argument is not a integer", function () {
			assert.equal(Common.isNaturalNumber(1.5), false);
		});
	});

	describe("negative integer", function () {
		it("should return false if argument is a negative integer", function () {
			assert.equal(Common.isNaturalNumber(-1), false);
		});
	});

	describe("positive integer", function () {
		it("should return true if argument is a positive integer", function () {
			assert.equal(Common.isNaturalNumber(1), true);
		});
	});

	describe("zero", function () {
		it("should return true if argument is 0", function () {
			assert.equal(Common.isNaturalNumber(0), true);
		});
	});
});

describe("Common.createUID()", function () {
	describe("length", function () {
		it("should return a string of length 36", function () {
			assert.equal(Common.createUID().length, 36);
		});
	});

	describe("grouping", function () {
		it("should be grouped by '-' at the right positions", function () {
			assert.deepStrictEqual(indicesOf(Common.createUID(), "-"), [8, 13, 18, 23]);
		});
	});

	describe("allowed chars", function () {
		const ALLOWED_CHARS = "-0123456789ABCDEF";

		it("should only contain allowed chars", function () {
			let uid = Common.createUID();
			for (let i = 0; i < uid.length; i++) {
				assert.ok(ALLOWED_CHARS.includes(uid[i]), `Invalid char: ${uid[i]}`);
			}
		});
	});
});

function indicesOf(string, char) {
	let indices = [];
	for (var i = 0; i < string.length; i++) {
		if (string[i] === char) {
			indices.push(i);
		}
	}
	return indices;
}
