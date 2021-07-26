const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed : ${actual} === ${expected}`);
  } else {
    console.log(` 🔴🔴🔴 Assertion failed : ${actual} !== ${expected}`);
  }
};
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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    let allMatch = true;
    for (let key of Object.keys(object1)) {
      let currentKey = key;
      let currentMatch = false;
      for (let otherKey of Object.keys(object2)) {
        if (Array.isArray(object1[currentKey]) && Array.isArray(object2[otherKey]) && eqArrays(object1[currentKey], object2[otherKey])) {
          currentMatch = true;
        }
        if (currentKey === otherKey && object1[currentKey] === object2[currentKey]) {
          currentMatch = true;
        }
      }
      if (currentMatch === false) {
        allMatch = false;
      }
    }
    return allMatch;
  }
};
  
const ab = { ocean: "Pacific", a: "1", b: "2"};
const ba = { b: "2", a: "1", ocean: "Pacific"};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false); // => false

const bob = { hat: "Red", hair: "Black", kids: ["Susie", "Lisa"]};
const jim = { kids: ["Susie", "Lisa"], hat: "Red", hair: "Black"};
assertEqual(eqObjects(bob, jim), true);

module.exports = eqObjects;