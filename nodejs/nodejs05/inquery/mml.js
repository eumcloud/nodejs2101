const fs = require("fs");
const buf = Buffer.alloc(1024);

let originfileName = "input.txt";
let orReadType = "r+";
let PathOfTarget = "../temp/";
let d = new Date(); d = "_"+d.getTime();
let cpfileName = originfileName +d+".txt";
let cpReadType = "w";
console.log(cpfileName);

fs.open(originfileName, orReadType, (err, rfd)=>{
   if(err) throw err; console.log(originfileName + "_is_Opened");

    fs.stat(originfileName, (err, stats)=>{
        if(err) throw err; console.log("stats Ready");
        console.log(stats.size);
        let size = stats.size;
        fs.open(PathOfTarget+cpfileName, cpReadType, (err, wfd)=>{
            fs.read(wfd, buf, 0, 8, 0, (err, bytes)=>{
                if(err) throw err; console.log("write Somes..");
                console.log(bytes.toString());
            });
            
            
            
            fs.close(wfd, (err)=>{
               if(err) throw err; console.log(cpfileName+"_is_closed") ;
            });
        });
    });
    
    
    
    fs.close(rfd, (err)=>{
        if(err) throw err; console.log(originfileName+ "_is_closed");
    })
});

