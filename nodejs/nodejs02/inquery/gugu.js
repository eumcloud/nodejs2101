
// Q. 기본 구구단을 node에서 터미널 콘솔에 찍을 수 있는가?
// 가로 세로 찍기

let gugu ="";

function gugudan(){
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
    }console.log(gugu);


gugudan();


// Q. 버퍼로 구구단?  ------> 연산은 메모리가, 오브젝트로 운영하면 메모리 
// Q. ASCII코드로 할 수 있는가? nend  ram

// 배열로 구구단