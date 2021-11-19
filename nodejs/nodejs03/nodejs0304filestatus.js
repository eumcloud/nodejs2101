var fs = require('fs');

console.log("Get File information");
fs.stat("input.txt", (err, stat)=>{
    if(err) return console.error(err);
    
    console.log(stat);
    console.log("get file information success!!!");
    
    
    //stat을 써야해서 안쪽에 써야함
    console.log('isFile ? ' + stat.isFile());
    console.log('isDirectory ? ' + stat.isFile());
});


//실제사이즈는 95이지만
//윈도우는 안써도 4096단위로 데이터를 저장한다