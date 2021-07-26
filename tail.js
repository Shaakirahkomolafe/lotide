const assertEqual = require('./assertEqual');



const tail = function(array) {
  let num = [];
  array.shift();
  num = array;
  
  return num;
};

module.exports = tail;
