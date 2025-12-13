/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = []
    for(let i = n;i < nums.length;i++){
        result.push(nums[i-n])
        result.push(nums[i])
        
    }
    return result
};