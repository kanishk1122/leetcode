import heapq
class Solution(object):
    def lastStoneWeight(self, stones):
        maxheap = [-stone for stone in stones]
        heapq.heapify(maxheap)

        while len(maxheap) > 1:
            y = -heapq.heappop(maxheap)
            x = -heapq.heappop(maxheap)

            if y != x:
                heapq.heappush(maxheap, -(y - x))

        return -maxheap[0] if maxheap else 0
       

        