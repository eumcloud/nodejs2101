var buf1 = Buffer.from('abcdefghijklmn');
var buf2 = Buffer.from('HellowWorld');

// buf2.copy(buf1, 2);

buf1.write("hello world", 2)

console.log(buf1);
console.log(buf1.toString());