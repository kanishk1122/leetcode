/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let total_sum = 0
    for (let i = 0; i < nums.length; i++) {
        total_sum += nums[i];
    }
    let count = 0
    let prefix = 0 
    for (let i = 0 ; i < nums.length -1 ;i++) {
        let num = nums[i]
        prefix += num
        let dif = Math.abs(prefix - total_sum)
        // console.log(prefix , (prefix - total_sum) , total_sum , (prefix - dif) % 2 , dif)
        if ((prefix - dif) % 2 == 0) {
            count++
        }
    }
    return count
};