var assert = require('assert');
// === 
var x = {a: 
     {n:0}
};
var y = {
    a: 
    {n: '0'}
};
assert.deepStrictEqual(x, y, "x not equal y !!!");