// Install MongoDB
// mongod --dbpath "/home/user/mongodbdata"

// npm install mongodb

const mongo = require("mongodb");
const dbClient = mongo.MongoClient;

const DB_URL = "mongodb://localhost:27017/Library";

dbClient.connect(DB_URL, (error, db) => {
	if (error) {
		console.error(error.toString());
		process.exit(-1);
	}
	console.log("Connected to MongoDB.");

	try {
		let books = db.collection("books");

		// create documents
		books.insertOne({
			author: "Stevenson, Louis",
			title: "Die Schatzinsel"
		});

		books.insertMany([
			{
				author: "Verne, Jules",
				title: "Die geheimnisvolle Insel"
			},
			{
				author: "Verne, Jules",
				title: "20.000 Meilen unter dem Meer"
			},
			{
				author: "Verne, Jules",
				title: "Matthias Sandorf"
			},
		]);

		// read documents
		let cursor = books.find();
		cursor.each((error, book) => {
			if (error) {
				console.error(error.toString());
				return;
			}

			if (book) {
				console.log("%s: %s", book.author, book.title);
			}
		});

		// filter documents
		cursor = books.find({ author: "Verne, Jules" });
		cursor.each((error, book) => {
			if (error) {
				console.error(error.toString());
				return;
			}

			if (book) {
				console.log("%s: %s", book.author, book.title);
			}
		});

		// update documents
		books.updateOne({ title: "20.000 Meilen unter dem Meer" }, { $set: { title: "20.000 Meilen unter den Meeren" } });

		cursor = books.find();
		cursor.each((error, book) => {
			if (error) {
				console.error(error.toString());
				return;
			}

			if (book) {
				console.log("%s: %s", book.author, book.title);
			}
		});

		// delete documents
		books.deleteOne({ title: "Matthias Sandorf" });
		books.deleteMany({});
	}
	finally {
		db.close();
	}
});
