/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    const ops = new Set(['+', '-', '*', '/'])

    for (let token of tokens) {
        if (ops.has(token)) {
            let b = stack.pop();
            let a = stack.pop();

            if (token === '+') {
                stack.push(a + b);
                continue
            }
            if (token === '-') {
                stack.push(a - b);
                continue
            }
            if (token === '*') {
                stack.push(a * b)
                continue
            }
            if (token === '/') {
                stack.push(Math.trunc(a / b))
                continue
            };
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop()

};