const fs = require('fs');

console.log("delete a delete.txt file!");
fs.unlink("delete.txt", (err)=>{ //다른 프로그램은 removefile 같은 언어를 쓰지만, 웹프로그래밍이기 때문에 unlink
    if(err) return console.error(err);
    console.log("delete.txt file deleted success!!");
});