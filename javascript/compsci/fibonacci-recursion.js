function fibs(num) {
  if (num < 1) return [];
  if (num === 1) return [0];
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibs(0));
// console.log(fibs(1));
// console.log(fibs(2));
// console.log(fibs(3));
// console.log(fibs(8));

function fibsRec(n) {
  if (n <= 1) return [0, 1].slice(0, n);
  return n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}
console.log(fibs(34));
