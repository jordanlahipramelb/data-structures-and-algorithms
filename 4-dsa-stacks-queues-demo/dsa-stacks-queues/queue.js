/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    // if theres no first property, newNode is first and last
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    // but if there is a first, then the next property of last would be newNode
    this.last.next = newNode;
    //  making newNode the last property
    this.last = newNode;

    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error("Queue is empty.");

    // retrieve value of first property val
    let val = this.first.val;

    // first property re sets to its next property Node due to being removed
    this.first = this.first.next;
    this.size -= 1;

    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0 || this.first === null)
      throw new Error("Queue is empty.");

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;

    return false;
  }
}

module.exports = Queue;
