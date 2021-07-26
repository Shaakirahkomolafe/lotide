const assertArraysEqual = require('../assertEqualArrays');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(["Bob", "Peter", "Hank", 100, "Tom", "Lester"]), ["Hank", 100]);
assertArraysEqual(middle([1, 1, 1]), [1]);
assertArraysEqual(middle([2, 1]), []);