const fs = require('fs');
const buf = Buffer.alloc(1024);
let originfile = "./input.txt";
let target = "metallica_seattle.mp4";
let pos = 0;
let filesize = 0;
fs.open(originfile, "w", (err, rfd)=>{
    if(err) return console.error(err);

    console.log("Read Open");
    fs.stat(rfd, (err, stat)=>{
        if(err) return console.error(err);
        
        // fs.readFile(originfile, )
        console.log("stats-----");
        // console.log(stat);
        console.log(stat.size);
        
       
        
        let size = stat.size;
        while(true){
        fs.readFile(rfd, buf, 0, buf.length, 0, ()=>{
            if(err) return console.error(err);
            //버퍼로 슬라이스해서 파일에 계속써서
            // 사이즈 끝까지 채우면 종료
            
            pos += 1024;
            size -= 1024;


            console.log("*");
            if(size = 0) {break;}
        });
        }
    });
    fs.close()
    
    
    fs.readFile(temp, (err, data)=>{
        if(err) return console.error(err);
        console.log("File reading : " + data.toString());
        console.log(temp);



        // let i=0;
        // while(true){

        //     pos += 1024;
        //     size -= bytes;
        //     if(){break;}
        // }
    });
});