const express = require("express");
const app = express();

app.set("view engine", "pug"); //app.set("view engine", "ejs");
app.set("views", "./views"); //뒤에 path만 응용가능 app.set("views", path);


const port = 3000;
const host = "127.0.0.1";


app.get("/", (req, res)=>{
    res.render("firstview");
});
app.get("/dynamic_view", (req, res)=>{
 res.render("dynamic", {
     name: "KGABLOCK 4Class",
     url : "https://www.apple.com"
 });
});

app.get("/dynamic_view2", (req, res)=>{
    res.render("dynamic", {
        name: "KGABLOCK 4Class",
        url : "https://www.apple.com"
    });
   });

app.get("/hi", (req, res)=>{
    res.render("hifriend", {
        user : {name : "미카엘", age: "24"}
    });
});


app.listen(port, host, (req, res)=>{
    console.log(`pug is running http://${host}:${port}`);
});