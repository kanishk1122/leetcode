/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let count = 0
    let foundcapom = 0
    for (let i = 0;i<word.length;i++) {
        let code = word[i].charCodeAt(0)
        // console.log({code},typeof(code))
        if ((code <= 90 && code >= 65)){

            count++
            // console.log({foundcapom})
            if(foundcapom == 0){
                foundcapom = i
            }
        }
    }

    // console.log(count , word.length , foundcapom)
    return count == word.length ? true : (count < 2 && foundcapom == 0 ) ? true : false
};