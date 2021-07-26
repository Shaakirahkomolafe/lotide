const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPosition');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertObjectsEqual = require('./assertObjectsEqual');
const map = require('./map');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  countOnly,
  countLetters,
  letterPositions,
  takeUntil,
  without,
  assertObjectsEqual,
  map
};
