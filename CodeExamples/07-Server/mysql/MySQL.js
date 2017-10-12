// npm install mysql

const mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "cb",
	password: "abcd",
	database: "we"
});

connection.connect();

try {
	connection.query("SELECT course.name AS courseName, department.name as departmentName FROM (course LEFT JOIN department ON (course.department = department.id))", function (error, results, fields) {
		if (error) {
			console.log(error);
			return;
		}

		for (let row of results) {
			console.log("%s: %s", row.departmentName, row.courseName);
		}
	});
}
finally {
	connection.end();
}
