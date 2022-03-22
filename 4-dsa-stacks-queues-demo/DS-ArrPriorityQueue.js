/** Typical Methods
add(pri, item)
- Add item to queue
poll()
- Remove & return top-priority item
peek()
- Return (don’t remove) top-priority item
isEmpty()
- Are there items in queue? */

class PriorityQueue {
  /** An ADT for a collection:

    - Add item (with priority)
    - Remove highest-priority item */
  constructor() {
    this.data = [];
  }

  /** Add object to data array
   * Ex. variableNamee.add(8, "broken leg");
   */
  add(priority, value) {
    this.data.push({ priority, value });
  }
  poll() {
    // variable to track the max idx, 0 for the very beginning of the array
    let maxIdx = 0;
    // select the first element's priority property
    let maxPriority = this.data[0].priority;

    // loop over data, starting from 1

    for (let i = 1; i < this.data.length; i++) {
      // compare current max priority (whatever was inserted first) to the next element's priority
      // Ex. 8 vs 0
      if (this.data[i].priority > maxPriority) {
        /** if the element's priority is larger than the maxPriority (first element), then the maxPriority is now that element's priority
         * 8 becomes maxPriority */
        maxPriority = this.data[i].priority;

        /**and now the new maxIdx is that elemtent's priority
         * 8 is now maxIdx
         */
        maxIdx = i;
      }
    }

    // remove that maxIdx, which is 1 element (splice gives back this array of one item),
    //    return its value
    return this.data.splice(maxIdx, 1)[0].value;
  }
}

const pq = new PriorityQueue();
pq.add(8, "broken leg");
pq.add(6, "dizziness");
pq.add(10, "heart attack");
pq.add(2, "tooth ache");
