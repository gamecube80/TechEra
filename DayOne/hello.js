let Student = {
    first_name: "Dan",
    last_name: "Hoelzel",
    get_demo: function () {
        return (`${Student.first_name} ${Student.last_name}`)
    },
    num: {
        mobile: '1234',
        landline: '5678',
    },
    add_demo: function () {
        return (`${Student.num.mobile} ${Student.num.landline}`)
    }
}

console.log(Student.get_demo());
console.log(Student.num.landline);
console.log(Student.add_demo())

function Student1(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

let p1 = new Student1('Dan', 'Hoelzel');
let p2 = new Student1("Zach", "Colford");

console.log(p1.fname);
console.log(`${p1.fname} ${p2.lname}`);

class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getDetails() {
        return (`${this.name}`)
    }
}

let car1 = new Vehicle("Ferd");
let bike1 = new Vehicle("Lemon");

console.log(car1.name);
console.log(bike1.name);

class Model extends Vehicle {
    constructor(name, model) {
        super(name);
        this.model = model;
    }
}

let car2 = new Model("Ferd", "F-Teen Thousand");

console.log(car2.name + " " + car2.model);

function Student2(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Student2.prototype.e = "My Name";
const diva = new Student2("Dan", "Zach", "Drew", "John");
console.log(diva);
console.log(diva.e);

var x = 1;
console.log("Outside block: " + x);
{
    const x = 2;
    console.log("Inside block: " + x);
}
console.log("Outside block: " + x);

var a = function (x, y) {
    return x + y;
}

const arrow = (x, y) => x * y

console.log(arrow(2, 4)+"\n");

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum(1, 2)); // 3

let diff = (a, b) => {  // the curly brace opens a multiline function
    let result = a - b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(diff(3, 2)); // 1

let mult = (a, b) => {  // the curly brace opens a multiline function
    let result = a * b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(mult(2, 3)); // 6

let div = (a, b) => {  // the curly brace opens a multiline function
    let result = a / b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(div(6, 2)); // 3