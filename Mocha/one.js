//creates stack of functions and calls them in order
function city(){
    streets();
    console.log("inside city");
}

function streets(){
    homes();
    console.log("inside streets");
}

function homes(){
    rooms();
    console.log("inside home");
}

function rooms(){
    console.log("inside rooms");
}

city();