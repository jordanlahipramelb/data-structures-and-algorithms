/** FIRST IN, FIRST OUT (FIFO)
 * Example: standing in line for a ticket
 * 
 * Like a List, Except…
    - Items are only added to a queue by enqueueing them at the back
    - Items are only removed from a queue by dequeueing them at the front
    - Thus, newer items are near back of queue, older items are near front
    - FIFO for “First-in, first-out”
* Typical methods
enqueue(item)
- Add to end
dequeue()
- Remove & return first item
peek()
- Return first item, but don’t remove
isEmpty()
- Are there items in the queue?

Linked List: yes, both enqueue & dequeue are O(1) (head is top)
Doubly Linked List: yes, both enqueue & dequeue are O(1)
 */
class Queue {
  // Wrapper class that uses an array at its core
  // BUT it's not efficient
  constructor() {
    this.data = [];
  }
  enqueue(val) {
    this.data.push(val);
  }
  // O(n) operation, so we'd have to shift everything over
  dequeue(val) {
    return this.data.shift();
  }
}

/** Stacks Example
 *  LAST IN, FIRST OUT (LIFO)
 * At start, makePizza is ran, then functions in makePizza is ran.
 * Like a call stack
 *
 *  the insertion and deletion of elements can only happen from one end of the stack — the top.
 * similar to a stack of pancakes: you add each pancake to the top of the stack, and can only remove from the top of the stack
 */

function makePizza() {
  console.log("MAKING PIZZA!");
  bake([formDough(), getCheese()]);
  console.log("PIZZA IS DONE!");
}

function bake(...args) {
  console.log("BAKING", args);
  return "🍕";
}

function formDough() {
  console.log("FORMING DOUGH!");
  return "Here is your dough";
}
function getDough() {
  return "🍞";
}

function getCheese() {
  console.log("GETTING CHEESE!");
  return "🧀";
}

function start() {
  debugger;
  makePizza();
}

start();
