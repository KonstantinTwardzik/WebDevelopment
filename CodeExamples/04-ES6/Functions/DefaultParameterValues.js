function createRandomPassword() {
	return "n88m%an!_";
}

function createUser(name, password = createRandomPassword(), admin = false) {
	console.log("Created%s user: %s", admin ? " admin" : "", name);
	console.log(password);
}

createUser("bettingc", "1234");
createUser("admin", "h o   ch s    chu  l e t   rie r", true);
createUser("doejane");
