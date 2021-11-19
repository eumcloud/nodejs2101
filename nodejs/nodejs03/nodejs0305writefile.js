const fs = require('fs');

console.log("Write file!!!");
//sync는 특별한 이유있지 않으면 쓰지 않음
fs.writeFile('input.txt', "This is file writing test in nodejs!!!", function(err){
    if(err) return console.error(err);
    
    console.log("Data written Success!!!");
    console.log("Read new File data");
    
    fs.readFile("input.txt", (err, data/*,()=>{} 사용가능*/)=>{

        if(err) return console.log(err);
        console.log("Async file reading : " + data.toString());
    });
})
// 있는 경우에는 덮어쓴다. 주의!!