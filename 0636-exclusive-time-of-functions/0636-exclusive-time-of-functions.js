/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let stack = [];
    let data = new Map();
    let result = new Array(n).fill(0);
    let func = 0;
    for (let i = 0; i < logs.length; i++) {
        let [idStr, command, timeStr] = logs[i].split(":");
        let id = Number(idStr);
        let timeline = Number(timeStr);
        if (command === "start") {
            if (stack.length > 0) {
                let top = stack[stack.length - 1]; 
                result[top[1]] += timeline - data.get(top[0]);
            }
            stack.push([func, id]);
            data.set(func, timeline);
            func++;
        } else {
            let [funcIndex, funcId] = stack.pop();
            let startTime = data.get(funcIndex);
            result[funcId] += timeline - startTime + 1;
            if (stack.length > 0) {
                let top = stack[stack.length - 1];
                data.set(top[0], timeline + 1);
            }
        }
    }

    return result;
};
