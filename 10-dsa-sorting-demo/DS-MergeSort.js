/** Intermediate Sorting Algorithms
- The sorting algorithms we’ve learned so far don’t scale well
- Try out bubble sort with 100000 elements—will take quite some time!
- O(n log n) is fastest possible runtime
    - (for a “comparative sort”, which is what we typically mean)
    - n because you have to touch every item in list once
    - log n because best possible strategy is divide and conquer method
    - Both merge sort and quick sort use this strategy
- This has been proven with a mathematical proof — no comparative sorting algorithm will be faster than O(n log n) */

/** Merge Sort
- It’s a combination of two things: merging and sorting!
- Exploits fact that arrays of 0 or 1 element are always sorted
- Strategy:
    - Decomposing array into smaller arrays of 0 or 1 elements
    - Building up a newly sorted array from those */

/** Merging Arrays
- To implement merge sort, we first need a helper function
- This helper should take in two sorted arrays, and return a new array with all elements in sort order
- Should run in O(n + m) time/space and be pure */

/** Merging Arrays Pseudocode
- Create empty out array
- Start pointers at beginnings of arrays a and b
  - If a value <= b value, push a value to out & increase a pointer
  - Else, push b value to out & increase b pointer
- Once we exhaust one array, push all remaining values from other array 
*/

// both lists have to be sorted from lesser to greater value
function merge(arr1, arr2) {
  // Start with empty output
  const results = [];
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2

  // while loop stops when it is out of bounds of both arrays
  while (i < arr1.length && j < arr2.length) {
    // if index value of arr1 is smaller than index of arr2..
    if (arr1[i] < arr2[j]) {
      // push that value onto the array/increment i pointer
      results.push(arr1[i]);
      // and move to the next index over
      i++;
    } else {
      // butif arr2 is smaller, push that value instead
      results.push(arr2[j]);
      // and move to the next index over/increment j pointer
      j++;
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

/** 
 i           j
[5, 9, 20]  [1, 3, 6]
results: [1]
****************
 i              j
[5, 9, 20]  [1, 3, 6]
results: [1, 3]
****************
 i                  j
[5, 9, 20]  [1, 3, 6]
results: [1, 3, 5]
****************
    i        Array Exhausted
[5, 9, 20]  [1, 3, 6]
results: [1, 3, 5, 6, 9, 20]
****************
 */

/** mergeSort Pseudocode
Recursively:
- Split array into halves until you have arrays that have length of 0 or 1
- Merge split arrays and return the merged & sorted array */

function mergeSort(arr) {
  //base case: return arr if length is less than or equal to 1
  if (arr.length <= 1) return arr;

  // find mid point of array (like binarySearch)
  const mid = Math.floor(arr.length / 2);

  // left will be from index 0 to mid point value
  const left = mergeSort(arr.slice(0, mid));

  // right is midpoint and onwards
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/** Example
mergeSort([3, 2, 70, 48])


Find mid then sort the left side of the array
        mergeSort([3, 2])
        > [3]
        Sort the right side of the array
         mergeSort([2])
         The array is 1 element long so we return the array
         > [2]
      
         Now we run the final line, merge(left, right)
         merge([3], [2])
          returns [2, 3]

    We have the left. Now we find the right.
        [2, 3]  mergeSort([70, 48])
        Base case is not true/arr is too long
        
        So we pick the midpoint and calculate the left
        mergeSort([70])
        > [70]
        Sort the right side
        mergeSort([48])
         The array is 1 element long so we return the array
        > [48]

         Now we run the final line, merge(left, right)
         merge([70], [48])
            returns [48, 70]

              Now we call merge() on those 2 arrays
              merge([2,3], [48,70])

              returns [2, 3, 48, 70]

 */

/** Sorting Topics
 * 
 * 
- numeric sort
let numbers = [100,60,1000,2000]

numbers.sort()                 // [100, 1000, 2000, 60]
numbers.sort((a,b) => a - b)   // [60, 100, 1000, 2000]

**********************

- sort by “name” property of objects
let instructors = [
  { name: "Elie",   favLang: "English" },
  { name: "Joel",   favLang: "Python" },
  { name: "Alissa", favLang: "JS" }
]

// sort the instructors by name alphabetically
instructors.sort() // not going to help!

instructors.sort((a,b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
})



**********************

 */
