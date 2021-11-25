let path = "./";
let fileName = "input"
let fileExtends = ".txt";
let sfd = path+fileName+fileExtends;
let readType = "r+";
// const fs = require('fs');
// const bufSize = 1024;
// const buf = Buffer.alloc(bufSize);


        

class cpTemp{
    constructor(fileName, targetPath){
        const fs = require('fs');
        const bufSize = 1024;
        const buf = Buffer.alloc(bufSize);

        this.fileName = fileName;
        this.path = "./";
        this.textExtends = ".txt";
        
        let readType = "r+";
        this.readType = readType;
        this.originfile = this.path + fileName + this.textExtends;
        let date = new Date(); 
        this.targetPath = "../temp/";
        date = "_"+date.getFullYear+"_"+date.getMonth+"_"+date.getDay+"_"+date.getHours+"_"+date.getSeconds;
        this.cpfile = fileName + date;
        
        this.bufSize = 1024;
        this.pos = 0;
    }

    cp(){
        console.log("where 1");
        fs.open(sfd, readType, (err, fd)=>{
            if(err) console.error(err);console.log("file is Opened");
            fs.stat(this.fileName, (err, stats)=>{
                let size = stats.size;
                console.log(size);    
                let position = this.pos;
            });
            fs.openSync(this.targetPath+this.cpfile+this.date, readType, (err, wfd)=>{ if(err) console.error(err);
                console.log("do of openSyn..!")
                fs.write(wfd, buf, 0, buf.length, position, (err, data)=>{ if(err) console.error(err);
                    console.log("do of openSyn..!")
                    position += this.bufSize;
                    console.log("position : "+ position);
                    size -= this.bufSize;
                    console.log("left size : "+ size);
                });
            });
            fs.close(sfd, (err)=>{ if(err) console.error(err);});
        })
    }

}



// console.log("lets do it!");
// fs.open(path+fileName+fileExtends, readType, (err, fd)=>{ if(err) return console.error(err);
//     console.log(path+fileName+fileExtends + "___is_opened");
//     let position = 0;
//     fs.stat(path+fileName+fileExtends, (err, stats)=>{
//         let size = stats.size;
//         console.log("file size : "+ size);
    
//     while(size>0){
//         let bufexecute = 8;
//     fs.writeSync(fd, buf, 0, bufexecute, position, (err, data)=>{ if(err) return console.error(err);
//         console.log(fileName + "___is_read");

//         position += bufexecute;
//         console.log("position : "+position);
//         size -= position;
//         console.log("left buffer : " + size);
//     });
//     }});
//     fs.close(fd, (err)=>{ if(err) console.error(err);
//         console.log(fileName + "__is_closed");
//     });

    
// });