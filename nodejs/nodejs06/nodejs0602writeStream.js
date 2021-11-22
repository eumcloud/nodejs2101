const fs = require("fs");

var data = "Standard Input / Output Streams Library \n Header theat defines the standard input/output stream objects";

var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, "UTF8"); 

writerStream.end();//다쓴후 꼭 입력

writerStream.on("finish", ()=>{
    console.log("Finished write file !!!");
});


writerStream.on("error", (err)=>{
    console.error(err.stack);
});

console.log("writeStream file write finished");