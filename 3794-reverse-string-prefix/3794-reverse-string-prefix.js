/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let string = s.split("")
    let temp = string.slice(0 , k).reverse()
    return [...temp ,...string.slice(k) ].join("")
};