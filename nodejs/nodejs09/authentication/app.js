const express = require("express");
const app = express();
const host = "127.0.0.1";
const port = 3000;
const bodyParser = require("body-parser");

const multer = require("multer");
const dotenv = require("dotenv").config();


const upload = multer();
const session = require("express-session");//session = 연결
const cookieParser = require("cookie-parser");


app.set("view eigine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(cookieParser());
app.use(session({
    name: "codeil",
    secret: process.env.SECRET, 
    resave: false,
    saveUninitialized:true , 
    cookie:{
        maxAge:(1000 * 60 * 100) //millisecond
    }
}));




let Users =[];
app.get("/", (req, res)=>{
    
    res.render("signup", {
        message:"signup"
    });
    
}); 
app.post("/signup", (req, res)=>{
    if(!req.body.id || !req.body.password){
        res.status("404");
        res.send("Invalid id or password!!!");
    }else{
        Users.filter((user)=>{
            if(user === req.body.id){
                res.sender("signup", {
                    message: "User Already Exist! Login or choose another user id"
                });
            }
        });

        let newUser = {id: req.body.id, password: req.body.password} ;
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect("/protected_page");
    }

    app.get("/protected_page", (err, req, res, next)=>{
        res.render("protected_page");
    });
      
});
app.listen(port, host, ()=>{
    console.log(`Application running at http://${host}:${port}`);
});