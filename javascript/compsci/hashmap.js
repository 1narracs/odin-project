// import LinkedList from "./linked-list.js";

class HashMap {
  constructor(size = 16) {
    this.buckets = Array.from({ length: size }, () => []);
    this.loadFactor = 0.75;
    this.size = size;
  }
  // Use the following snippet whenever you access a bucket through an index.
  // We want to throw an error if we try to access an out of bound index:
  // if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bound");
  // }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 97;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.size;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];

    for (let entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }
    bucket.push({ key, value });

    if (this.length() > this.size * this.loadFactor) {
      this.grow();
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    for (let entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return null;
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];
    for (let entry of bucket) {
      if (entry.key === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    if (this.has(key)) {
      let bucket = this.buckets[this.hash(key)];
      bucket = bucket.filter((entry) => {
        return entry.key != key;
      });
      this.buckets[index] = bucket;
    }

    return false;
  }

  length() {
    return this.buckets.flat().length;
  }

  grow() {
    console.log("growing buckets...");
    this.size *= 2;
    const entries = this.entries();
    this.clear();

    for (let entry of entries) {
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.buckets = Array.from({ length: this.size }, () => []);
  }

  keys() {
    return this.buckets.flat().map((entry) => entry.key);
  }

  entries() {
    return this.buckets.flat().map((entry) => [entry.key, entry.value]);
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      console.log(`${i}: `);
      this.buckets[i].map((entry) =>
        console.log(`${entry.key}, ${entry.value}`)
      );
    }
  }
}
const test = new HashMap();
test.set("apple", "red");
test.set("apple", "green");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("flamingo", "pink");
test.print();
console.log(`Get hat colour: ${test.get("hat")}`);
console.log(`Has snake: ${test.has("snake")}`);
console.log(`Has flamingo: ${test.has("flamingo")}`);
