/** Recursion
 * A function calling itself
 */

/** Functions calling functions ***************** */

function a() {
  console.log("hello");
  b();
  console.log("coding");
}

function b() {
  console.log("world");
  c();
  console.log("love");
}

function c() {
  console.log("i");
}

/************************* */

/** Loops versus Recursion
Any loop can be written instead with recursion

Any recursion can be written instead with a loop

… but often, one way is easier for a problem */

/** Loops */

function countLoop() {
  let n = 1;

  while (n <= 3) {
    console.log(n);
    n += 1;
  }
}

countLoop();

/** Recursion */

function countRecursion(n = 1) {
  // Explicit Base Case
  if (n > 3) return;

  console.log(n);
  count(n + 1);
  console.log(n);
}

countRecursion();

function count(n = 1) {
  // Hidden Base Case
  if (n <= 3) {
    console.log(n);
    count(n + 1);
  }
}

count();

/** Returning Data
Finding Sum of List
“Return sum of list using recursion”

What’s our base case?
- An empty list has sum = 0! */

// O(n) operation inside an O(n) operation => O(n^2)
// we keep making new lists!

// It also has O(n ^ 2) runspace — keeping all lists in memory!

function sum(nums) {
  //Base Case
  if (nums.length === 0) return 0;
  //Normal Case
  return nums[0] + sum(nums.slice(1));
}

/**
Improving Runtime
Often, you can keep track of position in array, rather than slice:
 */
function sum2(nums, i = 0) {
  if (i === nums.length) return 0;

  return nums[i] + sum2(nums, i + 1);
}

// Now runtime and runspace are O(n)
// Now we don't have to store arrays in memory anymore

sum([3, 4, 5]);
3 + sum([4, 5]);
4 + sum([5]);
5 + sum([]);
0;
sum([3, 4, 5]);

/** List Doubler
 * “For every number in array, print the value, doubled”
 */

function doubler(nums) {
  stack = nums.reverse();

  while (stack.length > 0) {
    console.log(stack);
    let n = stack.pop();
    if (Array.isArray(n)) {
      // If array, add it to stack, reversed
      for (let inner of n.reverse()) {
        stack.push(inner);
      }
    } else {
      console.log(n * 2);
    }
  }
}

/**
function doublerRecursive(nums) {
  # loop
  # check if is array
  # yes, recurse on list
  # no, print double
}
 */
// double every number but if you encounter an array, double every number in that array and keep going. If there happens to be another array in that, double it still, and keep going
function doublerRecursive(nums) {
  for (let n of nums) {
    // check if array is an array
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
}

doublerRecursive([5, 6, [7, 8, 9, [10, 11]]]);
