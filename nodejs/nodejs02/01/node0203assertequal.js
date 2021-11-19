var assert = require("assert");

assert.equal(50, 50); //OK
assert.equal(50, "50"); //OK
assert.equal(50, 70, "-----여기부터----Each number is not equal------입니다--"); // Error