const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views")

let ar = {
    name: "name", 
    url:"https://naver.com"
};
console.log(ar.name, ar.url);
app.get("/", (req, res)=>{

    res.render("index", {ttt : ar});
});

module.exports = app;