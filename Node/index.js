const logger = require('./logger');

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (eventAvg) =>{
    console.log("NEDLOP", eventAvg)
});

emitter.emit("messageLogged", {id: 1, url: "http://"});
