const assertEqual = require('./assertEqual');


const head = function(array) {
  let num = [];
  for (let i = 0; i < array.length; i++) {
    num = array[0];
  }
  return num;
};
module.exports = head;
