const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (nums) {
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function (nums) {
  let total = 1;
  for (i = 0; i < nums.length; i++) {
    total *= nums[i];
  }
  return total;
};

const power = function (base, power) {
  let total = 1;
  for (i = 0; i < power; i++) {
    total *= base;
  }
  return total;
};

const factorial = function (n) {
  if (n === 0) return 1;

  return n * factorial(n - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
