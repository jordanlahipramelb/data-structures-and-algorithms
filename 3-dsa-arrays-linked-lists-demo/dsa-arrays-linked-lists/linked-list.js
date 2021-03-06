/** //* Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** //* LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** //! getNode(idx) retrieve node at idx. */

  getNode(idx) {
    let current = this.head;
    let count = 0;

    // traverse through list
    while (current !== null && count != idx) {
      // count increases with each node while it loops
      // stops when the count does not equal the idx
      count += 1;
      current = current.next;
    }

    return current;
  }

  /** //! push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length += 1;
  }

  /** //! unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      // if list is empty
      this.head = newNode;
    } else {
      // set the next property to the head since newNode is now head
      newNode.next = this.head;

      // head becomes newNode
      this.head = newNode;
    }

    // if list is empty, the tail and head are the same
    if (this.length === 0) {
      this.tail = this.head;
    }

    this.length += 1;
  }

  /** //! pop(): return & remove last item. */

  pop() {
    // retrieve last index which is the length minus 1
    return this.removeAt(this.length - 1);
  }

  /** //! shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** //! getAt(idx): get val at idx. */

  getAt(idx) {
    // if index does not exist
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // retrieve the value of node by retrieving the node through getNode
    let nodeVal = this.getNode(idx).val;

    return nodeVal;
  }

  /** //! setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if index does not exist
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // retrieve last node via idx
    let current = this.getNode(idx);

    // set current val to val
    current.val = val;
  }

  /** //! insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if index does not exist
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // use unshift to insert value to beginning
    if (idx === 0) return this.unshift(val);
    // use push to insert value to last index
    if (idx === this.length) return this.push(val);

    // get the node before it
    let prev = this.getNode(idx - 1);

    /** Setup new Node */
    // create Node withj val
    let newNode = new Node(val);
    // set the next property to thje next property of prev node
    newNode.next = prev.next;
    // next property of prev then becomes newNode
    prev.next = newNode;

    this.length += 1;
  }

  /** //! removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // if index does not exist
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    /** if removing first item */

    if (idx === 0) {
      let val = this.head.val;

      // re set the head to next property of head (next Node)
      this.head = this.head.next;

      // decrease length due to removal
      this.length -= 1;

      // if only 1 Node, the tail is the head
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    // retrieve node that comes before idx
    let prev = this.getNode(idx - 1);

    /** remove tail (last index) */

    if (idx === this.length - 1) {
      // retrieve the val of the last idx node
      let val = prev.next.val;

      // set the prev node next to null because we are removing it
      prev.next = null;

      // tail becomes prev
      this.tail = prev;
      // length decreases by 1 due to removal
      this.length -= 1;

      // val of removing node is returned
      return val;
    }

    /** remove middle */

    // retrieve the val of the prev next node val, which is the current val
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** //! average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    // start at 0
    let total = 0;
    // set head to current in order to start loop from there
    let current = this.head;

    // loop starting from current
    while (current) {
      // add the val of each node to total
      total += current.val;
      // this helps move to the next node
      current = current.next;
    }

    // obtain average via total divided by length
    return total / this.length;
  }
}

module.exports = LinkedList;
