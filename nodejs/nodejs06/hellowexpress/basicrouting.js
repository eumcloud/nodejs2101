const express = require("express");

let app = express(); //http가 내장되어있고 확장개발된것.
/* 따라서, createServer가 자동 포함됨! */

app.get("/", (req, res)=>{
    console.log("Get request for /(rootpage)!!! ");
    res.send("Hello Get /");
});

app.post("/", (req, res)=>{
    console.log("Got a post request the root page!!!");
    res.send("Hello POST / ");
});
app.delete("del_user", function(req, res){
    console.log('get Delete User request for /del_user');
    res.send("Hello DELETE");
});

app.get("/list_user", (req, res)=>{
    console.log("get request for /list_user ");
    res.send("User Listing to page");
});
app.get("/ab*cd", (req, res)=>{
    console.log("get request for /ab*cd ");
    res.send("Display pattern matching route");
});
var server = app.listen(3000, ()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server app listening at http://%s:%s", host, port);
});