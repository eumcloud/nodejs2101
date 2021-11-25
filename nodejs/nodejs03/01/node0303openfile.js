var fs = require('fs');

//Asynchronous - Openfile
console.log("Openfile");
fs.open('input.txt', "r+", function(err,fd){
    if(err) return console.error(err);
    
    console.log("File Opened Success!!!");
})