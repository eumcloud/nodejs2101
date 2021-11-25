const fs = require("fs");

let zlib = require("zlib");
let sourceDir = "./source";
let targetPath = "./temp/";


fs.readdir(sourceDir, (err, files)=>{
    fs.mkdirSync(targetPath);
    files.forEach((file)=>{
        console.log(file);
        
        fs.createReadStream(file)
          .pipe(fs.createWriteStream(targetPath + file));
    });
    fs.createReadStream(targetPath)
       .pipe(zlib.createGzip())
       .pipe(fs.createWriteStream(sourceDir+".gz"));
    console.log("Finished");
});


