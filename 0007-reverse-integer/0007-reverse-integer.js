/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
       let result = 0;

    while (x !== 0) {
        let lastvalue = x % 10;
        x = parseInt(x / 10);
        if (result > 214748364 || (result === 214748364 && lastvalue > 7)) return 0;
        if (result < -214748364 || (result === -214748364 && lastvalue < -8)) return 0;
        result = result * 10 + lastvalue;
    }
    return result;
};