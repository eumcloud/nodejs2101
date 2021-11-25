const fs = require("fs");
const buf1 = Buffer.alloc(1024);

console.log("start")
fs.open("input.txt", "r+", (err, fd)=>{
    if(err) console.error(err);
    let pos = 0;
    console.log("before stat");
    fs.statSync("input.txt", (err, stats)=>{
        if(err) console.error(err);
        console.log("stats ready");
        console.log(stats.size);
       
        let size = stats.size;
        // while(pos>size){
        fs.readSync(fd, buf, 0, buf.length, pos, (err, bytes)=>{
            if(err) console.error(err);
            console.log("*");
        });
            pos += 8;
            console.log(pos);
        // }    
    });
    
    
    fs.close(fd, (err)=>{
       if(err) console.error(err);
        console.log("closed");
    });
});