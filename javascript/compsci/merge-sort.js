const testArray = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

console.log(testArray);

function merge(l, r) {
  let array = [];

  while (l.length && r.length) {
    l[0] < r[0] ? array.push(l.shift()) : array.push(r.shift());
  }

  return [...array, ...l, ...r];
}

function mergeSort(array) {
  if (array.length === 1) return array;
  let l = array.slice(0, array.length / 2);
  let r = array.slice(array.length / 2);

  return merge(mergeSort(l), mergeSort(r));
}

console.log(mergeSort(testArray));
