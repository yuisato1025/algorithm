class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# Insert a new node and return the root of the BST.
def insert(root, val):
    if not root:
        return TreeNode(val)
    
    if val > root.val:
        root.right = insert(root.right, val)
    elif val < root.val:
        root.left = insert(root.left, val)
    return root

# Return the minimum value node of the BST.
def minValueNode(root):
    curr = root
    while curr and curr.left:
        curr = curr.left
    return curr

# Remove a node and return the root of the BST.
def remove(root, val):
    if not root:
        return None
    
    if val > root.val:
        root.right = remove(root.right, val)
    elif val < root.val:
        root.left = remove(root.left, val)
    else:
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
        else:
            minNode = minValueNode(root.right)
            root.val = minNode.val
            root.right = remove(root.right, minNode.val)
    return root

def get(self, val: int) -> int:
    current = self.root
    while current != None:
        if val < current.val:
            current = current.left
        elif val > current.val:
            current = current.right
        else:
            return current.val
    return -1

def search(root, target):
    if not root:
        return False
    
    if target > root.val:
        return search(root.right, target)
    elif target < root.val:
        return search(root.left, target)
    else:
        return True
    
def getInorderValues(self) -> List[int]:
        result = []
        self.inorderTraversal(self.root, result)
        return result

def inorderTraversal(self, root: TreeNode, result: List[int]) -> None:
    if root != None:
        self.inorderTraversal(root.left, result)
        result.append(root.val)
        self.inorderTraversal(root.right, result)