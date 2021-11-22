const fs = require("fs"); // C언어 대비, 'byte' "bytes" , 예를들어 'a', "일"

// var readerStream = fs.createReadStream("input.txt");
// var writeStream = fs.createWriteStream("output.txt");
var readerStream = fs.createReadStream("metallica_seattle.mp4");
var writeStream = fs.createWriteStream("seattle.mp4");



readerStream.pipe(writeStream);

console.log("write Pipe Stream is Finished!!")