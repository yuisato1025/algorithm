function leafPath(root, path) {
  if (root == null || root.val == 0) {
    return false;
  }
  path.push(root.val);

  if (root.left == null && root.right == null) {
    return true;
  }
  if (leafPath(root.left, path)) {
    return true;
  }
  if (leafPath(root.right, path)) {
    return true;
  }
  path.pop();
  return false;
}
