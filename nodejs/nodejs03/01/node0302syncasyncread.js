var fs = require('fs');
var data = fs.readFile('input.txt', (err, data)=>{
    if(err) return console.error(err);
    
    console.log("Asyncronous read : " + data.toString());
});

// Blocking 의도한 코드 (readFile + Sync)
var fs = require('fs');
var data = fs.readFileSync('input.txt'); // --  input.txt에 일련의 내용 기입됨

console.log(data.toString());  // -- data 출력
console.log("Program Ended"); // -- 코드진행 여부 체크용log (log전후에서 에러체크)

/* input.txt 내용 : 
Tutorials Point is giving self learning content \n
to teach the world in simple and easy way!!!!!
Program Ended ----------파일 읽기가 끝난 후에야 출력됨.
*/
console.log("Finished program!!!");
                           