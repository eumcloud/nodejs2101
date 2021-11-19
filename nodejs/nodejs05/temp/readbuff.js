const fs = require('fs');
const buf = Buffer.alloc(1024);

console.log("Open!!!!!!!!!!!!");

let path = "./"
let itfile = "input.txt";
let cpfile = "copy.txt";

fs.open(path+itfile, "r+", (err, fd)=>{
   if(err) throw err; console.log("file Opend!");
    
    fs.stat(path+ itfile, (err, stats)=>{
        if(err) throw err; console.log("stats ready");
        console.log(stats.size);
        
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes)=>{
           if(err) throw err; console.log("readed file");

           if(bytes> 0){
               // console.log(buf.slice(0, bytes).toString());
               console.log(buf.slice(0, bytes));
                       } 
        });
        
    fs.close(fd, (err)=>{ if(err)throw err;})
    });console.log(path+itfile + " is closed");
});