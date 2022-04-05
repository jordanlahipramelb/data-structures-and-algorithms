/** BubbleSort
  - A sorting algorithm where the largest values bubble up to the top!
      Ex. Soda with bubbles on the top/end
 */

/** 5 comparing itself to each element, ending at the end.
[ 5, 3, 4, 1, 2 ]
[ 3, 5, 4, 1, 2 ]
[ 3, 4, 5, 1, 2 ]
[ 3, 4, 1, 5, 2 ]
[ 3, 4, 1, 2, 5 ]
We now know 5 is in right place, and repeat with start of array

Take the first element and compare it to the next, swap if it's bigger, then repeat at the start of the array with the swapped element. Repeat.
       */

/** Quadratic Sorts
       Bubble sort is O(n2) (quadratic)
       Simple and fun to tinker with
       Other common O(n2) sorts
       - Selection sort
       - Insertion sort
       Both are much faster than bubble sort!
       But all scale in quadratic time
       */

/** Time complexity
 the algorithm is typically O(n2) because there's a NESTING of loops: you run through the array, and at each iteration you have to run through a subarray of the original array. In the best case scenario, bubble sort will run at O(n) since only one complete iteration will be necessary.
 */

/** BubbleSort Pseudocode
      - Loop with i from end of array towards beginning
        - Loop with j from the beginning until i - 1
        - If arr[j] is greater than arr[j+1], swap those two values!
      - Return the sorted array
      - This technique is called Bubble Sort. Why?
        - Because the big numbers bubble to the top! */

function bubbleSort(arr) {
  let count = 0;
  // Loop once for every element in the array
  for (let i = 0; i < arr.length; i++) {
    // Loop AGAIN for every element in the array.
    // Why? We need to take one/each element and compare it to every other element. Helps us repeat this process
    for (let j = 0; j < arr.length; j++) {
      count++;
      /** If the element is greater than the value on the right, swap the two values. */
      // If the index element is greater than the index element next to it ( j + 1 )
      if (arr[j] > arr[j + 1]) {
        // Swap spaces with it, creating a temporary variable
        let temp = arr[j];
        // index becomes index right of it
        arr[j] = arr[j + 1];
        // index originally next to it switches to behind it now
        arr[j + 1] = temp;
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

/**
> [3, 1, 75, 23]
> [1, 3, 75, 23]
> [1, 3, 75, 23]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
> [1, 3, 23, 75]
 */

/** Shorter sorting count time, but keeps running through each element even though it's already sorted  */

function bubbleSort2(arr) {
  let count = 0;
  // Loop once for every element in the array
  for (let i = 0; i < arr.length; i++) {
    // Loop AGAIN for every element in the array.
    // '- i' allows us to decrement the number of inner loops each time because we're basing the number of inner loops off the outer 'i' loop
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}

/** Shorter sorting count time  */

function bubbleSort3(arr) {
  let count = 0;

  // Loop once for every element in the array
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    // Loop AGAIN for every element in the array, in order to compare with one another
    // '- i' allows us to decrement the number of inner loops each time because we're basing the number of inner loops off the outer 'i' loop
    for (let j = 0; j < arr.length - i; j++) {
      count++;

      /** If the element is greater than the value on the right, swap the two values. */
      // If the index element is greater than the index element next to it ( j + 1 )
      if (arr[j] > arr[j + 1]) {
        // create a temporary variable of current index space
        let temp = arr[j];

        // current index becomes index right of it
        arr[j] = arr[j + 1];

        // index right of it becomes the temp variable, which is the current/previous index space
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // if we didn't swap the element on a full pass, stop the loop
  }
  console.log("TOTAL COUNT:", count);
  return arr;
}
