var fs = require("fs");

var timetaken;

fs.readFile("./Mocha/a.txt", function (er, data) {
    if (er) {
        return console.error(er);
    }
    console.log(data.toString());
});
fs.readFile("./Mocha/b.txt", function (er, data) {
    if (er) {
        return console.error(er);
    }
    console.log(data.toString());
});
console.log("bye");