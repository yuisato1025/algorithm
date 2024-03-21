class DynamicArray:
    # O(n)
    def __init__(self, capacity: int):
        self.size = 0
        self.capacity = capacity
        self.arr = [0] * capacity

    # O(1)
    def get(self, i: int) -> int:
        return self.arr[i]

    # O(1)
    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    # O(1) - Avg case
    def pushback(self, n: int) -> None:
        if self.size == self.capacity:
            self.resize()

        self.arr[self.size] = n
        self.size += 1

    # O(1)
    def popback(self) -> int:
        if self.size > 0:
            self.size -= 1
        return self.arr[self.size]

    # O(n)
    def resize(self) -> None:
        self.capacity =  self.capacity * 2
        new_arr = [0] * self.capacity

        for i in range(self.size):
            new_arr[i] = self.arr[i]
        self.arr = new_arr

    # O(1)
    def getSize(self) -> int:
        return self.size
    
    # O(1)
    def getCapacity(self) -> int:
        return self.capacity
