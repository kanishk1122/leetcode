/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.  [4,2,0,3,0,2,2]
 */
var nextPermutation = function (nums) {
    let pivot = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }
    if (pivot === -1) {
        nums.reverse();
        return nums;
    }
    for (let i = nums.length - 1; i > pivot; i--) {
        if (nums[i] > nums[pivot]) {
            let temp = nums[i];
            nums[i] = nums[pivot];
            nums[pivot] = temp;
            break;
        }
    }
    let left = pivot + 1;
    let right = nums.length - 1;
    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
};
