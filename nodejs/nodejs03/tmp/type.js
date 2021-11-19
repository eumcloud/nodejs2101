const content = " 함께라면... \n ";
const text = document.querySelector(".text")
let index = 0;
 
function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 250);