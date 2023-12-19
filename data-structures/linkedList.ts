class LinkedNode {
  public val: number;
  public next: LinkedNode | null;
  public prev: LinkedNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  private left;
  private right;
  constructor() {
    this.left = new LinkedNode(0);
    this.right = new LinkedNode(0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  get(index: number): number {
    let cur = this.left.next;
    while (cur && index > 0) {
      cur = cur.next;
      index -= 1;
    }

    if (cur && cur != this.right && index === 0) {
      return cur.val;
    }

    return -1;
  }

  addAtHead(val: number): void {
    let node = new LinkedNode(val);
    let prev = this.left;
    let next = this.left.next;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  addAtTail(val: number): void {
    let node = new LinkedNode(val);
    let prev = this.right.prev;
    let next = this.right;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  addAtIndex(index: number, val: number): void {
    let cur = this.left.next;
    while (cur && index > 0) {
      cur = cur.next;
      index -= 1;
    }
    if (cur && index === 0) {
      let node = new LinkedNode(val);
      let prev = cur.prev;
      let next = cur;

      prev.next = node;
      next.prev = node;
      node.next = next;
      node.prev = prev;
    }
  }

  deleteAtIndex(index: number): void {
    let cur = this.left.next;
    while (cur && index > 0) {
      cur = cur.next;
      index -= 1;
    }
    if (cur && cur != this.right && index === 0) {
      let prev = cur.prev;
      let next = cur.next;

      prev.next = next;
      next.prev = prev;
    }
  }
}
