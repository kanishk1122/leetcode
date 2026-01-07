/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length <= 2) {
        return false
    }
    let stack = []
    stack.push(arr[0])
    let inclining = true
    let tophill = 0
    for (let i = 1; i < arr.length; i++) {
        console.log(stack)
        if(arr[tophill] < arr[i]){
            tophill = i
        }
        if (inclining) {
            if (stack[stack.length - 1] < arr[i]) {
                stack.pop()
                stack.push(arr[i])
            } else if (
                stack[stack.length - 1] > arr[i]
            ) {
                stack.pop()
                stack.push(arr[i])
                inclining = false
            } else {
                return false
            }
        } else {
            if (stack[stack.length - 1] > arr[i]) {
                stack.pop()
                stack.push(arr[i])
            } else {
                return false
            }
        }
    }
    console.log(tophill)
    return inclining ? false :tophill == 0 ? false : true
};
