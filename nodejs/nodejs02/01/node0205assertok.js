var assert = require('assert'); 
//assert는 true, false 즉, boolean 구분
//assertok는 0도 false

assert.ok(50>70); //false일때 오류 벹어내게 하기 
assert.ok(50 === 70); //
assert.ok(50 < 70); //true일때는 무반응
assert.ok(0) // false error
assert.ok(12) // true 무반응

assert.ok(50 > 70, "result is false");
assert.ok(50 - 49); // 응용예시) 50 -50 = false, 50-49 