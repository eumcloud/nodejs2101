const express = require("express");
const host = "127.0.0.1";
const port = 3000;
// $ npm i cookie-parser --save
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser()); //모듈사용
app.set("view eingine", "pug");
app.set("views", "./views");


// --rest
app.get("/", (req, res)=>{
    // res.render("")
    res.cookie("name", "express").send("cookie set");
    console.log("Cookies : ", req.cookies);
    // res.cookie(name, "value", {expire : 360000 + Date.now()});
});

app.get("/clear", (req, res)=>{
    res.clearCookie("name", "express");
    res.send("cookie express cleared");    
});

app.listen(port, host, (req, res)=>{
    console.log(`App server is running http://${host}:${port}`);
});