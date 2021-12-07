const express = require("express");
const router = express.Router();
const mquery = require("./model/mquery");
const session = require('express-session');	//세션관리용 미들웨어

app.use(session({
  httpOnly: true,	//자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
  secure: ture,	//https 환경에서만 session 정보를 주고받도록처리
  secret: 'secret key',	
  resave: false,	
  saveUninitialized: true,	
  cookie: {	
    httpOnly: true,
    Secure: true
  }
}));

function chkId(req, res, next){
    if(""==req.session.id){return res.render("login")}
    next();
}

router.get("/", chkId, (req,res)=>{
    let sQuery = "select * from Product";
    let result = mquery.mquery(sQuery);
    res.render("index", {
        products : result
    })
});

module.exports = router;