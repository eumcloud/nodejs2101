const fs = require('fs');
const memory = 1024;
const buf = Buffer.alloc(memory);

let date = new Date();
date = date.getDate() + date.getDay() + date.getMinutes(); //저장시간
let path = "./temp/"; //경로
let originfileName = "input.txt"; //원본파일
let copyfileName = "input_"+date+".txt"; //복사할 파일 이름
let originreadType = "r+"; // 열기타입
let copyType = "w"; // 열기타입
let pos = 0; //진행여부
let size = 0; //size 운영

fs.open(originfileName, originreadType, (err, rfd)=>{
    console.log("execute 1");
    fs.stat(originfileName , (err, stats)=>{
        if(err) throw err;
         console.log("execute 2");
         console.log(stats.size);
         fs.open(path+ copyfileName, copyType, (err, wfd)=>{
         while(pos>stats.size){
            fs.read(rfd, buf, 0, buf.length, pos,(err)=>{
                    if(err) throw err; console.log("execute 3");
                    fs.read(wfd, buf, pos, pos+8, (err, bytes)=>{
                        console.log("execute 4");
                        if(bytes > 0) {console.log(buf.slice(0, bytes).toString());}
                    fs.close(wfd, (err)=>{if(err)throw err; console.log("*")});
                    });
                });
            };
            pos += 8;
           
        });
    fs.close(rfd, (err)=>{
        if(err)throw err; 
        console.log(originfileName+ "__is closed");
    });
    }); 
});
    