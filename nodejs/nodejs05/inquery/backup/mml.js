const fs = require("fs");
const buf = Buffer.alloc(1024);

let originfileName = "input.txt"; //원본파일
let originReadType = "r+"; //원본읽기타입
let pathOftarget = "../temp/"; //저장경로
let d = new Date(); d = "_"+d.getTime(); //저장시간 
let cpfileName = originfileName //+d+".txt"; 보류
let cpReadType = "w+";//카피파일 타입
let pos = 0;
console.log(cpfileName);


fs.open(originfileName, originReadType, (err, rfd)=>{
   if(err) return console.error(err); console.log(originfileName + "_origin_is_Opened");

    fs.stat(originfileName, (err, stats)=>{
        if(err) return console.error(err); console.log("stats Ready");
        console.log(stats.size);
        let size = stats.size;
        
        fs.open(pathOftarget + cpfileName, cpReadType, (err, wfd)=>{
            console.log("copy file is opened")
            console.log("pos start : " + pos);
                while(pos<size){
                    fs.read(wfd, buf, 0, 8, pos, (err, bytes)=>{
                        if(err) return  console.error(err); console.log("write Somes..");
                        console.log(bytes.toString());

                        console.log("*");
                        pos += 8;
                        console.log(pos+"%");
                    
                    });
                }
            fs.close(wfd, (err)=>{
               if(err) return console.error(err); console.log(cpfileName+" _newfile_is_closed") ;
                fs.close(rfd, (err)=>{
                if(err) return console.log(err);
                console.log(originfileName+ "_is_closed"); 
                console.log(pos);
            });
            });
            
        });
    });
    
});

