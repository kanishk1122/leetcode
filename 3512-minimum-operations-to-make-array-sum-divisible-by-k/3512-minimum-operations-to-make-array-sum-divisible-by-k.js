/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let prefix = 0
    let result = 0
    for(let num of nums){
        prefix += num
    }
    return prefix % k
};