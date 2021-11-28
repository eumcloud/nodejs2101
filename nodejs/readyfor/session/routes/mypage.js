const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("admin 이후 url");    
});
router.get("/buylist", (req, res)=>{
   res.send("<h2>buylist</h2>"); 
});


module.exports = router;