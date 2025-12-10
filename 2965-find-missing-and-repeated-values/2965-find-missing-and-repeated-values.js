/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let double = 0
    let not = 0
    let freq = new Map()
    let prefix = 0
    let exptedprefix = 0
    let n = 1
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            exptedprefix += n
            freq.set(grid[i][j], (freq.get(grid[i][j]) || 0) + 1)
            if (freq.get(grid[i][j]) == 2) {
                double = grid[i][j]
            } else {
                prefix += grid[i][j]
            }
            n++
        }
    }
    return [double, exptedprefix - prefix]
};