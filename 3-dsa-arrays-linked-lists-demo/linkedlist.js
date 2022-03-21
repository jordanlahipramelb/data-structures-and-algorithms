/** Node class for item in linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// end

/** LinkedList class, keeping track of head and tail. 
 * 
Things you might want to do
  - Print each node
  - Find a node by its data
  - Append to end
  - Insert at specific position
  - Remove a node
*/

/** Runtime of Linked Lists
Going to “next” item
    O(1)
Going to item by arbitrary index (you have to traverse)
    O(n)
Searching for value (you have to traverse)
    O(n)
General insertion or deletion (you have to traverse)
    O(n)
Adding to start
    O(1)
Appending to end
    O(1) if know tail; O(n) if don’t
Deleting at start
    O(1) */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    //    used so we know the end of the list, that way we don't have to traverse all the time
  }

  /** push(val): add node w/val to end of list. */

  push(val) {
    // create new Node with new value
    let newNode = new Node(val);

    // if there's no head, then the newNode is the head
    if (this.head === null) this.head = newNode;
    // if there is a tail, newNode is the tail via setting the next property of tail to newNode
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
  }
  // end

  /** print(): traverse & console.log each item. */

  print() {
    // start with head (first Node)
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
  // end

  /** find(val): is val in list? */

  find(val) {
    // start with head (first Node)
    let current = this.head;

    // traverse list with loop
    while (current !== null) {
      // if we find that value, return true
      if (current.val === val) return true;
      // otherwise, we set the currentNode to currentNode.next
      current = current.next;
    }
    // false if not found
    return false;
  }
  // end
}

/* TEST CODE */

let ll = new LinkedList(); // list is empty

ll.push("apple"); // this would be the head and the tail
ll.push("berry"); // apple is head, berry is tail
ll.push("cherry"); // apple is head, cherry is tail

ll.print();

if (ll.find("berry")) {
  console.log("Found berry");
}

if (ll.find("durian")) {
  console.log("Found durian");
}

/**
{
    "val": "apple",
    "next": {
        "val": "berry",
        "next": {
            "val": "cherry",
            "next": null
        }
    }
}
 */
