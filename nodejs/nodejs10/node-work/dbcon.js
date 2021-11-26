const mysql = require("mysql");

const config = require("./dbconfig.json");


let dbPool = mysql.createPool(config);

function getDBConnection(callback){
    dbPool.getConnection((err, conn)=>{
        if(!err) {
            callback(conn);
        }
    });
}

module.exports = getDBConnection;
