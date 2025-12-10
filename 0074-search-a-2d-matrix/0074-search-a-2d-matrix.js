/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let found = false
    let i = 0
    let end = matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]
    if (end < target) {
        return false
    }
    if (end == target) {
        return true
    }
    while (i < matrix.length) {
        end = matrix[i][matrix[i].length - 1]
        if (end == target) {
            return true
        }
        if (end > target) {
            let start = 0
            let end = matrix[i].length
            let mid = Math.floor((start + end) / 2)
            while (!found) {
                if (matrix[i][mid] < target) {
                    if (matrix[i][mid] == target) {
                        found = true
                        return true
                    }
                    start = mid
                    mid = Math.floor((start + end) / 2)
                }
                else {
                    if (matrix[i][mid] == target) {
                        found = true
                        return true
                    }
                    end = mid
                    mid = Math.floor((start + end) / 2)
                }
                if (matrix[i][mid] == target) {
                    found = true
                    return true
                }
                if (mid == start || mid == end && matrix[i][mid] !== target) {
                    found = true
                    return false
                }
            }
        } else {
            i++
        }
    }
    return false
};