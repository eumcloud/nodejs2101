const events = require("events");
const { EventEmitter} = require("stream");
const eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("listener executed!!!");
}
var listener2 = function listener2(){
    console.log("listener2 executed!!!");
}
var listener3 = function listener3(){
    console.log("listener3 executed!!!");
}

//Bind the connection evet with listener1
eventEmitter.addListener("connection", listener1);
eventEmitter.addListener("connection", listener2);
eventEmitter.on("connection", listener3);

var eventListener = require("events").EventEmitter.listenerCount(eventEmitter, "connection");//어떤 리스너인지 아규먼트로 알려주기
console.log(eventListener + " Listener(s) listening to connection event!!!");

eventEmitter.emit("connection");

// eventEmitter.removeListener("connection", listener1); //지우기
// console.log("Listener1 will be removed!!!");
eventListener = require("events").EventEmitter.listenerCount(eventEmitter, "connection");//필요할때마다 이렇게 쓸수도있다는걸 알겠지!??
console.log(eventListener + " Listener(s) listening to connection event!!!");


console.log("Finished Program!!!");