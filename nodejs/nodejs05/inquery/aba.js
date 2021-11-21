const fs = require("fs");
const path = "./";
const targetPath = "../temp/";
const bufSize = 2048;
let buf = Buffer.alloc(bufSize);

let fileName = "vid", f_extens = ".mp4";
let d = new Date(); d = "_"+d.getFullYear()+d.getDate()+d.getTime();
let copyFile = fileName + d + f_extens;
fileName = fileName + f_extens;
let readType = "r+", copyType = "w+";
let size, position = 0;
fs.readdir(path, (err, files)=>{
   if(err) throw err;
    files.forEach(file => {
       if(file == fileName){
        fs.open(path + file, readType, (err, rfd)=>{
           fs.stat(path + file, (err, stats)=>{
               size = stats.size;
               console.log("fileName : "+file+", fileSize : "+size);
               fs.open(targetPath + copyFile, copyType, (err, wfd)=>{
                  
                  while(size>0){
                      let data = fs.readSync(rfd, buf, 0, bufSize, position);
                      console.log(data, buf);
                      fs.writeSync(wfd, buf, 0, data, position);
                      position += bufSize;
                      size -= bufSize;
                  } 
                   fs.close(wfd, (err)=>{if(err) return console.error(err);})
               });
           }); 
            if(size<0){fs.close(rfd, (err)=>{if(err) console.error(err); console.log(file + "__is Closed")});}
        });   
       }
    });
});