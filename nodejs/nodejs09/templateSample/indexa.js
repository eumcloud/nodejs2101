const express = require("express");
const app = express();

const port = 3000;
const host = "127.0.0.1";
const routing = require("./router.js");


app.use("/router", routing );
app.listen(port, host, ()=>{
    console.log(`IndexServer Running at http://${host}:${port}`);
});

// curl -x POST "http://localhost:3000/router";
// curl -x GET "http://localhost:3000/";