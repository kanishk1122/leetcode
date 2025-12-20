/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0 
    let n = strs.length
    let m = strs[0].length
    let col = {}
    for(let i = 1;i < n  ;i++){
        let j = 0
        for(j;j<m;j++){
            if(col[j]){
                continue
            }
            if(strs[i][j] < strs[i-1][j]){
                col[j] = true
                count++
            }
        }
    }
    return count
};