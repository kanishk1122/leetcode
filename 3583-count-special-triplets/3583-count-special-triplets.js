/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
    const MOD = 1_000_000_007;
    const numCnt = new Map();
    const numPartialCnt = new Map();
    for (const v of nums) {
        numCnt.set(v, (numCnt.get(v) ?? 0) + 1);
    }
    let ans = 0;
    for (const v of nums) {
        numCnt.set(v, numCnt.get(v) - 1);
        const target = v * 2;
        const lCnt = numPartialCnt.get(target) ?? 0;
        const rCnt = numCnt.get(target) ?? 0;
        ans = (ans + (lCnt * rCnt) % MOD) % MOD;
        numPartialCnt.set(v, (numPartialCnt.get(v) ?? 0) + 1);
    }

    return ans;
};