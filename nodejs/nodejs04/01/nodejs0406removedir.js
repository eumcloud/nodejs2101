const fs = require("fs");

console.log("Remove Directory!!!");
fs.rmdir("./temp/hellodir", (err)=>{//dir 안에 파일이 없어야 지워짐.
    if (err) throw err;
    
    //지우고 다시 읽어보자
    fs.readdir('./temp/', (err,files)=>{
        if(err) throw err;
        
        files.forEach((file)=>{
            console.log(file);
        });
    });
});

//$ copy ./*.txt ./tmp ==현재경로 txt파일을 ./tmp로 복사하기