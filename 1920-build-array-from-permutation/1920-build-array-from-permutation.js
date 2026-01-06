/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = []
    for(let num of nums){
        result.push(nums[num])
    }
    return result
};