/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let freq ={}
    for(let num of nums){
        freq[num] = 1
    }
    let result = []
    let expted = 0
    for(let i = 0 ;i< nums.length;i++){
        expted++
        if (!(expted in freq)){
            result.push(expted)
        }
    }
    return result
};