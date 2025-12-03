/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let dif = Infinity;
    let result = 0
    nums.sort((a, b) => a - b)
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let j = i + 1, k = length - 1
        while (j < k) {
            sum = nums[i] + nums[k] + nums[j]
            if (sum == target) return sum
            let tempdif = Math.abs(sum - target);
            if (tempdif < dif) {
                dif = tempdif
                result = sum
            }
            if (sum > target) k--
            if (sum < target) j++
        }
    }
    return result
};