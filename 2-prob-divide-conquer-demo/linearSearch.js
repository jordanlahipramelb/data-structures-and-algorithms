/** //! Linear Search
 * Best search we could implement with an array of UNSORTED data
 * 
 * How is indexOf implemented in JavaScript?

- Loop through your array looking for the desired value
- If you find it, return the index
- If you exhaust the array, return -1
//* - Time complexity: O(n)
//* - The number of times the loop is ran depends on the value of val and the size of arr
 */

// custom indexOf implementation
function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    // if you find the value, return the index of that value
    if (arr[i] === val) return i;
  }

  // if you never find the value, return -1
  return -1;
}

indexOf([4, 8, 15, 16, 23, 42], 15); // 2
indexOf([4, 8, 15, 16, 23, 42], 42); // 5
indexOf([4, 8, 15, 16, 23, 42], 100); // -1

/**
  * 

Array size	  Linear search	(unsorted)        Binary Search (Sorted)
3	            Max 3 comparisons	              Max 2 comparisons
7	            Max 7 comparisons	              Max 3 comparisons
15	          Max 15 comparisons	            Max 4 comparisons
31	          Max 31 comparisons	            Max 5 comparisons
1,023	        Max 1,023 comparisons	          Max 10 comparisons
1,048,575	    Max 1,048,575 comparisons	      Max 20 comparisons


  */
