(function () {
	let loremIpsum = require("lorem-ipsum");
    var xy;
	setInterval(loremIpsum(), 1000);
	setInterval(console.log(loremIpsum()), 1000)
})();
