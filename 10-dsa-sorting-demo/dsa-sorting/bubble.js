/** BubbleSort Pseudocode
      - Loop with i from end of array towards beginning
        - Loop with j from the beginning until i - 1
        - If arr[j] is greater than arr[j+1], swap those two values!
      - Return the sorted array
      - This technique is called Bubble Sort. Why?
        - Because the big numbers bubble to the top! */

function bubbleSort(arr) {
  // Loop once for every element in the array
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // Loop AGAIN for every element in the array, in order to compare with one another
    for (let j = 0; j < arr.length - i; j++) {
      /** If the element is greater than the value on the right, swap the two values. */
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true; // true if index swapped places
      }
    }

    if (!swapped) break;
  }

  return arr;
}

function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

(module.exports = bubbleSort), bubbleSort2;
