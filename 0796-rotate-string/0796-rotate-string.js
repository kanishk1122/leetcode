/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    joins = s + s
    if(joins.includes(goal)) return true
    return false
};