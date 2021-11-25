const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.end("Hellow world!!"); 
});
let server = app.listen(3000, ()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listen at http://%s:%s", host, port);
});