var buf = Buffer.from('Hello, and welcome to Hell!!'/*,  ascii */);

console.log("=======.toString('utf-8')========");
console.log(buf.toString('utf-8')); //ascii 영문ok, 한글 깨질
console.log(buf.toJSON()); //{type:'', data:[]}

console.log("======.includes('welcome')========");
console.log(buf.includes('welcome')); // binary단위 색인
console.log("=======indexOf('welcome')========");
console.log(buf.indexOf('welcome')); //11 데이터의 위치 11+1번째


console.log("========.indexOf('l')===========");
console.log(buf.indexOf('l')); //2 처음 만나는 l값 위치 2+1번째
console.log(buf.lastIndexOf('l'));

console.log("========Buffer.isBuffer(buf)=======");
console.log(Buffer.isBuffer(buf));
console.log("========.length()=======");
console.log("buf length = " + buf.length);

var x = 'abc';
console.log("==========.isBuffer(x)===========");
console.log(Buffer.isBuffer(x)); //false String은 buffer와 데이터 매치가 안되서 false
// console.log(x.toJSON()); string은 안된다

console.log("========isEncoding('ascii')=========");
console.log(Buffer.isEncoding('ascii'));

// "ascii"
// "utf8"
// "utf16le"
// "ucs2"
// "base64"