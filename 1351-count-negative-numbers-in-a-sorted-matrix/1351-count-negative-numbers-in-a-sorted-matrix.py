class Solution(object):
    def countNegatives(self, grid):
        count = 0
        for i in range(len(grid)):
            if grid[i][len(grid[i]) -1] < 0 :
                left=0
                right=len(grid[0])-1

                while left<=right:
                    mid= left + (right- left)//2
                    if grid[i][mid]<0:
                        count +=right+1-mid
                        right=mid-1
                    elif grid[i][mid]>=0:
                        left=mid+1
        return count 
        