/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let prefix = new Array(nums.length);

    prefix[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    let total = prefix[prefix.length - 1];

    for (let i = 0; i < nums.length; i++) {
        let left = i === 0 ? 0 : prefix[i - 1];
        let right = total - prefix[i];
        if (left === right) return i;
    }
    return -1;

};