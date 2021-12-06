const pd = require("./mquery");

let sQeury = "select * from Product";
pd.query(sQeury);



r



const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{

    res.render("main", {
        result: result
    })    
});

module.exports = router;
