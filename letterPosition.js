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
  return assertArraysEqual;
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push[i];
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(sentence.indexOf([sentence[i]]));
      }
  
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;