/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (!this.head) {
      return null;
    }

    let removedNode;

    if (!this.head.next) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = null;
      this.tail = current;
    }

    this.length--;

    return removedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    }
    let removedNode;
    if (!this.head.next) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;

    return removedNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.size) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let removedNode;

    if (idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = current.next.next;
      if (idx === this.length - 1) {
        this.tail = current;
      }
    }

    this.length--;

    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }

    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length
  }
}

module.exports = LinkedList;
