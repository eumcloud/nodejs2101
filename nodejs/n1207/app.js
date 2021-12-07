const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const product = require("./routes/product");

app.set("view engine", "pug");
app.set("views", "./views");

app.use("./product", product);

app.get("/", (req, res)=>{
   
    
    res.render("index");
});

module.exports = app;