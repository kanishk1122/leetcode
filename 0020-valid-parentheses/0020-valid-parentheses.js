/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    for(let char of s){
        if(map[char]){
            let removed = stack.pop()
            if(removed !== map[char]) return false;
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0; 
};