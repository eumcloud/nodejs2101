const app = require("./app");
const port = 3000;
const host = "127.0.0.1";

app.listen(port, ()=>{
    console.log(`mini app is running -- ${host}:${port}`);
});