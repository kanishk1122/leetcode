/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
   function Mergesort(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = Mergesort(arr.slice(0, mid));
        let right = Mergesort(arr.slice(mid));
        return merge(left, right);
    }
    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
    
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
    
        return result;
    }
    let sorted = Mergesort(nums);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = sorted[i];
    }
};