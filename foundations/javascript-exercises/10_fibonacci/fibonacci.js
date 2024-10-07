const fibonacci = function (n) {
  const sequence = [0, 1];
  if (n < 0) return "OOPS";
  if (n == 0) return sequence[0];
  if (n == 1) return sequence[1];
  let i = 2;
  while (i <= n) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
    i++;
  }
  return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
