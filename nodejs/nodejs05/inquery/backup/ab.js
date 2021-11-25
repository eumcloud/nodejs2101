const fs = require("fs");
const bufSize = 1024;
const buf = Buffer.alloc(bufSize);

let fileName = "input", f_extends = ".txt";
let path = "./", targetPath = "../temp/";
let readType = "r+", writeType = "w";
let d = new Date(); d = "_"+d.getTime();
let cpfileName = fileName + d + f_extends;
console.log("originfileName : " + fileName + f_extends);
console.log("copyfileName : " + cpfileName);

fileName += f_extends;
fs.readdir(path, (err, data) => { if(err) console.error(err);
   if(fileName === "input.txt"){
       fs.open(path+fileName, readType, (err, rfd)=>{ if(err) console.error(err);
          fs.stat(path+fileName, (err, stats)=>{ if(err) console.error(err);
              let size = stats.size; console.log(size);
              let position = 0;
              console.log("size : " + size);
              console.log("position : " + position + "\n===============================");
                                                
              
              fs.open(targetPath+cpfileName, writeType, (err, wfd)=>{ if(err) console.error(err);
                 
                 while(size>0){
                         fs.readSync(rfd, buf, 0, bufSize, position, (err, rdata)=>{ 
                             if(err) console.error(err); console.log(rdata.toString());
                             fs.write(wfd, rdata.toString(), (err)=>{
                                 console.log("content : " + rdata.toString());
                             });    
                         });                                            
                         position += bufSize;
                         size -= bufSize;
                         
                         // console.log("position : "+position+", size : "+size);
                 }console.log("copy Complete");
                // fs.close(wfd, (err)=>{if(err) console.error(err);console.log(cpfileName +"__is_Closed");})
               });
           });
           // fs.close(rfd, (err)=>{if(err) console.error(err); console.log(fileName +"__is_Closed"); });
        });
    }
});
           // 
   
