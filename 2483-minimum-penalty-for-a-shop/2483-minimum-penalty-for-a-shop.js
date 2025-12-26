/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
        let curPenalty = 0;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            curPenalty++
        }
    }
    let minPenalty = curPenalty
    let earliestHour = 0

    for (let i = 0; i < customers.length; i++) {
        const ch = customers[i]
        if (ch === 'Y') {
            curPenalty--
        } else {
            curPenalty++
        }
        if (curPenalty < minPenalty) {
            minPenalty = curPenalty
            earliestHour = i + 1
        }
    }

    return earliestHour;

}