/** Trees in JS
 *
 * Stores children, nesting data, Node referencing another node
 * 
node
    - basic unit
children
    - nodes directly below a node
descendants
    - nodes below a node
parent
    - node that is directly above a node
ancestor
    - node that is above a node
root node
    - node at the top of tree
leaf node
    - node without any children

 */

// this won't work because you'll have a cap on the number of children you will have.
// you have to use an array
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/** Version 1 */

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

/** create Nodes  */

let amy = new Node("amy");
let bob = new Node("bob");
let barry = new Node("barry");
let barb = new Node("barb");

/** push children on to tree */

// amy is root node/parent of bob, barry, and barb

amy.children.push(bob);
amy.children.push(barry);
amy.children.push(barb);

/********************************* */

/** Version 2 */

class Node2 {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  //  Depth First Search (DFS); uses stack
  //   travers tree vertically, going all the way down to the root of each branch of the tree before searching the next
  //  (last thing added in is first thing visited)
  findDFS(val) {
    /**
    stack: []
    current: _______
     */

    // create stack variable array
    //   'this' refers to the element you created, whatever you call find on
    const toVisitStack = [this];

    while (toVisitStack.length) {
      // removes the LAST element of the stack and searches it, pop from the end
      const current = toVisitStack.pop();
      if (current.val === val) {
        return current;
      }

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }

  // Breadth First Search (uses queue). Highest ranking first search
  //   traverse everything on one level before moving down to the next level of children
  findBFS(val) {
    /**
    stack: []
    current: _______
     */

    // create queue variable array
    //   'this' refers to the element you created, whatever you call find on
    const toVisitQueue = [this];

    while (toVisitQueue.length) {
      // removes the FIRST element of the queue and searches it, shift from the beginning/search what's been in there the longest so far
      const current = toVisitQueue.shift();
      if (current.val === val) {
        return current;
      }

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
  }
}

/** Create nodes with parent and children */

// initialize amy node, create children into array

let amy2 = new Node2("amy", [
  new Node2("bob"),
  new Node2("barb"),
  new Node2("barry"),
]);

let htmlEl = new Node2("html", [
  new Node2("head", [new Node2("title")]),
  new Node2("body", [new Node2("ul", [new Node2("li"), new Node2("li2")])]),
]);

//            html
//      head        body
//     title            ul
//                      li li2

htmlEl.findDFS("li");
/** //! using find()

//*  is there length in toVisitStack? There is!
stack: ['html']
current:

//*  pop the thing off the stack, that thing becomes the 'current' variable to run if statement on.

stack: []
current: 'html'

//*  is it li? No it's not.
//*  now for each child of the current's children, we are gonna push them into the toVisitStack

//*  is there length in toVisitStack? There is!

stack: ['head', 'body']
current: 'html'

// * current node becomes the popped off most recently added thing in stack

stack: ['head']
current: 'body'

// * li will end up being in body, but if it is not, then the next step would be to pop off head and to traverse in there

//*  now for each child of the current's children, we are gonna push them into the toVisitStack. ie: children of body is 'ul'

stack: ['head', 'ul']
current:

// * current node becomes the popped off most recently added thing in stack

stack: ['head']
current: 'ul'

//*  now for each child of the current's children, we are gonna push them into the toVisitStack. ie: children of ul is 'li' and 'li2'

stack: ['head', 'li', 'li2']
current:

// * current node becomes the popped off most recently added thing in stack

stack: ['head', 'li']
current: 'li2'

stack: ['head', 'li']
current:

// * current node becomes the popped off most recently added thing in stack

// * current.val now matches val

stack: ['head']
current: 'li'

 */

htmlEl.findBFS("li");
/**
//*  is there length in toVisitQueue? There is!
Queue: ['html']
current:

Queue: []
current: 'html'

Queue: ['head', 'body']
current:

//* current becomes shift from beginning

Queue: ['body']
current: 'head'

Queue: ['body', 'title']
current:

Queue: ['title']
current: 'body'

Queue: ['title', 'ul']
current:

Queue: ['ul']
current: 'title'

Queue: ['ul']
current:

Queue: []
current: 'ul'

Queue: ['li', 'li2']
current:

Queue: ['li2']
current: 'li'

 */

/********************************* */

/** Tree Class
 *
 * Do you need a tree class? Each node itself is a tree
 * It’s useful to have a Tree class, though, so you can keep track of the head node!
 * 
 * Every linked list is a tree
 *  But not every tree is a linked list.


 */

class Tree {
  constructor(root) {
    this.root = root;
  }

  findInTreeDFS(val) {
    return this.root.findDFS(val);
  }
  findInTreeBFS(val) {
    return this.root.findBFS(val);
  }
}

/** Binary Trees
 * 
General n-ary trees have nodes with 0+ children.

Binary tree nodes can have 0, 1, or 2 children. Max of 2

Binary tree nodes are usually structured with left and right properties, rather than an array of children

What Are They Good For?
- Sometimes they’re used to store data in a normal hierarchy, like a tree.

Often times, they have a “rule” about the arrangement:
    - binary search trees
    - min/max heap
*/

class BinNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** Some trees point up
Of course, then you can’t move down!
So you’d need to keep a list of all leaf nodes
 */

class ReverseNode {
  constructor(parent) {
    this.parent = parent;
  }
}

/** Some point both ways */

class BidirectionalNode {
  constructor(parent, children = []) {
    this.parent = parent;
    this.children = children;
  }
}
