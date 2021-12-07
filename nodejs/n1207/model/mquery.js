function mquery(sQuery){
    this.query = sQuery;

    const mysql = require("mysql");
    require("dotenv").config();

    let con = mysql.createConnection({
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DB
    });

    con.query(this.query, (err, result)=>{
        return result;
        
    });
    con.end();
}
module.exports = mqeury;