const fs = require('fs');
var buf = Buffer.alloc(1024);

console.log("Open input.txt file!!!");

fs.open("../input.txt", "r+", function(err, fd){
    if(err) return console.error(err);
    
    console.log("input.txt open success!!!");
    console.log("truncate input.txt file after 20 bytes!!!");
    
    fs.truncate(fd, 20, (err)=>{
        if(err) return console.error(err);
        
        console.log("input.txt file truncated success!!");
        console.log("reading input.txt file!!");
        
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, dataBuf)=>{
           if(bytes > 0){
               console.log(buf.slice(0, bytes).toString());
           } 
            fs.close(fd, (err)=>{
                if(err) return console.error(err);
                console.log("input.txt file closed success!")
            });
        });
    });
    /////여기서 닫아줄 수있으나, 비동기이기 때문에 안에서 다 끝내는게 좋다.
});
