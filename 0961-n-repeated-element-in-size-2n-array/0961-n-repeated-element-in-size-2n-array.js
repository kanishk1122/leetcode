/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let freq = new Map() 
    for(let num of nums){
        if(freq.has(num)){
            return num
        }else{
            freq.set(num, 1)
        }
    }
};