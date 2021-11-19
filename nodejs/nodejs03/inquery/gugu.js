
exports.gugu = function gugudan(){
    let gugu ="";
    let gugurow = "";
        for(let i=2; i<10; i++){
            for(let l=1; l<10; l++){
                gugurow += i+"x"+l+"="+i * l+"\n"; 
            }gugurow += "=====================\n";
        }console.log(gugurow);
    }
    
    for(let i=2; i<10; i++){
        for(let j=1; j<10; j++){
            gugu += i + "x" + j + "=" + i * j + "\t";
            
        } gugu+= "\n";
    }