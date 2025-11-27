/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prefix = 0;
    let freq = new Map();
    freq.set(0, 1);
    let count = 0;
    for (let right = 0; right < nums.length; right++) {
        prefix += nums[right];
        let remain = prefix - k;
        if (freq.has(remain)) {
            count += freq.get(remain);
        }
        freq.set(prefix, (freq.get(prefix) || 0) + 1);
    }
    return count;
};