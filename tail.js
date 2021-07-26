const assertEqual = require('./assertEqual');



const tail = function(array) {
  let num = [];
  for (let i = 0; i < array.length; i++) {
    array.shift();
    num = array;
  }
  return num;
};

module.exports = tail;
