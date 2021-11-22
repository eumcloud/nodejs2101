const express = require("express");
const app = express();


app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.end("Hellow World");
});
var server = app.listen(3000, ()=>{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listen at http://%s:%s", host, port);
});