export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      console.log(curr);
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getSize() {
    let tmp = this.head;
    let size = 0;
    while (tmp) {
      size++;
      tmp = tmp.next;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  getAt(index) {
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
      if (!tmp) return `Index [${index}] out of bounds.`;
    }
    return tmp;
  }

  pop() {
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }

  shift() {
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  }

  contains(search) {
    let curr = this.head;
    while (curr) {
      if (curr.value === search) return true;
      curr = curr.next;
    }
    return false;
  }

  find(search) {
    let curr = this.head;
    let idx = 0;
    while (curr) {
      if (curr.value === search) return idx;
      idx++;
      curr = curr.next;
    }
    return `"${search}" not found in list.`;
  }

  insertAt(value, index) {
    if (index === 0) {
      const node = new Node(value, this.head);
      this.head = node;
      return;
    }
    let i = 0;
    let curr = this.head;
    let prev = null;
    while (i < index && curr) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    const node = new Node(value, curr);
    prev.next = node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    if (index >= this.getSize()) return "Index out of bounds.";
    let i = 0;
    let curr = this.head;
    let prev = null;
    let next = null;
    while (i < index && curr) {
      prev = curr;
      curr = curr.next;
      next = curr.next;
      i++;
    }
    prev.next = next;
    curr.next = null;
  }

  toString() {
    let string = "";
    let curr = this.head;
    while (curr) {
      string += `(${curr.value})`;
      if (curr.next) string += " -> ";
      curr = curr.next;
    }
    return string;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

// // example uses class syntax - adjust as necessary
// const list = new LinkedList();
// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(list.getHead());
// console.log(list.getTail());
// console.log(list.getSize());
// console.log(list.toString());
// console.log("pop!!");
// list.pop();
// console.log(list.getSize());
// console.log(list.toString());
// console.log(list.contains("imposter"));
// console.log(list.find("imposter"));
// list.prepend("coyote");
// list.prepend("chicken");
// list.append("imposter");
// console.log(list.getSize());
// console.log(list.toString());
// console.log(list.contains("imposter"));
// console.log(list.find("imposter"));
// console.log(list.find("chicken"));
// console.log(list.toString());
// console.log(list.getSize());
// list.insertAt("lion", 0);
// console.log(list.toString());
// console.log(list.getSize());
// list.insertAt("bear", 3);
// console.log(list.toString());
// console.log(list.getSize());
// list.removeAt(0);
// console.log(list.toString());
// console.log(list.getSize());
// list.removeAt(3);
// console.log(list.toString());
// console.log(list.getSize());
// console.log(list.removeAt(7));
// console.log(list.toString());
// console.log(list.getSize());
