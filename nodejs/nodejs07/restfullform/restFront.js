async function getUser(){

    try{
        const res = await axios.get("/users");
        const users = res.data;
        const list = document.getElementById("userlist");
        list.innerHTML = "";

        Object.keys(users).map(function(key){
            const userDiv = document.createElement("div");
            const span = document.createElement("span");
            span.textContent = users[key];
            const edit = document.createElement("button");
            edit.textContent = "Edit";
            edit.addEventListener("click", async()=>{
                const name = prompt("Input change name");
                if(!name) {
                    return alert("You must input name");
                }
                try{
                    await axios.put("/user",{name});
                } catch{
                    console.error(err);
                }
            });
        });
        const remove = document.createElement("Button");
        remove.textContent = "Delete"
        remove.addEventListener("click", async()=>{
            try{
                await axios.delete("/user/" + key);
                getUser();
            } catch(err){
                console.error(err);
            }
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
        console.log(res.data);
    }catch(err){
        console.error(err);
    }
}

window.onload = getUser; //Screen loading call getUser

//Submit execute
document.getElementById("regform").addEventListener("submit", async(e)=>{
    e.preventDefault();
    const name = e.target.username.value;
    if(!name){
        return alert("You must input name");
    }try{
        await axios.put("/user/"+key, {name});
        getUser();
    }catch(err){
        console.error(err);
    }
    e.target.username.value="";
});