/**
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
 */

function findFloor(
  arr,
  num,
  lowIdx = 0, // lowIdx index starts at 0
  highIdx = arr.length - 1 // highest index is last index of array
) {
  if (lowIdx > highIdx) return -1;

  if (num >= arr[highIdx]) return arr[highIdx];

  //   find middle index
  let midIdx = Math.floor((lowIdx + highIdx) / 2);

  if (arr[midIdx] === num) return arr[midIdx];

  if (midIdx > 0 && arr[midIdx - 1] <= num && num < arr[midIdx]) {
    return arr[midIdx - 1];
  }

  if (num < arr[midIdx]) {
    return findFloor(arr, num, lowIdx, midIdx - 1);
  }

  return findFloor(arr, num, midIdx + 1, highIdx);
}

module.exports = findFloor;
