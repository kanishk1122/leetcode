/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const freq = new Map(), vis = new Set(), str = s.split(''), stack = [];
    str.forEach(e => freq.set(e, (freq.get(e) + 1 || 1)))
    str.forEach(e => {
        if (!vis.has(e)) {
            while (stack.length && stack[stack.length - 1] > e && freq.get(stack[stack.length - 1]))
                vis.delete(stack.pop())
            if (!vis.has(e))
                stack.push(e), vis.add(e);
        }
        freq.set(e, freq.get(e) - 1)
    })
    return stack.join('')
};