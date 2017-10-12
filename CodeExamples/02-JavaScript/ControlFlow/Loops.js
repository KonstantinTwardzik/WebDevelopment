console.log("\n# while");

var i = 1;

while (i <= 50) {
	console.log(i);
	i++;
}

console.log("\n# do-while");

var j = 1;

do {
	console.log(j);
	j++;
} while (j <= 50);

console.log("\n# for");

for (var k = 1; k <= 50; k++) {
	console.log(k);
}

console.log("\n");

for (var l = 1; l <= 10; l++) {
	var line = "";
	for (var m = 1; m <= 10; m++) {
		line += ((l * m) + "\t");
	}
	console.log(line);
}

console.log("\n# continue");

for (var n = 1900; n <= 2000; n++) {
	if (((n % 4 === 0) && (n % 100 !== 0)) || (n % 400 === 0)) {
		continue;
	}
	console.log(n);
}

console.log("\n# break");

function search(haystack, needle) {
	var found = false;
	for (var o = 0; o < haystack.length; o++) {
		if (haystack[o] === needle) {
			found = true;
			break;
		}
	}
	return found;
}

console.log(search([1, 2, 3, 4, 5], 3));

console.log("\n# for..in");

var pbEntry = {
	firstName: "Hans",
	lastName: "Wurst",
	number: "0123-456789",
	print: function () {
		// ...
	}
};

for (var key in pbEntry) {
	console.log("%s: %s (%s)", key, pbEntry[key], typeof pbEntry[key]);
}
