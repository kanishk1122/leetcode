/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let n = directions.length;
    let i = 0;
    let j = n - 1;
    while (i < n && directions[i] === 'L') i++;
    while (j >= 0 && directions[j] === 'R') j--;
    let col = 0;
    for (let k = i; k <= j; k++) {
        if (directions[k] !== 'S') col++;
    }
    return col;
};

