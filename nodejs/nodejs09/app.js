const express = require("express");
const app = express();

const port = 3000;
const host = "127.0.0.1";

app.get("/:id", (req, res)=>{//빌드 라고한다.
    res.send("This id is : " + req.params.id);
});
app.get("/hello/:name/:id", (req, res)=>{
    res.send("ID : "+ req.params.id + " name " + req.params.name);
});



app.listen(port, host, ()=>{
    console.log(`Application Server running at http://${host}:${port}`);
});