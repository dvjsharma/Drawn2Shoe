export const connectDB = () => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword",
        database: "mydb"
      });
      
      con.connect((err) => {
        if (err) throw err;
        console.log("Database Connected!");
      });
      return con;
}