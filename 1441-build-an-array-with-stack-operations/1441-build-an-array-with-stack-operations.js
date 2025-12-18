/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let result = []
    let pointer = 1
    let stack = []
    for (let i = 0; i < target.length; i++) {
        stack.push(pointer)
        result.push("Push")
        while (pointer !== target[i]) {
            if (pointer !== stack[stack.length - 1]) {
                stack.push(pointer)
                result.push("Push")
            }
            if (pointer < target[i]) {
                stack.pop()
                result.push("Pop")
            }
            pointer++
        }
        if (pointer !== stack[stack.length - 1]) {
            stack.push(pointer)
            result.push("Push")
        }
        pointer++
    }
    return result
};