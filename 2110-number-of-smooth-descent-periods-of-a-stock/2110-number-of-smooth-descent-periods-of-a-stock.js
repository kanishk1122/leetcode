/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
    let count = 1
    let right = 1
    for (let i = 1; i < prices.length; i++) {
        if(prices[i - 1] - prices[i] === 1){
            right++
        }else{
            right = 1
        }
        count += right
    }
    return count
};