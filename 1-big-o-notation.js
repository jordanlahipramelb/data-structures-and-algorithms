/**     Big-O Notation
//? What’s the idea here?

- Imagine we have multiple implementations of the same function
- How can we determine which one is the “best?”
- Function that accepts a string and returns reversed copy
- Good?
- Bad?
- Meh?

//? Who cares?
- It’s important to have precise vocabulary about how code performs
- Useful for discussing trade-offs between different approaches
- When code slows, identifying inefficient parts helps find pain points
- Less important: it comes up in interviews!


// ? The problem with timers
- Different machines will record different times
- The same machine will record different times!
- For fast algorithms, speed measurements may not be precise enough
- Instead, count number of simple operations the computer has to perform!

// ? If not time, then what?
Rather than counting seconds, which are so variable…
Let’s count number of simple operations the computer has to perform!

*/

// ? Let’s try counting operations!
function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}
// FEWER OPERATIONS
// 3 simple operations, regardless of the size of n

//Another example
function addUpToFirst(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// 2 operations, but reruns each time depending on the size of n
// this means the number operations will grow because of the loop

/** //? What have we learned?
- Counting is hard!
- Regardless of exact number, number of operations grows proportional to n
- If n doubles, number of operations will also double
- We can use this idea to measure speed allocation of algorithms
 */

/** // ! Introducing… Big O
- Big O Notation is a way to formalize fuzzy counting
    Can use to talk about how the runtime of algorithm grows as inputs grow
- We won’t care about the details, only the trends
- Cares about the general trends of a functions performance (performance tracker chart example)

// ? Big O Definition
-An algorithm is O(f(n)) if number of simple operations is eventually less than a constant times f(n), as n increases

    - f(n) could be linear (f(n) = n)
    - f(n) could be quadratic (f(n) = n2)
    - f(n) could be constant (f(n) = 1)
    - f(n) could be something entirely different! 
    */

// ? Example
// Always 3 operations
// ** constant time
//  ** This means as n increases, the number of operations is eventually less than 1, O of 1
// !this algorithm runs in O(1)
// operations run once, NO LOOP
function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

// ? Example
// ** linear time
//  ** The number of operations is bounded by a multiple of n (say, 10n)
//   !This algorithm “runs in” O(n)  complexity
// this depends on n
function addUpToFirst(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// ? Another example
//   ** quadratic time
//   ** O(n) operation inside of an O(n) operation
// !This algorithm “runs in” O(n^2)
// runs 2 looping operations simultaneously
// we try to avoid this as much as possible
function printAllPairs(n) {
  // n=7
  for (var i = 0; i < n; i++) {
    // this would run 7 times
    for (var j = 0; j < n; j++) {
      // this would also run 7 times
      console.log(i, j); // total, this would run 49 times
    }
  }
}

// ? Worst Case
// **- Big O notation is concerned with worst case of algorithm’s performance.

function allEven(nums) {
  let loopCount = 0;
  for (var i = 0; i < nums.length; i++) {
    loopCount++;
    if (nums[i] % 2 !== 0) {
      console.log("LOOP COUNT:", loopCount);
      return false;
    }
  }
  console.log("LOOP COUNT:", loopCount);
  return true;
}
// allEven([2,2,3,4,5,6,6,6,6,7])
//    LOOP COUNT: 3 // functions loops 3 times, until odd number was found
//    < true

//This is O(n), since even though it may not always take n times, it will SCALE with n
// worst case scenario = as the size of n gfrows (the number of elements in that array), the number of operations our function needs to complete making it slower

/** 
// ? Simplifying Big O Expressions
- When determining algorithm time complexity, rule for big O expressions:
      - Constants do not matter
      - Smaller terms do not matter
      - Always make sure you can answer - what is n?
 */

function doMath(n) {
  return n * 97697679 * 67869766 + 1;
}
// ** constant time operations
//constant time: same number of operators, same amount of time regardless of the input size because it is not looping

// ? Helpful hints
// - Arithmetic operations are constant, simple operations
// - Variable assignment is constant
// - Accessing elements in array (by index) or object (by key) is constant
// - Not constant: Loops: length of the loop times complexity of whatever happens in loop

/** 
We’re in base 2 (think about 0s and 1s)
log28 = 3 (2 to the power of what gives me 8?)
The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that’s less than or equal to one.
Logarithmic time complexity is great! You’ve written an algorithm that can find a value in a sorted array in log2n time! 

For n = 100:

Type	        |Function    |  	Result

Constant      | 	1	      |     1
Logarithmic   | log n	    |    ≈7
Linear        | 	n	      |   100
Logarithmic   | 	n log n	|   ≈664
Quadratic     | 	n2	     |  10,000
Exponential   |  2n	      |   1,267,650,600,228,229,401,496,703,205,376
Factorial     | 	n!	    |   ≈9.332622 × 10157

// ? Must knows for now
- A loop does not mean it’s O(n)!
- A loop in a loop does not mean it’s O(n2)!
- Best runtime for sorting is O(n × log2n) (also referred to as n log2n)
- It is not same as log2n


 */

/** //! Space Complexity
 * 
- So far, we’ve been focusing on time complexity: how can we analyze runtime of an algorithm as size of inputs increase?
- Can also use big O notation to analyze space complexity: how will memory usage scale as size of inputs increase?


// ? Rules of Thumb in JS
- Most primitives (booleans, numbers, undefined, null): constant space
        - They all get allocated the same amount of space
- Strings: O(n) space (where n is the string length)
        - The more that n grows, the space needed to store that string grows
- Reference types: generally O(n), where n is the length of array (or keys in object)
        - 1000 item array will take roughly a thousand times more space than the 1 item array
 */

// ? Example
// * Time complexity: O(n)
//  - It depends on n due to the amount of times the loop will run
// * Space Complexity: O(1) space
//  - Constant time O(1)
function sum(nums) {
  let total = 0; // the only space of memory we're allocating

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

// ? Another example
//** Time Complexity: O(n)
//** Space Complexity: O(n) space
//    - The amount of space it takes to store an array grows in proportion with the length of the array
function double(nums) {
  let doubledNums = []; // the amount of nums can increase in the array

  for (let i = 0; i < nums.length; i++) {
    doubledNums.push(2 * nums[i]);
  }

  return doubledNums;
}

/** //! Recap
- To analyze performance of algorithm, use Big O Notation
    - Can give high level understanding of time or space complexity
    - Doesn’t care about precision, only general trends (linear? quadratic? constant?)
    - Depends only on algorithm, not hardware used to run code
    - Big O Notation is everywhere, so get lots of practice!
 */
