const assertEqual = require('./assertEqual');

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


module.exports = eqArrays;