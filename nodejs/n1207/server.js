const app = require("./app");
const host = "127.0.0.1";
const port = 3000;

app.listen(port, ()=>{
    console.log(`app is running ${host}:${port}`);
});
