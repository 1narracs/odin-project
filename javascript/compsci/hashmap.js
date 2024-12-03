import LinkedList from "./linked-list.js";

class HashMap {
  constructor() {
    this.BASE_CAPACITY = 16;
    this.buckets = Array.from(
      { length: this.BASE_CAPACITY },
      () => new LinkedList()
    );
    this.loadFactor = 0.75;
    this.capacity = this.buckets.length;
  }
  // Use the following snippet whenever you access a bucket through an index.
  // We want to throw an error if we try to access an out of bound index:
  // if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bound");
  // }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    // handle same key - overwrite value
    // handle collision
    // console.log(`bucket num: #${this.hash(key)}`);
    const bucket = this.buckets[this.hash(key)];

    bucket.append(value);
  }

  resize() {}

  print() {
    for (let i = 0; i < this.BASE_CAPACITY; i++) {
      console.log(`${i}: ${this.buckets[i]}`);
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
test.print();
