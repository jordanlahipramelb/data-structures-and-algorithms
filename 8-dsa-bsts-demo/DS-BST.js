// each node has a left and right child
// left side of tree is higher up numerical/alphabetical versus right side

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  find(soughtVal) {
    let currentNode = this;
    while (currentNode) {
      console.log("VISITING:", currentNode.val);

      // EQUALITY: if the value of currentNode is the sought value
      if (currentNode.val === soughtVal) return currentNode;

      // now we need to compare if the value is greater than or less than
      if (currentNode.val > soughtVal) {
        // LESSER: if currentNode is GREATER than the val we want, that means we look travel down the LEFT side because lesser values are on the left
        currentNode = currentNode.left;
      } else {
        // GREATER: if currentNode is LESS than the val we want, that means we look travel down the RIGHT side because greater values are on the right
        currentNode = currentNode.right;
      }
    }
  }

  /** version 2 find2: search for val using binary search. */

  find2(sought) {
    let current = this;

    while (current) {
      // EQUALITY: if the value of currentNode is the sought value
      if (current.val === sought) return current;

      // sought less than current val? travel left. Otherwise, travel right
      current = sought < current.val ? current.left : current.right;
    }
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  // Post Order Traversal
  // defaults to the root node. Starts there.
  traverse(node = this.root) {
    // calls itself in order to keep going left.
    if (node.left) this.traverse(node.left);

    // If no more left, move to right.
    if (node.right) this.traverse(node.right);
    console.log(node.val);
  }
}

/**

              E
         B          G
     A     D      F

 */

const E = new Node("E");
const A = new Node("A");
const B = new Node("B");
const D = new Node("D");
const F = new Node("F");
const G = new Node("G");

E.left = B; // branches left of E
E.right = G; // branches right of E
B.left = A;
B.right = D;
G.left = F;

const tree = new BinarySearchTree(E);

/**
Starting at E, looking for C:

1. C comes before E, so go left to B
2. C comes after B, so go right to D
3. C comes before D, so go left to None
4. Drop out of while loop and return None
 */

/**
 * 
Valid But Badly Balanced
          B
        A     D  
                E
                  F
                    G


Balancing Trees
  Easy ways to get reasonably balanced trees:
      - shuffle values for tree randomly, and then insert
      - or sort values, then insert from the middle working out

          E
        B      G
      A  D      F

 */

/** In Order Traversal (BinarySearchTree Class)
 * 
 “traverse left, myself, traverse right” is “in-order”:

 A → B → D → E → F → G
 */
