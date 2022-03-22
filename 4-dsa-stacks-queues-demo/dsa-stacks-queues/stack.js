/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null; // top of the stack
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end/top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    // temp placeholder
    let temp = this.first;
    this.first = newNode;
    this.first.next = temp;

    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error("Stack is empty.");

    let temp = this.first;

    // if there is only 1 item in stack
    if (this.first == this.last) this.last = null;

    // first becomes its next property because it is being shifted down the stack
    this.first = this.first.next;
    this.size -= 1;

    return temp.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0 || this.first === null)
      throw new Error("Stack is empty.");

    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;

    return false;
  }
}

module.exports = Stack;
