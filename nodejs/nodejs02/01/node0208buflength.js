var buf = Buffer.alloc(20);
// var bufLen = Buffer.byteLength(buf); //static
var bufLen = Buffer.byteLength('buffer'); //6byte 사용한다고 출력됨.
console.log(bufLen);