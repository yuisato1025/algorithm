// O(nlogn) time / O(n) space
function quickSort(arr: number[], s: number, e: number): number[] {
  if (e - s + 1 <= 1) {
    return arr;
  }

  let pivot = arr[e];
  let left = s;

  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      let tmp = arr[left];
      arr[left] = arr[i];
      arr[i] = tmp;
      left++;
    }
  }

  arr[e] = arr[left];
  arr[left] = pivot;

  quickSort(arr, s, left - 1);
  quickSort(arr, left + 1, e);

  return arr;
}
