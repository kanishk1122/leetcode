/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let stack = [];
    let result = new Array(n).fill(-1);
    for (let i = 0; i < 2 * n; i++) {
        let idx = i % n;
        while (stack.length > 0 && nums[idx] > nums[stack[stack.length - 1]]) {
            let top = stack.pop();
            result[top] = nums[idx];
        }
        if (i < n) {
            stack.push(idx);
        }
    }
    return result;
};