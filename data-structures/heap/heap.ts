class Heap {
  heap: number[];
  constructor() {
    this.heap = [0];
  }

  // O(log n) time
  push(val: number): void {
    this.heap.push(val);
    let i = this.heap.length - 1;

    // Percolate up
    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      let tmp = this.heap[i];
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = tmp;
      i = Math.floor(i / 2);
    }
  }

  // O(log n) time
  pop() {
    if (this.heap.length == 1) {
      // Normally we would throw an exception if heap is empty.
      return null;
    }
    if (this.heap.length == 2) {
      return this.heap.pop();
    }

    let res = this.heap[1];
    // Move last value to root
    this.heap[1] = this.heap.pop() as number;
    let i = 1;
    // Percolate down
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        // Swap right child
        let tmp = this.heap[i];
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = tmp;
        i = 2 * i + 1;
      } else if (this.heap[i] > this.heap[2 * i]) {
        // Swap left child
        let tmp = this.heap[i];
        this.heap[i] = this.heap[2 * i];
        this.heap[2 * i] = tmp;
        i = 2 * i;
      } else {
        break;
      }
    }
    return res;
  }

  heapify(arr: number[]): void {
    // 0-th position is moved to the end
    arr.push(arr[0]);

    this.heap = arr;
    let cur = Math.floor((this.heap.length - 1) / 2);
    while (cur > 0) {
      // Percolate Down
      let i = cur;
      while (2 * i < this.heap.length) {
        if (
          2 * i + 1 < this.heap.length &&
          this.heap[2 * i + 1] < this.heap[2 * i] &&
          this.heap[i] > this.heap[2 * i + 1]
        ) {
          // Swap right child
          let tmp = this.heap[i];
          this.heap[i] = this.heap[2 * i + 1];
          this.heap[2 * i + 1] = tmp;
          i = 2 * i + 1;
        } else if (this.heap[i] > this.heap[2 * i]) {
          // Swap left child
          let tmp = this.heap[i];
          this.heap[i] = this.heap[2 * i];
          this.heap[2 * i] = tmp;
          i = 2 * i;
        } else {
          break;
        }
      }
      cur--;
    }
    return;
  }
}
