interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function search(root: TreeNode | null, target: number): boolean {
  if (root == null) {
    return false;
  }

  if (target > root.val) {
    return search(root.right, target);
  } else if (target < root.val) {
    return search(root.left, target);
  } else {
    return true;
  }
}

// Insert a new node and return the root of the BST.
function insert(root: TreeNode | null, val: number): TreeNode {
  if (root == null) {
    return new TreeNode(val);
  }

  if (val > root.val) {
    root.right = insert(root.right, val);
  } else if (val < root.val) {
    root.left = insert(root.left, val);
  }
  return root;
}

// Return the minimum value node of the BST.
function minValueNode(root: TreeNode): TreeNode {
  let curr = root;
  while (curr != null && curr.left != null) {
    curr = curr.left;
  }
  return curr;
}

// Remove a node and return the root of the BST.
function remove(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null) {
    return null;
  }

  if (val > root.val) {
    root.right = remove(root.right, val);
  } else if (val < root.val) {
    root.left = remove(root.left, val);
  } else {
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    } else {
      let minNode = minValueNode(root.right);
      root.val = minNode.val;
      root.right = remove(root.right, minNode.val);
    }
  }
  return root;
}
