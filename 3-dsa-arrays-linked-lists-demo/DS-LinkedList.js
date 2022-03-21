/** Array Runtimes
- Retrieving by index
  O(1)  constant time, very fast
- Finding
  O(n)  linear time, slower
- General insertion
  O(n)
- General deletion
  O(n) 

  */

// ! The Node Class

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** 
A basic Node has two attributes:

val
- the information the node contains (could be string, int, instance, etc)
next
- reference to next node (for last item, this is null)
 */

const firstPage = new Node("google.com");
//    {val: "google.com", next: null}
const secondPage = new Node("reddit.com");
//    {val: "reddit.com", next: null}
const thirdPage = new Node("amazon.com");
//    {val: "amazon.com", next: null}

firstPage.next = secondPage;
//    {val: "google.com", next: Node: {val: "reddit.com", next: null}}
secondPage.next = thirdPage;
//    {val: "reddit.com", next: Node: {val: "amazon.com", next: Node: {val: "ramazon.com", next: null}}}

//  google => reddit => amazon

/** //! Smarter Node Class
Some people make a Node class which accepts optional next argument: */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Confusing, but shorter because you don't have to create your variables

const firstPage = new Node(
  "google.com",
  new Node("reddit.com", new Node("amazon.com", new Node("youtube.com")))
);
/** 
firstPage = {
    "val": "google.com",
    "next": {
        "val": "reddit.com",
        "next": {
            "val": "amazon.com",
            "next": {
                "val": "youtube.com",
                "next": null
            }
        }
    }
}
 */

/**************************** */

/** //! LinkedList Class
A Linked List is just a bunch of nodes linked sequentially.

The only attribute it must have is a reference to its first node, called the head.

Since the list starts empty, the head is initially null. */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; //used so we know the end of the list, that way we don't have to traverse all the time
  }

  /** traverse(): traverse & console.log each item. */

  traverse() {
    // start with head (first Node)
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.val);
      // update the current Node to be the current current Nodes of next Node
      currentNode = currentNode.next;
      // loop starts again and console.logs currentNode until next is null
    }
  }

  /** find(val): is val in list? */

  find(val) {
    // start with head (first Node)
    let currentNode = this.head;

    // traverse list with loop
    while (currentNode) {
      // if we find that value, return true
      if (currentNode.val === val) return true;
      // otherwise, we set the currentNode to currentNode.next
      currentNode = currentNode.next;
    }
    // false if not found
    return false;
  }

  /** append(val): add node w/val to end of list. */

  append(val) {
    const newNode = new Node(val);

    // if there's no head, then the newNode is the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // else, newNode is the tail via setting the next property of tail to newNode
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const history = new LinkedList();
// since the list starts empty, head is null
history.head = firstPage;
//  we set the head to the firstPage Node
/**
history.head
    {
    "val": "google.com",

    "next": {
        "val": "reddit.com",
        "next": {
            "val": "amazon.com",
            "next": {
                "val": "youtube.com",
                "next": null
            }
        }
    }
}

history.head.next
{
    "val": "reddit.com",

    "next": {
        "val": "amazon.com",
        "next": {
            "val": "youtube.com",
            "next": null
        }
    }
}

history.head.next.next
{
    "val": "amazon.com",

    "next": {
        "val": "youtube.com",
        "next": null
    }
}

history.head.next.next.next
{
    "val": "youtube.com",
    "next": null
}
 */

history.traverse();
/**
google.com
reddit.com
amazon.com
youtube.com
 */

const train = new LinkedList();
train.append("Engine");
train.append("Freight Car 1");
train.append("Freight Car 2");
