/** //!  Binary Search
 * If our array is SORTED, we can look for values much more quickly!
 * 
Example: Sorted array from small to large numbers
//* Look at the middle value in the array
- If the middle value is the one you’re looking for, congratulations!
- If the middle value is too big, you can eliminate every value to the right!
- If the middle value of the remaining values is too small, you can eliminate every value to the left!
- Among all remaining values, pick the middle one, and repeat.
 */

// binarySearch implementation
// note: arr must be sorted!
function binarySearch(arr, val) {
  // Set starting points for each index

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  // continue looping until element is found
  while (leftIdx <= rightIdx) {
    // find the middle idx by averaging
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    // whatever value is in that middle idx
    let middleVal = arr[middleIdx];

    // if middle value is less than the target val
    if (middleVal < val) {
      // eliminate left half and set a new left index
      // middleVal is too small, look at the RIGHT half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // eliminate right half and set a new right index
      // middleVal is too large, look at the LEFT half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return -1;
}

/** Example
Target: 30

Find middle value
  L            M                   R
 [3, 4, 6, 9, 10, 12, 15, 22, 30, 31];

Left index will equal Middle index plus 1 more than the middle.
Starts over.
                  L                R
 [3, 4, 6, 9, 10, 12, 15, 22, 30, 31];

Left index will equal Middle index plus 1 more than the middle.
Starts over.
                           L       R
 [3, 4, 6, 9, 10, 12, 15, 22, 30, 31];


                              L    R
 [3, 4, 6, 9, 10, 12, 15, 22, 30, 31];

 */

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

/** //! The General Pattern
//? Divide and Conquer Description
- Given a data set, a divide and conquer algorithm removes a large fraction of the data set from consideration at each step.
  - Example: mail room dividing mail by area code, then conquer each area code into smaller pieces
- Typically, the data set must have some additional structure (e.g. be sorted).
- Significantly improves time complexity, when it’s applicable (O(n) -> O(log n)) 

//? Why logs?
- A base-2 log (roughly) measures the number of times you can cut a value in half before the value is less than 1.
- With divide and conquer, you’re often cutting your data set in half until you can’t anymore!

Array size	    Binary Search (Sorted)    Number of times you can cut array size in half
3	              Max 2 comparisons         2
7	              Max 3 comparisons         3
15	            Max 4 comparisons         4
31	            Max 5 comparisons         5
1,023	          Max 10 comparisons        10
1,048,575	      Max 20 comparisons        20

*/

/** //! Divide and Conquer Tips
//? General Tips
- When considering whether to use divide and conquer, make sure your data is properly structured!
- For example, if your array isn’t sorted, binary search won’t work
- If you can think of a linear solution quickly, can you use a divide and conquer approach to improve the complexity?
- Watch out for off by one errors! Managing the left / right pointers can be tricky. */
