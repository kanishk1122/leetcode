/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = new Stack()
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (stack.peek() == null) {
            stack.push(char);
            continue;
        }
        if (stack.peek() == char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    s = ""
    while(stack.peek() != null){
        let top = stack.pop()
        s += top
    }
    let arr = s.split('')
    arr = arr.reverse()
    return arr.join('');
};