var buf1 = Buffer.from('abcdefghijklmn');
var buf2 = Buffer.from('HellowWorld');

buf2.copy(buf1, 2);

// console.log(buf1.toString());//buffer의 binary데이터만 사용했지만, toString으로 문자열로 변경

let b3 = buf2.copy(buf1, 2, 0, 5); //
console.log(buf1);
console.log(buf1.toString());