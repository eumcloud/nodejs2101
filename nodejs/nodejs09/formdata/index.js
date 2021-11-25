const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { application } = require("express");

let upload = multer();
let app = express();

const host = "127.0.0.1";
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views"); 

app.get("/", (req, res)=>{
    res.render("form");
});
app.use(bodyParser.json()); //모듈사용 app.use
app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array());
app.use(express.static("public"));

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("recieved request \n" + req.body);
});
app.listen(port, host, ()=>{
    console.log(`Application Server Running http://${host}:${port}`);
});

//$npm i express multer body-parser --save