console.log("Welcome");

function waitForTime(sec){
    let start = now = Date.now();
    while(now - start <(sec*1000)){
        now = Date.now();
    }
}

waitForTime(2);
console.log("Waited 2 seconds");
waitForTime(5);
console.log("Waited 5 seconds");
waitForTime(1);
console.log("Bye");