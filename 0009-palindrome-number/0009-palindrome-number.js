/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    let t = x
    let reverse = 0
    while(t !== 0){
        let lastdigit = t % 10
        t = parseInt(t / 10)
        reverse = reverse * 10 + lastdigit;
    }
    return reverse == x
};