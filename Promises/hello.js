const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits);

let Foo = class {
    constructor(foo, bar) {
        this.foo = foo;
        this.bar = bar;
    }
}

function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));//will output 5
  
  console.log(multiply(5));//will output 10

const foo = new Foo("foo", "bar");
console.log(foo);

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr);