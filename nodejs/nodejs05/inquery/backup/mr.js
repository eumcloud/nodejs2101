const fs = require('fs');
const buf = Buffer.alloc(1024);

let fileName = "./input.txt";
let readType = "r+";
fs.open(fileName, readType, (err, rfd)=>{
   if(err) return console.error(err);
    console.log("opened");
    
    fs.stat(fileName, (err, stat)=>{
        if(err) return console.error(err); console.log("stat ok ")
        
        console.log(stat.size);
        console.log(rfd);
        let size = stat.size;
        let position = 0;
        fs.read(rfd, buf, 0, buf.length, position, (err, data, buffer)=>{
           if(err) return console.error(err); console.log("read only")
            position += 1024;
            console.log(position);
        });
    });
    
    fs.close(rfd, (err)=>{
        if(err) return console.error(err);
        console.log("__file is closed");
    });
} );