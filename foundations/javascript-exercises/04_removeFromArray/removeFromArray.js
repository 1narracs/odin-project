const removeFromArray = function (array, ...elemsToRemove) {
  let i = 0;
  let j = 0;

  while (i < elemsToRemove.length) {
    while (j < array.length) {
      if (array[j] === elemsToRemove[i]) {
        array.splice(j, 1);
      } else {
        j++;
      }
    }
    j = 0;
    i++;
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
