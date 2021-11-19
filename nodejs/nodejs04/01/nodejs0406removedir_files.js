const fs = require("fs");

console.log("Remove Directory!!!");

console.log("reading directory!!");
fs.readdir('./temp/hellodir', (err, files)=>{
    // files.length> 0; filedelete 
    // files.length = 0; dirdelete
    if(err) throw err;
    files.forEach((file)=>{
        console.log(file);
        fs.unlink("./temp/hellodir/"+file, (err)=>{
           if(err) throw err; 
        });
    });
    fs.rmdir("./temp/hellodir", (err)=>{
       if(err) console.error(err);
        console.log("deleted all");
    });
});


// fs.rmdir("./temp/hellodir", (err)=>{//dir 안에 파일이 없어야 지워짐.
//     if (err) throw err;
    
//     //지우고 다시 읽어보자
//     fs.readdir('./temp/', (err,files)=>{
//         if(err) throw err;
        
//         files.forEach((file)=>{
//             console.log(file);
//         });
//     });
// });

// //$ copy ./*.txt ./tmp ==현재경로 txt파일을 ./tmp로 복사하기