var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');

// static Function을 만드는 이유 (모듈명 안에 사용하기위해)
var x = Buffer.compare(buf1, buf2);
            //같으면 0을 찍음
console.log(x); 

var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var x = Buffer.compare(buf1, buf2);
console.log(x);//buffer상에서 좌기준 우값의 차이값이 -1 나온다.

var x = Buffer.compare(buf2, buf1); //순서를 바꿔보면, 1나온다.
console.log(x);


//ps 문자열에서도 이런 language가 있음



//*************** 좀더 응용 ******************//

var buf1 = Buffer.from('b');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
//버퍼 sorting

var arr = [buf1, buf2, buf3];  //data chunk
console.log(arr); 
console.log("--------------")
console.log(arr.sort(Buffer.compare)); //sorting해줌