/**
 * @param {number[]} height
 * @return {number}
 * 7 * (8-1) = 49
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxCap = 0;
    let indexoflwal = right;
    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;
        if (area > maxCap) {
            maxCap = area;
            indexoflwal = (height[left] <= height[right]) ? left : right;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxCap
};