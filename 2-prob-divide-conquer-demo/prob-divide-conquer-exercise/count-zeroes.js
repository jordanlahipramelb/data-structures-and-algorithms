function countZeroes(arr) {
  let firstZero = findFirst(arr);

  // if no 0, return 0
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
}

function findFirst(
  arr,
  lowIdx = 0, // lowIdx index starts at 0
  highIdx = arr.length - 1 // highest index is last index of array
) {
  if (highIdx >= lowIdx) {
    // find the middle index of the array
    let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2);

    if ((arr[midIdx - 1] === 1 || midIdx === 0) && arr[midIdx] === 0) {
      return midIdx;
    } else if (arr[midIdx] === 1) {
      return findFirst(arr, midIdx + 1, highIdx);
    }

    return findFirst(arr, lowIdx, midIdx - 1);
  }
  return -1;
}

module.exports = countZeroes;
