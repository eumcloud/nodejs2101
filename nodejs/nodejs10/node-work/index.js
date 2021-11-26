const express = require("express");//
// const mysql = require("mysql");
// const getDbConnection = require("./dbcon");

const mysql =require("./dbcon"); //dbcon.js
const path = require("path");
const app = express();

const port = 3000;
const host = "127.0.0.1";


// let con = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });
// mysql.getDBConnection((err, connection)=>{
//     if(!err){
//         // connection.query("Select * from class4");
//         console.log("DB connection Pool Success");
//     }
//     connection.release();
    
// })

app.get("/connection_pool/test", (req,res)=>{
    const sql = "Select * from class4";
    try{
        mysql.getDBConnection((err, connection)=>{
            console.log("connection_pool GET");
            if(err) throw err;
            connection.query(sql, (err, result, fields)=>{
                if(err){
                    console.error("connection_pool GET Error /" + err);
                    res.status(500).send("message : Internal Server Error");
                }
                else{
                    if(result.length === 0){
                        res.status(400).send({
                            success: false,
                            message: "DB response Not Found"
                        });

                    }else{
                        res.status(200).send({
                            success: true,
                            result
                        });
                    }
                }
            });
            connection.release();
        });
    }catch(err){
        console.error("connection_pool GET Error / "+err);
        res.status(500).send("message : Internal Server Error");
    }
});
app.listen(port, host, ()=>{
    console.log(`Application Server running at http://${host}:${port}/`);
});