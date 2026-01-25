/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let left = 0 
    let right  = k -1
    nums = nums.sort((a,b)=>a- b)
    let min = +Infinity
    while(right < nums.length){
        min = Math.min(min ,nums[right] - nums[left] )
        left ++
        right++
    }
    return min
};