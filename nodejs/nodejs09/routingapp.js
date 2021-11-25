const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 3000;
app.get("/hello", (req, res)=>{
   res.send("Hello World"); 
});

app.post("/hello", (req, res)=>{
     res.send("You just called the post method at '/hello'")
});

app.listen(port, host, ()=>{
    console.log(`Application Server running at http://${host}:${port}`);
});

class minirest{
    constructor(method, url, msg){
        this.method = method;
        this.url = url;
        this.msg = msg;
    }
    rest(){
        // if(this.method == "get" || )
    }
// curl -x "http://localhost:3000/hello"
// curl
}
let minirest = new minirest();
minirest.methid