const test = require('ava');
const fizz = require("./index.js");

test('fizz', t => {
    t.is(fizz, "fizz");
});
