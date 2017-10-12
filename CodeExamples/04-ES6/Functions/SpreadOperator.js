function createUser(name, password, admin = false) {
	console.log("Created%s user: %s", admin ? " admin" : "", name);
}

let user1 = ["bettingc", "1234"];
let user2 = ["admin", "h o   ch s    chu  l e t   rie r", true];
let user3 = ["wursth", "abcd", false, "hans.wurst@mail.tld"];
let user4 = ["doej"];

//createUser(user2[0], user2[1], user2[2]);	// naive approach

createUser(...user1);
createUser(...user2);
createUser(...user3);
createUser(...user4);
