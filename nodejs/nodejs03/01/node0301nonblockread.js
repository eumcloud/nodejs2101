var fs = require('fs');
fs.readFile('input.txt', function(err, data){
    if(error) return console.error(err);

    console.log(data.toString());
});
console.log("Finished program");