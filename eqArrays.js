const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(` 🔴🔴🔴 Assertion failed : ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrrayTwo) {
  if (arrayOne === arrrayTwo) {
    console.log(true);
  } else {
    console.log(false);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) 
eqArrays([1, 2, 3], [3, 2, 1])