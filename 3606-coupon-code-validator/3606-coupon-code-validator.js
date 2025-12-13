/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]} "electronics", "grocery", "pharmacy", "restaurant
 */
var validateCoupons = function (code, businessLine, isActive) {
    const e = [], g = [], p = [], r = [];

    for (let i = 0; i < code.length; i++) {
        const bl = businessLine[i];
        if (
            /^[a-zA-Z0-9_]+$/.test(code[i]) &&
            isActive[i] === true &&
            bl !== "invalid"
        ) {
            if (bl.startsWith("e")) e.push(code[i]);
            if (bl.startsWith("g")) g.push(code[i]);
            if (bl.startsWith("p")) p.push(code[i]);
            if (bl.startsWith("r")) r.push(code[i]);
        }
    }
    e.sort(); g.sort(); p.sort(); r.sort();

    return [...e, ...g, ...p, ...r];
};
