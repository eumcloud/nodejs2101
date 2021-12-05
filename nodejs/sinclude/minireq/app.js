const express = require("express");

const serv = require("./routes/admin/admin");

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use("/admin", serv);


app.get("/", (req, res)=>{
    
    // if(req.url.pathname().split("/")[0]=="products"){ res.render("products")}
    res.render("index", {
        page: "include ./body"
    });
});

module.exports = app;