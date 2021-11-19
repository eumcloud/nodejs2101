const http = require("http");
const fs = require('fs');
var port = 3000;
var homePage = '127.0.0.1';

var server = http.createServer((req,res)=>{
    fs.readFile("helloworld.html", (err, data)=>{
        res.writeHead(200, {'Content-Type:' : "text/html; charset-utf8"})
        res.write(data);
        
        return res.end();
    })
});

server.listen(port, homePage, ()=>{
    console.log(`포르쉐AG서버가 달리고 있습니당.. Porsche AG ruuning.... `)
});

//http://${homePage}:${port}/