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
        let mask = ""
        n = s.length
        let lastlocalnumber = s.slice(-4, n)
        let frontnums = s.slice(0, -4)
        if(frontnums.length == 6){
            return "***-***-" +lastlocalnumber 
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