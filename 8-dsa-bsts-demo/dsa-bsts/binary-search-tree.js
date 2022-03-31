class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If the tree is empty, insert node at root
    if (this.root === null) {
      this.root = new Node(val);

      return this; // return tree
    }

    let currentNode = this.root;

    // while true/there's a node
    while (currentNode) {
      // if val is LESS, travel LEFT
      if (val < currentNode.val) {
        // if there is no left, the left side is now the new Node
        if (currentNode.left === null) {
          currentNode.left = new Node(val);

          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
      // if val is GREATER, travel RIGHT
      if (val > currentNode.val) {
        // if there is no right, the right side is now the new Node
        if (currentNode.right === null) {
          currentNode.right = new Node(val);

          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    // If the tree is empty, insert node at root
    if (this.root === null) {
      this.root = new Node(val);

      return this; // return tree
    }

    // ! recursive fxn repeats this 'if', travelling LEFT until it matches.
    // !   if it does not match, it moves on to next 'if'
    // if val is LESS, travel LEFT
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        // node val becomes left is no node
        currentNode.left = new Node(val);

        return this;
      }

      // recursives currentNode.left unto itself
      return this.insertRecursively(val, currentNode.left);
    }
    // if val is GREATER, travel RIGHT
    else {
      if (currentNode.right === null) {
        // node val becomes right is no node
        currentNode.right = new Node(val);

        return this;
      }

      // recursives currentNode.right on to itself
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      // IF EQUAL
      if (val === currentNode.val) return currentNode;

      // IF LESSER
      if (val < currentNode.val) currentNode = currentNode.left;

      // IF GREATER
      if (val > currentNode.val) currentNode = currentNode.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    // If the tree is empty, it's not found
    if (this.root === null) return undefined;

    // ! recursive fxn repeats this 'if', travelling LEFT until it matches.
    //!    if it does not match, it moves on to next if
    if (val < currentNode.val) {
      if (currentNode.left === null) return undefined;

      return this.findRecursively(val, currentNode.left);
    }
    if (val > currentNode.val) {
      if (currentNode.right === null) return undefined;

      return this.findRecursively(val, currentNode.right);
    }

    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let currentNode = this.root;

    const traverse = (node) => {
      data.push(node.val); // visit node BEFORE and push onto array

      //! recursive fxn does this with the node if it matches the 'if'
      // if there's a left node, go left and push it onto the array
      if (node.left) traverse(node.left);

      //! recursive fxn does this with the node if it matches the 'if'
      // if there's a right node, go right and push it onto the array
      if (node.right) traverse(node.right);
    };

    // recursive fxn does the things above with the currentNode
    traverse(currentNode);

    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let currentNode = this.root;

    const traverse = (node) => {
      //! recursive fxn does this with the node if it matches the 'if'
      // if there's a left node, go left and push it onto the array
      if (node.left) traverse(node.left);

      data.push(node.val); // visit node DURING and push onto array

      //! recursive fxn does this with the node if it matches the 'if'
      // if there's a right node, go right and push it onto the array
      if (node.right) traverse(node.right);
    };

    // recursive fxn does the things above with the currentNode
    traverse(currentNode);

    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let currentNode = this.root;

    const traverse = (node) => {
      //! recursive fxn does this with the node if it matches the 'if'
      // if there's a left node, go left and push it onto the array
      if (node.left) traverse(node.left);

      //! recursive fxn does this with the node if it matches the 'if'
      // if there's a right node, go right and push it onto the array
      if (node.right) traverse(node.right);

      data.push(node.val); // visit node AFTER and push onto array
    };

    // recursive fxn does the things above with the currentNode
    traverse(currentNode);

    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let queue = [];
    let currentNode = this.root;

    // push initial node onto queue
    queue.push(currentNode);

    // run while theres something in the queue
    while (queue.length) {
      // node becomes the first removed element of the queue to visit
      // shift from the beginning/search what's been in there the longest so far
      // at start, checks the root node and its left/right, then those nodes become current node
      currentNode = queue.shift();

      // the removed element is then pushed onto the data array
      data.push(currentNode.val);

      // if the node has a left node, push it to queue
      if (currentNode.left) queue.push(currentNode.left);
      // if the node has a right node, push it to queue
      if (currentNode.right) queue.push(currentNode.right);

      // everything in the while loop run over and over until the queue is empty
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let nodeToRemove = this.root;
    let parent;

    while (nodeToRemove.val !== val) {
      parent = nodeToRemove;
      if (val < nodeToRemove.val) {
        nodeToRemove = nodeToRemove.left;
      } else {
        nodeToRemove = nodeToRemove.right;
      }
    }

    if (nodeToRemove !== this.root) {
      if (nodeToRemove.left === null && nodeToRemove.right === null) {
        if (parent.left === nodeToRemove) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
        let rightParent = nodeToRemove;
        let right = nodeToRemove.right;
        if (right.left === null) {
          right.left = nodeToRemove.left;
          if (parent.left === nodeToRemove) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left !== null) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === nodeToRemove) {
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
      } else {
        if (parent.left === nodeToRemove) {
          if (nodeToRemove.right === null) {
            parent.left = nodeToRemove.left;
          } else {
            parent.left = nodeToRemove.right;
          }
        } else {
          if (nodeToRemove.right === null) {
            parent.right = nodeToRemove.left;
          } else {
            parent.right = nodeToRemove.right;
          }
        }
      }
    }
    return nodeToRemove;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {
    if (current === null) return;
    return maxDepth(current) - minDepth(current) <= 1;

    function minDepth(current) {
      if (current === null) return 0;
      return 1 + Math.min(minDepth(current.left), minDepth(current.right));
    }

    function maxDepth(current) {
      if (current === null) return 0;
      return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(current = this.root) {
    // if the tree is too small, return
    if (!this.root || (!this.root.left && !this.root.right)) return;

    while (current) {
      // Current is largest and has a left subtree and 2nd largest is the largest in that subtree
      if (current.left && !current.right) {
        return this.findSecondHighest(current.left);
      }
      // Current is parent of largest and largest has no children so current is 2nd largest
      if (current.right && !current.right.left && !current.right.right) {
        return current.val;
      }
      current = current.right;
    }
  }
}

module.exports = BinarySearchTree;
