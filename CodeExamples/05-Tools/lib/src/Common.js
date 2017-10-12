exports.isNaturalNumber = function (value) {
	return value !== null && Number.isInteger(value) && value >= 0;
};

exports.createUID = function () {
	const ALLOWED_CHARS = "0123456789ABCDEF";
	return `${createRandomString(8, ALLOWED_CHARS)}-${createRandomString(4, ALLOWED_CHARS)}-${createRandomString(4, ALLOWED_CHARS)}-${createRandomString(4, ALLOWED_CHARS)}-${createRandomString(12, ALLOWED_CHARS)}`;
};

function createRandomString(length, allowedChars) {
	let result = "";
	for (let i = 0; i < length; i++) {
		result += allowedChars[Math.floor(Math.random() * allowedChars.length)];
	}
	return result;
}
