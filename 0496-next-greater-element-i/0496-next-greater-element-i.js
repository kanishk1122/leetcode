/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
   let stack = [];
    let map = {};
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            let smaller = stack.pop();
            map[smaller] = num;
        }
        stack.push(num);
    }
    while (stack.length) {
        map[stack.pop()] = -1;
    }
    return nums1.map(n => map[n]);
};