# Q: Find the middle of a linked list.
def middleOfList(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

# Q: Determine if a Linked List has a cycle.
def hasCycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Q: Determine if a Linked List has a cycle and return the head.
def cycleStart(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break

    if not fast or not fast.next:
        return None
    
    slow2 = head
    while slow != slow2:
        slow = slow.next
        slow2 = slow2.next
    return slow
