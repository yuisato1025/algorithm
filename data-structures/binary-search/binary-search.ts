const arr = [1, 3, 3, 4, 5, 6, 7, 8];

// O(logn) time / O(1) space
function binarySearch(arr: number[], target: number): number {
  let L = 0;
  let R = arr.length - 1;

  while (L <= R) {
    let mid = Math.floor((L + R) / 2);

    if (target > arr[mid]) {
      L = mid + 1;
    } else if (target < arr[mid]) {
      R = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
