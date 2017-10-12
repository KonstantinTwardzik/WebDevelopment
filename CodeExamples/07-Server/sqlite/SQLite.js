// npm install sqlite3
// npm install sqlite (wrapper around sqlite3 that uses ES6 promises instead of callbacks)

const sqlite3 = require("sqlite3");

let db = new sqlite3.Database(":memory:");

try {
	db.serialize(() => {
		db.run("CREATE TABLE department (id CHARACTER(3) PRIMARY KEY, name TEXT)");

		let statement = db.prepare("INSERT INTO department VALUES (?, ?)");
		statement.run("INF", "Informatik");
		statement.run("WIR", "Wirtschaft");
		statement.finalize();

		db.run("CREATE TABLE course (id INTEGER PRIMARY KEY ASC, name TEXT, department CHARACTER(3))");

		statement = db.prepare("INSERT INTO course(name, department) VALUES (?, ?)");
		statement.run("Informatik (B.Sc.)", "INF");
		statement.run("Informatik - Digitale Medien und Spiele (B.Sc.)", "INF");
		statement.run("Informatik - Sichere und mobile Systeme (B.Sc.)", "INF");
		statement.run("Medizininformatik (B.Sc.)", "INF");
		statement.run("Betriebswirtschaft (B.Sc.)", "WIR");
		statement.finalize();

		db.each("SELECT course.name AS courseName, department.name as departmentName FROM (course LEFT JOIN department ON (course.department = department.id))", function (error, row) {
			if (error) {
				console.error(error.toString());
				return;
			}
			console.log(`${row.departmentName}: ${row.courseName}`);
		});
	});
}
finally {
	db.close();
}
