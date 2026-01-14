/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    sarr = s.split("")
    
    for(let chat of s){
        let temp = sarr.shift()
        sarr.push(temp)
        s = sarr.join("")
        if(s == goal){
            return true
        }
    }
    return false
};