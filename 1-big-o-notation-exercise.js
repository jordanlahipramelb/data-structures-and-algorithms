// Big-O Notation Practice

/* Step One: Simplifying Expressions
1. O(n + 10)
        O(n)
2. O(100 * n)
        O(n)
3. O(25)
        O(1)
4. O(n^2 + n^3)
        O(n^3)
5. O(n + n + n + n)
        O(n)
6. O(1000 * log(n) + n)
        O(n)
7. O(1000 * n * log(n) + n)
        O(n log n)
8. O(2^n + n^2)
        O(2^n)
9. O(5 + 3 + 1)
        O(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10)
        O(n^2)
 */

/** Step Two: Calculating Time Complexity */

function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Time Complexity: O(n)

// Print 10 no matter what
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
// Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// Time Complexity: O(1)
//      - Will not print past 1

function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// Time Complexity: O(n)

function subtotals(array) {
  let subtotalArray = [];
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray.push(subtotal);
  }
  return subtotalArray;
}
// Time Complexity: O(n^2)

function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      if (char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}
// Time Complexity: O(n)
//   - .includes is a fixed length string
//   - max number of keys is 10

/** Part 3 - short answer
1. True or false: n^2 + n is O(n^2).
        True

2. True or false: n^2 * n is O(n^3).
        True

3. True or false: n^2 + n is O(n).
        False

4. What’s the time complexity of the .indexOf array method?
        O(n)

5. What’s the time complexity of the .includes array method?
        O(n)

6. What’s the time complexity of the .forEach array method?
        O(n)

7. What’s the time complexity of the .sort array method?
        .sort sorts array in ascending order
        O(n log n)
        not guarenteed because it depends on the implementation 

8. What’s the time complexity of the .unshift array method?
        O(n)
        adds 1 or more elements to the beginning of an array

9. What’s the time complexity of the .push array method?
        O(1)
        adds one or more elements to the end of an array

10. What’s the time complexity of the .splice array method?
        O(n)
        changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

11. What’s the time complexity of the .pop array method?
        O(1)
        removes the last element from an array and returns that element

12. What’s the time complexity of the Object.keys() function?
        O(n)

13. What’s the space complexity of the Object.keys() function?
        O(n)
 */
