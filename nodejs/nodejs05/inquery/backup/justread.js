const fs = require('fs');
const buf = Buffer.alloc(1024);

let fileName = "input.txt";
console.log("1");
fs.openSync(fileName, "r+", (err, fd)=>{
    console.log("open");
    if(err) console.error(err);
   
    let pos = 0;
    let uselength =8;
    
    while(pos<336){
    fs.read(fd, buf, 0, uselength, pos, (err, bytes)=>{
       console.log(bytes); 
       
       console.log(buf.toString());
        pos += 8;
    });console.log("pos : "+ pos);
    }
    
});