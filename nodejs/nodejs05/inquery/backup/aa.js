const fs = require("fs");
var buf = Buffer.alloc(1024);

let path = "./"; //원본파일경로
let fileName = "input.txt"; //원본파일명
let readType = "r+"; //파일 읽기타입

let targetPath = "./temp/"; //저장경로
let cpfileName = fileName; //저장할 파일이름
let cpType = "w+"; //쓰기타입
fs.readdir(path, (err,files)=>{
    
    files.forEach((file)=>{
        if(fileName == file) console.log(file);
        
    fs.open(fileName, readType, (err, rfd)=>{
    if(err) return console.error(err);
    
        fs.stat(fileName, (err, stats)=>{
           console.log(stats.size);
             fs.read(rfd, buf, 0, buf.length, 0, (err, bytes, bf)=>{ 
                    if(err) return console.error(err);
                    fs.open(targetPath + cpfileName, cpType, (err, wfd)=>{
                        
                    let position = 0;
                    let size = stats.size;
                    while(position<size){
                    fs.write(wfd, buf, 0, buf.length, position, (err, data)=>{
                       if(err) console.error(err);   
                            });
                            position += buf.length;
                            console.log(position+"%");
                        }
                        fs.close(wfd, (err)=>{
                            if(err) console.error(err);console.log("cpfile is Closed..");
                        });
                    });
                });
            });
            fs.close(rfd, (err)=>{
                if(err) return console.log(err);
                console.log(fileName +" file closed success!!!");
            });
        });  
    });
});

