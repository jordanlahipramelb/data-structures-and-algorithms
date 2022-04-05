/** merge
Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values from both arrays sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.


Merging Arrays Pseudocode
- Create empty out array
- Start pointers at beginnings of arrays a and b
  - If a value <= b value, push a value to out & increase a pointer
  - Else, push b value to out & increase b pointer
- Once we exhaust one array, push all remaining values from other array 
*/

function merge(arr1, arr2) {
  const results = []; // declare empty array
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    //   if arr1 index value is less than or equal to arr2 index value..
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]); // push index element onto end of results array
      i++; // move to the next index space
    }

    //   if arr2 index value is less than or equal to arr1 index value..
    if (arr2[j] <= arr1[i]) {
      results.push(arr2[j]); // push index element onto end of results array
      j++; // move to the next index space
    }
  }

  //  2 while loops below run when both arrays are different lengths
  //  when j/arr2 is exhausted of elements, push all remaining values from arr1 array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  //  when i/arr1 is exhausted of elements, push all remaining values from arr2 array
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

/** mergeSort
Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. Here’s some guidance for how merge sort should work:

- Break up the array into halves until you can compare one value with another
- Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
- Once the array is merged back together, return the merged (and sorted!) array
- In order to implement this function, you’ll also need to implement a merge function that takes in two sorted arrays and returns a new sorted array. You implemented this function in the previous exercise, so use that function! 


mergeSort Pseudocode
Recursively:
- Split array into halves until you have arrays that have length of 0 or 1
- Merge split arrays and return the merged & sorted array */

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // find midpoint index space
  const mid = Math.floor(arr.length / 2);
  // focus on sorting left side first -> sorts self here, then merges with last line
  const left = mergeSort(arr.slice(0, mid));
  // once left side is sorted, focus on right side -> sorts self here, then merges with last line
  const right = mergeSort(arr.slice(mid));

  //   once left side and right sides above are sorted in order, this line will run and merge the left/right side array(s) together
  return merge(left, right);
}

module.exports = { merge, mergeSort };
