const fs = require('fs');
const buf = Buffer.alloc(2048);
const funcs = require('./expm');


console.log("실행전");
fs.open('expm.js', 'r+', (err, fd)=>{
    console.log("파일열기 성공..\n");
    
    console.log("파일 읽기 실행");
    
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, bf)=>{
            if(err) return console.error(err);
            
            console.log("파일 읽음");
            if(bytes > 0) console.log(buf.slice(0,bytes).toString());
            console.log(funcs.gugu());        
        });
    
        fs.close(fd, (err)=>{
            if(err) return console.log(err);
            console.log("닫음");
        });
        
    
});
