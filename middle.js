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

const middle = function(middleNumber) {
  let num = [];
  if (middleNumber.length < 3) {
    return num;
  }
  const middleIndex = (middleNumber.length - 1) / 2;
  //If there are an even number of elements, return both middle elements
  if (middleNumber.length % 2 === 0) {
    let mid1 = Math.floor(middleIndex);
    let mid2 = Math.round(middleIndex);
    num.push(middleNumber[mid1], middleNumber[mid2]);
  } else {
  // Odd: just the middle element.
    num.push(middleNumber[middleIndex]);
  }
  return num;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(["Bob", "Peter", "Hank", 100, "Tom", "Lester"]), ["Hank", 100]);
assertArraysEqual(middle([1, 1, 1]), [1]);
assertArraysEqual(middle([2, 1]), []);
