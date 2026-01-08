/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
     let chars = s.toUpperCase().split("-").join("")

    let groups = []
    let index = 0
    
    let remainder = chars.length % k
    if (remainder !== 0) {
        groups.push(chars.slice(0, remainder))
        index = remainder
    }
    while (index < chars.length) {
        groups.push(chars.slice(index, index + k))
        index += k
    }

    return groups.join("-")
};