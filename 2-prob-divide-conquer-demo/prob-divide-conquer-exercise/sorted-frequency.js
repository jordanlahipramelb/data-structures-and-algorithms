function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(
  arr,
  num,
  lowIdx = 0, // lowIdx index starts at 0
  highIdx = arr.length - 1 // highest index is last index of array
) {
  if (highIdx >= lowIdx) {
    // find the middle index of the array
    let midIdx = Math.floor((highIdx + lowIdx) / 2);

    if ((num > arr[midIdx - 1] || midIdx === 0) && arr[midIdx] === num) {
      return midIdx;
    } else if (num > arr[midIdx]) {
      return findFirst(arr, num, midIdx + 1, highIdx);
    }

    return findFirst(arr, num, lowIdx, midIdx - 1);
  }
  return -1;
}

function findLast(
  arr,
  num,
  lowIdx = 0, // lowIdx index starts at 0
  highIdx = arr.length - 1 // highest index is last index of array
) {
  if (highIdx >= lowIdx) {
    // find the middle index of the array
    let midIdx = Math.floor((lowIdx + highIdx) / 2);
    if (
      (midIdx === arr.length - 1 || num < arr[midIdx + 1]) &&
      arr[midIdx] === num
    ) {
      return midIdx;
    } else if (num < arr[midIdx]) {
      return findLast(arr, num, lowIdx, midIdx - 1);
    } else {
      return findLast(arr, num, midIdx + 1, highIdx);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
