/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = []
    let max = 0
     for (let i = 0; i <= heights.length; i++) {
        let curHeight = i === heights.length ? 0 : heights[i]
        while (stack.length && heights[stack[stack.length - 1]] > curHeight) {
            let top = stack.pop()
            let height = heights[top]
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
            max = Math.max(max, height * width)
        }
        stack.push(i)
    }
    return max
};