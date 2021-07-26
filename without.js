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

const without = (source, itemsToRemove) => {
  let filteredArray = [];

  // if eqArrays returns true, remove all elements and return an empty array
  if (eqArrays(source, itemsToRemove)) {
    return filteredArray;
  }

  // loop through source, only adding items to filteredArray if they are not present in itemsToRemove 
  for (item of source) {
    if (!(itemsToRemove.includes(item))) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

module.exports = without;