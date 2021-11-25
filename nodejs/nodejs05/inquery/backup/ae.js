const fs = require('fs');
const bufSize = 8;
const buf = Buffer.alloc(bufSize);

let fileName = "./input.txt";
let readType = "r+", copyType="w+";
let d = new Date(); 
d = "_"+d.getFullYear()+"_"+d.getDate()+"_"+d.getTime();
let copyfileName = "input.txt" + d + ".txt";

