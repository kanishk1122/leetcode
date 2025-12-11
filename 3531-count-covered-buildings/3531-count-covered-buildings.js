/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
    let xMin = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
    let xMax = new Array(n + 1).fill(0);
    let yMin = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
    let yMax = new Array(n + 1).fill(0);
    for (let [x, y] of buildings) {
        xMin[y] = Math.min(xMin[y], x);
        xMax[y] = Math.max(xMax[y], x);
        yMin[x] = Math.min(yMin[x], y);
        yMax[x] = Math.max(yMax[x], y);
    }
    let count = 0;
    for (let [x, y] of buildings) {
        let isCoveredX = (xMin[y] < x && x < xMax[y]);
        let isCoveredY = (yMin[x] < y && y < yMax[x]);
        if (isCoveredX && isCoveredY) {
            count++;
        }
    }
    return count;
};
