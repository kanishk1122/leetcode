/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let count = Infinity;
    let prefix = 0;
    let left = 0;
    for (let end = 0; end < nums.length; end++) {
        prefix += nums[end];
        while (prefix >= target) {
            count = Math.min(count, end - left + 1);
            prefix -= nums[left];
            left++;
        }
    }
    return count === Infinity ? 0 : count;
};
