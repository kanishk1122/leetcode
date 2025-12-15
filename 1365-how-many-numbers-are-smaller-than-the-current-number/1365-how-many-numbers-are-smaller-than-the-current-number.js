/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let freq = {}
    let sortedarray = [...nums]
    sortedarray.sort((a,b)=>a-b)
    for(let i =0;i<sortedarray.length;i++){
       if (!(sortedarray[i] in freq)){
            freq[sortedarray[i]] = freq[sortedarray[i]] ? Math.min(freq[sortedarray[i]], i) : i
        }
    }
    let result = []
    for(let num of nums){
        result.push(freq[num])
    }
    return result
};