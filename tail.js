const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(` 🔴🔴🔴 Assertion failed : ${actual} !== ${expected}`);
  }
};
 
const tail = function(array) {
  let num = [];
  for (i = 0; i < array.length; i++) {
    return array.shift();
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!