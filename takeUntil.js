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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      return results;
    } else {
      results.push(item);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]
);