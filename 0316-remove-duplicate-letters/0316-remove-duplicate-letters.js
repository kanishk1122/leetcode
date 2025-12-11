/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const map = {}, set = new Set();
    const stack = [];
    for (let i = 0; i < s.length; i++) map[s[i]] = i;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) continue;
        while (
            stack.length &&
            s[i] < stack[stack.length - 1] &&
            map[stack[stack.length - 1]] > i
        )
            set.delete(stack.pop());

        if (!set.has(s[i])) {
            stack.push(s[i]);
            set.add(s[i])
        }
    }

    return stack.join('');
};