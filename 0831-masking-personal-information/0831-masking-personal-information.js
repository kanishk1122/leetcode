/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    let n = s.length
    let stype = s.includes("@") ? 0 : 1
    if(stype == 0){
        s = s.toLowerCase()
        let domainindex = s.indexOf("@")
        let mail = s[0] + "*****" + s[domainindex  - 1]
        let domain = s.slice(domainindex , n)
        return mail + domain
    }else{
        s = s.replace(/[()\-\+\s]/g, "")
        console.log({s})
        let mask = ""
        n = s.length
        console.log(n)
        let lastlocalnumber = s.slice(-4, n)
        let frontnums = s.slice(0, -4)
        // console.log({frontnums})
        // console.log(s)
        if(frontnums.length == 6){
            return "***-***-" +lastlocalnumber 
            // console.log(s.slice(-4),{lastlocalnumber})
        }else{
            let m = frontnums.length - 6 
            let extramap = "+"
            while(m > 0 ){
                extramap += "*"
                m--
            }

            return extramap + "-***-***-" + lastlocalnumber
        }
    }
};