/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = m
    let right = (m + n) 
    while(left < right){
        nums1[left] = nums2[n -1]
        n--
        left++
    }
    nums1.sort((a,b) => a-b)
};