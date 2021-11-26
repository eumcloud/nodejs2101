const mysql = require("mysql");
const dotenv = require("dotenv").config();
// const dbConfig = require("./dbconfig.json");

let con = mysql.createConnection({ //대소문자 구분해야됨
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
// let con = mysql.createConnection(dbConfig);

con.connect(function(err){
    if(err) throw err;
    console.log("Database Connected!");
    // let sQuery = "CREATE DATABASE NODEPOTFOLIO";
    // let sQuery = "CREATE table customers (name varchar(128), addr varchar(256))";
    // let sQuery = "INSERT INTO customers(name, addr) values('James Hetfield', 'New York City')";
    // let sQuery = "INSERT INTO customers(name, addr) values('Kirk Hammit', 'New York City')";
    // let sQuery = "INSERT INTO customers(name, addr) values('Chris Evans', 'Los Angeles')";
    // let sQuery = "SELECT * FROM customers";
    // let sQuery = "SELECT * FROM customers WHERE name='james hetfield'";
    // let sQuery = "Select * From customers ORDER BY name";
    // let sQuery = "Select * From customers ORDER BY addr";
    // let sQuery = "Delete from customers WHERE name = 'Adams Dole'";
    // let sQuery = "Select * from customers";
    // let sQuery  = "Update customers SET addr= 'Missisifi Liver' where name ='kirk Hammit'";
    // let sQuery = "Select * from customers";
    // let sQuery = "Drop table customers ";

    con.query(sQuery, (err, result, fields)=>{
        if(err) console.error(err); //throw err;
        
        // console.log("Database nodepotfolio Create Success!!!");
        // console.log("Table customers Create Success!!!");
        console.log(result);
        // console.log(fields);
    });

    con.end();
});

// con.end();