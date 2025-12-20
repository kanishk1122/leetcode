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
        if(count == n){
            return count
        }
        let j = 0
        for(j;j<m;j++){
            if(col[j] == false){
                continue
            }
            if(strs[i][j] < strs[i-1][j]){
                col[j] = false
                count++
            }
        }
    }
    return count
};