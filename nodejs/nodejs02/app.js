var http = require('http'); //httpServer를 light하게 생성
var dt = require('./01/node0201myfirstnodemodule');
const homePage = '127.0.0.1';
const port = 3030;

const server = 
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write("The date and time are currently: " + dt.myDateTime());//response.end로 주지않고 write로 써버림.
    res.end();
});


server.listen(port, homePage, ()=>{

    console.log(`Server running at http://${homePage}:${port}/`);
});