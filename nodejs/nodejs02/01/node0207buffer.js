/*var buf = Buffer.from('abc'); //메모리 사용
console.log(buf); //ASC코드로 출력된다 */

//var buf = Buffer.alloc(15, 'a'/*초기값 지정*/); //*****메모리 15개 이용
//console.log(buf); //15개 출력  

var buf = Buffer.allocUnsafe(15); // Unsafe는 00으로 초기화 하지 않음.
//buf.fill(10); //메모리에 10으로 채움
console.log(buf);

