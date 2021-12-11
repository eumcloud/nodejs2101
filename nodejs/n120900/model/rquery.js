function mquery(query, page, res){
    this.query = query;
    this.page = page;

    const mysql = require("mysql");
    require("dotenv").config();

   let pool = mysql.createPool({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    connectionLimit: process.env.connectionLimit
   });
    
   
    pool.getConnection(res, (err, conn)=>{
        if(err) throw err;
        conn.query(this.query, (err, result)=>{
            res.render(this.page, {result : result})
        });
    });

}module.exports = mquery;

// let query = "select * from Admin";
// let page = "index";

// mquery(query, page);
    
   