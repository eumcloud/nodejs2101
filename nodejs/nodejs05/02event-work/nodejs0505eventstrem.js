const events = require('events');
const eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log("I hear a scream!!");//func script

}
eventEmitter.on("scream", myEventHandler);//regist
eventEmitter.emit("scream");//trigger