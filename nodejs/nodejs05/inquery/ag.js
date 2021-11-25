const fs = require("fs");
const bufSize = 64;
const buf1 = Buffer.alloc(bufSize);

let fileName = "input.txt", path = "./";
let copyFile = fileName, targetPath = "../temp/";
let readType = "r+", copyType = "w+";
let position = 0, size = 0;

console.log("origin FileName : "+fileName);
console.log("copy FileName : "+copyFile);
console.log("==============================");

fs.readdir(path, (err, files)=>{
   files.forEach((file)=>{
       if(file === fileName){
           console.log("got it file : "+'"'+file+'"');
           fs.stat(path+fileName, (err, stats)=>{ 
               size = stats.size; 
               console.log(size);
               fs.openSync(file, readType, (err, rfd)=>{ if(err) return console.error(err);
               fs.open(targetPath + copyFile, copyType, (err, wfd)=>{if(err) return console.error(err);
                               
                  // while(size>0){                     
                      fs.read(rfd, buf1, 0, bufSize , position, (err, data)=>{if(err) return console.error(err);
                      console.log(fileName +"__is_Read");
                          fs.write(wfd, buf1, 0, bufSize, position, (err, wdata)=>{if(err) return console.error(err);
                              // console.log(targetPath + copyFile +"__is_write");
                             if(data > 0) wdata = buf1.slice(0, data); console.log(wdata);
                          });
                      if(data > 0) console.log(buf1.slice(0, data).toString());
                      });
                      position += bufSize;
                      size -= bufSize;
                      console.log("position : "+ position + ", size : " + size);
                  // }
                 });
              fs.close(rfd, (err)=>{console.log("originfile_is Closed..!!");});
               });
           });
           
       }
   });
});