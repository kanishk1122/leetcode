/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let queue = [...tickets]
    let count = 0
    while (queue[k] > 0) {
        count++
        if (k > 0) {
            k--
        } else {
            k = queue.length - 1
        }
        queue[0] -= 1
        if (queue[0] > 0) {
            queue.push(queue.shift())
        } else {
            queue.shift()
        }
    }
    return count
};