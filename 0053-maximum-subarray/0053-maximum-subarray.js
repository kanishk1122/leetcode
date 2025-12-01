/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum = Number.NEGATIVE_INFINITY;
    let cm = 0
    for(let i = 0 ; i < nums.length ; i++){
        cm += nums[i]
        maxsum = Math.max(maxsum , cm)
        if(cm < 0) {
            cm = 0
        }
    }    
    return maxsum
};
