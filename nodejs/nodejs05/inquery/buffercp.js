const fs = require('fs');
const buf = Buffer.alloc(1024);


let originfile = "input.txt";

let path = "../temp/";
let cpfile = path + "input.txt";
let pos = 0;
let size = 0;
// 디렉토리에서 파일찾기
// 파일찾은 파일 
// 
// 
fs.open(path + originfile, "r+", (err, fd)=>{
    if (err) throw err;
    
    fs.stat(fd, (err)=>{
       if(err) throw err; 
        console.log(stats.size);
        size = stats.size;
        fs.read(fd, buf, 0, buf.length, (err)=>{
           if(err) throw err; 
        });
    
    fs.open((err)=>{
        if (err) throw err;
       
        
        
        fs.close((err)=>{
            if (err) throw err;
            
        });
    
    });
    fs.close((err)=>{
        if (err) throw err;
    
        });
    });
});