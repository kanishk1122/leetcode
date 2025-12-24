/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let queue = [...tickets]
    let count = 0
    let index = 0
    while (queue[k] > 0) {
        count++
        // console.log(queue[0] ,k,queue[k])
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
        // console.log(queue[0] ,"after update ")
    }
    console.log(count, queue, k)
    return count
};