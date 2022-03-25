/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;

  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestCount = 0) {
  if (idx === words.length) return longestCount;

  longestCount = Math.max(words[idx].length, longestCount);

  // "loops" through the function through each idx
  return longest(words, idx + 1, longestCount);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;

  // add the letter of the idx of the str to the newStr
  newStr += str[idx];

  // "loops" through the function through each second idx
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;

  if (leftIdx >= rightIdx) return true;

  if (str[leftIdx] !== str[rightIdx]) return false;

  // "loops" through the function through each idx
  return isPalindrome(str, idx + 1);
}

/** Example
 * "tacocat"
 * leftIdx = 0
 * rightIdx = 6
 * is left > right ? no. Keep matching the letters with next if statement. If it doesn't match, return false.
 *
 * leftIdx = 1
 * rightIdx = 5
 * keep going..
 */

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;

  if (val === arr[idx]) return idx;

  // "loops" through the function through each idx
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  // newStr will have same length as str
  if (str.length === newStr.length) return newStr;

  // adds each letter in reverse from str to newStr
  newStr += str[str.length - 1 - idx];

  // "loops" through the function through each idx
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // create variable to store string
  let stringArr = [];

  // loop through object
  for (let key in obj) {
    // if the key/val in an object is a string, push the val to the stringArr
    if (typeof obj[key] === "string") stringArr.push(obj[key]);

    // if it's an obj, use gatherStrings fxn to dive deeper into the obj to find the strings
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // if not found
  if (left > right) return -1;

  // find the middle idx of the sorted array
  let middle = Math.floor((right + left) / 2);
  // if the middle value is the val
  if (arr[middle] === val) return middle;
  // searches left side of array
  if (arr[middle] > val) return binarySearch(arr, val, left, middle - 1);
  // searches right side of array
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
``;
