/**
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
 */

function findRotationCount(
  arr,
  lowIdx = 0, // lowIdx index starts at 0
  highIdx = arr.length - 1 // highest index is last index of array
) {
  if (highIdx < lowIdx) return 0;
  if (highIdx === lowIdx) return lowIdx;
  let midIdx = Math.floor((lowIdx + highIdx) / 2);

  // Check if val (midIdx+1) is minimum val.
  if (midIdx < highIdx && arr[midIdx + 1] < arr[midIdx]) return midIdx + 1;

  // Check if midIdx itself is minimum val
  if (midIdx > lowIdx && arr[midIdx] < arr[midIdx - 1]) {
    return midIdx;
  }

  // left half or right half
  if (arr[highIdx] > arr[midIdx]) {
    return findRotationCount(arr, lowIdx, midIdx - 1);
  }

  return findRotationCount(arr, midIdx + 1, highIdx);
}

module.exports = findRotationCount;
