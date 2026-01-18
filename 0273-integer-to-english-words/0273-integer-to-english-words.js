/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) return "Zero"

    const d = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four", 5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine", 10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty", 
        90: "Ninety"
    }

    function slu(n) {
        if (n === 0) return ""
        if (n < 20) return d[n] + " "
        if (n < 100) return d[Math.floor(n / 10) * 10] + " " + slu(n % 10)
        if (n < 1000) return d[Math.floor(n / 100)] + " Hundred " + slu(n % 100)
        if (n < 1000000) return slu(Math.floor(n / 1000)) + "Thousand " + slu(n % 1000)
        if (n < 1000000000) return slu(Math.floor(n / 1000000)) + "Million " + slu(n % 1000000)
        return slu(Math.floor(n / 1000000000)) + "Billion " + slu(n % 1000000000)
    }

    return slu(num).trim()
}