const http = require("http");

//Option to be used by requst
var option = {
    host: "localhost",
    port: "3123",
    path: "/index.html"
}
var callback = (response)=>{
    var body = "";
    response.on("data", function(data){//.on() 이라는 이벤트는 별도공부
          body += data;              
                });
    response.on('end', ()=>{
        console.log(body);
    });
}

var req = http.request(option, callback);
req.end();