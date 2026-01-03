/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    let maxheap = new MaxPriorityQueue(), sum = 0
    for (let num of target) sum += num, maxheap.push(num)
    while (maxheap.front() !== 1) {
        let num = maxheap.pop(maxheap.front())
        sum -= num
        if (num <= sum || sum < 1) return false
        num %= sum, sum += num, maxheap.push(num || sum)
    }
    return true
};