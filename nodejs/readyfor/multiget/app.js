const express = require("express");
const app = express();


app.set("view engine", "pug");
app.set("views", "./views");
app.use(morgan('dev'))

app.get("/", (req, res)=>{
    res.render("main");
});

app.get("/:link", (req, res)=>{
    console.log(req.params.link);
    if("board"==req.params.link) return res.render("board");
    if("mypage"==req.params.link) return res.render("mypage");
    if("ages"==req.params.link) res.redirect("/board");
});

function chk(req, res, next){
    console.log("로그인 확인")
    next();
}

app.get("/:link", chk,  (req, res)=>{
    console.log(req.params.link);
    if("buy"==req.params.link) return res.render("board");
    if("modify"==req.params.link) return res.render("mypage");
    if("mypage"==req.params.link) res.redirect("/board");
});


module.exports = app;