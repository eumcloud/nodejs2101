const host = "127.0.0.1";
const port = 3000;
const express = require("express");

const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/",(req, res)=>{ 
    // console.log(req, res); 
    res.render("input");
});

app.post("/addr", (req, res)=>{
    console.log(req.body);
    res.end(JSON.stringify(req.body));
});

app.listen(port, (req, res)=>{
    console.log(`"Listening------------------${host}:${port}"`)
});