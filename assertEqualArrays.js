const eqArrays = function(arrayOne, arrrayTwo) {
  if (arrayOne.length !== arrrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed : ${arr1} === ${arr2}`);
  } else {
    console.log(` 🔴🔴🔴 Assertion failed : ${arr1} !== ${arr2}`);
  }
  return assertArraysEqual
};

assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);