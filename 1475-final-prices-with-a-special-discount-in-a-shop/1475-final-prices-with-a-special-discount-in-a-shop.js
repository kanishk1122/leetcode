/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack = []
    let result = [...prices]

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
            let index = stack.pop()
            result[index] = prices[index] - prices[i]
        }
        stack.push(i)
    }

    return result;
};