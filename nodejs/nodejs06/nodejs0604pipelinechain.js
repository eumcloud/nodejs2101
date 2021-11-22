var fs = require("fs");
var zlib = require("zlib");//오픈소스 압축 라이브러리

fs.createReadStream("input.txt")
    .pipe(zlib.createGzip())//Gzip이라는 압축 알고리즘이 있음.
    .pipe(fs.createWriteStream("input.txt.gz"));

console.log("Finished multiple pipeline zlib!!!");