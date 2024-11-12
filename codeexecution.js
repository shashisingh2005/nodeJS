const fs = require("fs");

console.log("file execution startted");

setTimeout( () => {
    console.log("Set Timeout is executed");
},0);

setImmediate( () => {
    console.log("set Immediate executed");
});

process.nextTick( () => {
    console.log("Nexttick is executed");
    Promise.resolve().then( () => {
        console.log("Promise 3rd executed");
    });
});

Promise.resolve("First Promise executed").then(console.log).then(() => {
    Promise.resolve().then( () => {
        console.log("Inner Second Promise is executed");
    });
    console.log("Forth execution");
});

Promise.resolve().then( () => {
    console.log("Second Promise is executed");
});

fs.readFile("./fisrtfile.txt", "utf-8", () => {
    console.log("File reading is completed");
});


console.log("file execution end");