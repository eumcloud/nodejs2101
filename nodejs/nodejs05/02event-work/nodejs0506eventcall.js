const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("connection success!!");

    
    eventEmitter.emit("data_recieved");
};
eventEmitter.on("connection", connectHandler); //이벤트핸들러를 등록

eventEmitter.on("data_recieved", function(){
    console.log("data_recieved success!!!")
});

eventEmitter.emit("connection");
console.log("Program finished!!!!");

