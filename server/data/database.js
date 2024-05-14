import mysql from "mysql";

export const connectDB = () => {
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "drawn2shoe"
	});

	con.connect((err) => {
		if (err) throw err;
		console.log("Database Connected!");
	});
	return con;
}