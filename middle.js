const assertArraysEqual = require('./assertEqualArrays');

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


module.exports = middle;