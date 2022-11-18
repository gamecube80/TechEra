var MyClass = require("../src/mochaOne.js");

var myObj = new MyClass();

var chai = require("chai");
var expect = chai.expect;

describe("Test mult", function () {
    it("Test mult method", function () {
        expect(myObj.mult(3, 17)).to.be.equal(51);
        expect(myObj.mult(5, 10)).to.be.equal(50);
        expect(myObj.mult(2, 3)).to.be.equal(6);
    });
});

describe("Test div", function () {
    it("Test div method", function () {
        expect(myObj.div(10, 5)).to.be.equal(2);
        expect(myObj.div(9, 3)).to.be.equal(9/3);
    });
});