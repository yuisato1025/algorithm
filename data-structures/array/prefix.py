class PrefixSum:

    # O(n) time
    def __init__(self, nums):
        self.prefix = []
        total = 0
        for n in nums:
            total += n
            self.prefix.append(total)

    # Q: Given an array of values, design a data structure that can query the sum of a subarray of the values.
    # O(1) time
    def rangeSum(self, left, right):
        preRight = self.prefix[right]
        preLeft = self.prefix[left - 1] if left > 0 else 0
        return (preRight - preLeft)
