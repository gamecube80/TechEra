var fs = require("fs");


fs.readFile('./Mocha/a.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Async read " + data.toString());
})

var dataLoaded = fs.readFileSync("./Mocha/a.txt");

console.log("Sync read " + dataLoaded.toString());
console.log("Test done");