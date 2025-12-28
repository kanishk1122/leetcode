class Solution(object):
    def countNegatives(self, grid):
        count = 0
        for i in range(len(grid)):
            if grid[i][len(grid[i]) -1] < 0 :
                for j in range(len(grid[i])) :
                    if grid[i][j] < 0 :
                        count += 1
        return count 
        