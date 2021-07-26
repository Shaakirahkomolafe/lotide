const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(` 🔴🔴🔴 Assertion failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function(allString) {
  let results = {};
  for (let letter of allString) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
      console.log(letter);
    }
  }
  return results;
};
console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;