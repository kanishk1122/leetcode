/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const arr = new Array(nums.length + 1).fill(0)
    const res = []

    for (let num of nums) arr[num]++

    for (let i = 1; i <= nums.length; i++) {
        if (arr[i] === 0) {
            res.push(i)
        }
    }
    return res
};