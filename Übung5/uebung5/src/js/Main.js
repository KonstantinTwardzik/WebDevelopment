let loremIpsum = require("lorem-ipsum");
setInterval(function () { document.getElementById("Lorem").innerHTML += loremIpsum(); }, 1000);
