/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    // recursive function
    const sumHelper = (node) => {
      // traverse through children of node
      for (let child of node.children) {
        // add the val of each child to the total
        total += child.val;

        // runs this function of adding the val if there is any length/children
        if (child.children.length > 0) {
          sumHelper(child);
        }
      }
    };

    sumHelper(this.root);

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    // count total
    // mod the val by 2 for even-ness. if it's 0, count is 1. otherwise, 0
    let count = this.root.val % 2 === 0 ? 1 : 0;

    const evenCounterHelper = (node) => {
      // traverse through children of node
      for (let child of node.children) {
        // if child is even, increase count by 1
        if (child.val % 2 === 0) count++;

        // if it has any children
        if (child.children.length > 0) {
          // recurse the child
          evenCounterHelper(child);
        }
      }
    };

    evenCounterHelper(this.root);

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    const helper = (node) => {
      // traverse through children of node
      for (let child of node.children) {
        // if child is greater than lowerBound, increase count
        if (child.val > lowerBound) count++;

        // if it has any children
        if (child.children.length > 0) {
          // recurse the child
          helper(child);
        }
      }
    };

    helper(this.root);

    // return count of the number of nodes greater than the number asked
    return count;
  }
}

module.exports = { Tree, TreeNode };
