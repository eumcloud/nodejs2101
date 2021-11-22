const fs = require("fs");

var data = "";
var readStream = fs.createReadStream("input.txt"); 
readStream.setEncoding("utf-8"); //읽을때 charset utf8

readStream.on("data", function(chunk){
    data += chunk;
});//핸들러 등록

readStream.on("end", ()=>{
    console.log("data : \n"+ data);
});

readStream.on("error" , (err)=>{
    console.log(err.stack);
});
console.log("ReadStream file read finished!!");

