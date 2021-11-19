const fs = require('fs'); 
// var buf = new Buffer(1024);//너무 예전방식 코딩이라 라이브러리 적용이 안되어있음.
var buf = Buffer.alloc(1024);

console.log("Open existing file!!!")
                    //r+ 읽기도하고 저장도 가능
fs.open('input.txt', 'r+', (err, fd)=>{
    if(err) return console.error(err);
            //무조건 return 아니고 상황에 맞게 사용할것.
    console.log("File Open Success");
    
    console.log("Reading file !!!");
    fs.read(fd, buf, 0, buf.length, 0, ()=>{
        if(err) return console.error(err);
        
        console.log("Reading file success");
        
        if(bytes > 0) console.log(buf.slice(0, bytes).toString());
    });
}); 


/******* fs 가 socket, 통신역할 가능한건 아주 유용한 기능********/