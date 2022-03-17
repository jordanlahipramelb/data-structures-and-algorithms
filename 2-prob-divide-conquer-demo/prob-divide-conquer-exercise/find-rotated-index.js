function findRotatedIndex(arr, num) {
  var pivot = findPivot(arr);
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }
}

function binarySearch(arr, val, leftIdx, rightIdx) {
  // returns -1 if array empty
  if (arr.length === 0) return -1;

  // if num is less than the first index or greater than the last index
  if (val < arr[leftIdx] || val > arr[rightIdx]) return -1;

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
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var leftIdx = 0;
  var rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    var middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1;
    else if (arr[leftIdx] <= arr[middleIdx]) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
}
module.exports = findRotatedIndex;
