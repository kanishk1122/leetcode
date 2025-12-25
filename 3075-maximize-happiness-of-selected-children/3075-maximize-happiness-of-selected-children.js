/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b) => a - b )
    let round = 0
    let count = 0 
    let index = happiness.length - 1
    while( k > 0 ){
        count += Math.abs(happiness[index] - round > 0 ? happiness[index] - round : 0 )
        round++
        index--
        k--
    }
    return count
};