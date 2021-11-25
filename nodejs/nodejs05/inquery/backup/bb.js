const fs = require('fs');
const sourceDir = './';
const targetDir = './temp/';
const bufSize = 2048
let buf = Buffer.alloc(bufSize);
fs.readdir(sourceDir, (err, files) => {
    if(err){ throw err; }
    files.forEach(function(file) {
        let pos = 0;
        fs.open(sourceDir + file, (err, fd) => {
            if(err){ throw err; }
            fs.stat(sourceDir + file, (err, stat) => {
                if(err){ throw err; }
                let size = stat.size;
                console.log(file, size);
                fs.open(targetDir + file, 'w', (err, fd2) =>{
                    if(err){ throw err; }
                    while(size > 0){
                        let dataBuf = fs.readSync(fd, buf, 0, bufSize, pos);
                        console.log(dataBuf, buf)
                        fs.writeSync(fd2, buf, 0, dataBuf, pos);
                        pos += dataBuf;
                        size -= dataBuf;
                    }
                })
            })
        })
    })
})