const fs = require("fs");
const bufSize = 1024;
const buf1 = Buffer.alloc(bufSize);

let fileName = "vid", f_extends = ".mp4";
let readType = "r+", copyType = "w+";
let path = "./", targetPath = "../temp/";
let d = new Date(); d = "_"+d.getTime();
let copyFile = targetPath + fileName + d;
fileName =fileName+ f_extends, copyFile += f_extends;
console.log(fileName+"\n"+copyFile+"\n=================");
let size, position = 0;


fs.readdir("./", (err, files)=>{ 
    if(err) console.error(err);
    files.forEach((file)=>{
        if(fileName ==="vid.mp4"){
         fs.stat(fileName, (err, stats)=>{
            size = stats.size; 
            console.log(size);
         });
         fs.open(fileName, readType, (err, rfd)=>{ 
             if(err) return console.error(err);
             console.log(fileName+"__is Opened");
             fs.read(rfd, buf1, 0, bufSize, position, (err, data)=>{
                 
                 console.log(buf1);
                 console.log(buf1.toString());
             });
              position += bufSize;
              size -= bufSize;                                    
              console.log("position : "+position+", size : "+size);
             
             fs.close(rfd, (err)=>{ console.log(fileName + "__is Closed")});
         }); 
        }
    });
});

