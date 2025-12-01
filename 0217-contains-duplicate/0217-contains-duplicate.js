/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let freq = new Map()
    for(let num of nums){
        if(freq.get(num)){
            return true
        }else{
            freq.set(num , 1)
        }
    }
    return false
}
