const sumAll = function (num1, num2) {
  let sum = 0;
  let min;
  let max;

  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  } else if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  let i = min;
  while (i <= max) {
    sum += i;
    i++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
