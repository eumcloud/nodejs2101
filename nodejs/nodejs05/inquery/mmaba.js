const fs = require("fs");
const buffSize = 2048;
const buf = Buffer.alloc(buffSize);
const http = require("http");
const port = 3000;
const strIp = "127.0.0.1";

let server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type" : "text/html; charset-utf8"});
    res.write(req.url);
    res.end();
});
server.listen(port, strIp, ()=>{
   console.log(`Server running at http://${strIp}:${port}`);
});