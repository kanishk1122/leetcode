/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
    events.sort((a, b) => {
        const timeA = parseInt(a[1]);
        const timeB = parseInt(b[1]);
        if (timeA !== timeB) {
            return timeA - timeB;
        }
        return (b[0] === "MESSAGE" ? 0 : 1) - (a[0] === "MESSAGE" ? 0 : 1);
    });
    let result = new Array(numberOfUsers).fill(0)
    let offline = new Set()
    let online = new Set()
    let data = {}
    for (let num = 0; num < numberOfUsers; num++) {
        online.add(num)
    }
    for (let i = 0; i < events.length; i++) {
        const currentEvent = events[i];
        while (i + 1 < events.length &&
            events[i + 1][1] === currentEvent[1] &&
            events[i + 1][0] === "OFFLINE") {
            const offlineEvent = events[i + 1];
            const user = Number(offlineEvent[2]);
            offline.add(user);
            online.delete(user);
            data[user] = Number(offlineEvent[1]) + 60;
            events.splice(i + 1, 1);
        }
        if (currentEvent[0] === "MESSAGE") {
            const type = currentEvent[2];
            if (type === "HERE") {
                if (offline.size > 0) {
                    for (const value of offline) {
                        if (data[value] <= Number(currentEvent[1])) {
                            online.add(value);
                            offline.delete(value);
                            delete data[value];
                        }
                    }
                }
                if (online.size > 0) {
                    for (const value of online) {
                        result[value] = result[value] + 1 || 0;
                    }
                }
            } else if (type === "ALL") {

                for (let idx = 0; idx < numberOfUsers; idx++) {
                    result[idx] += 1;
                }
            } else {
                const userIds = type.replace(/id/gi, "").split(" ");
                if (offline.size > 0) {
                    for (const value of offline) {
                        if (data[value] <= Number(currentEvent[1])) {
                            online.add(value);
                            offline.delete(value);
                            delete data[value];
                        }
                    }
                }
                for (const uid of userIds) {
                    result[uid] = result[uid] + 1 || 0;
                }
            }
        } else if (currentEvent[0] === "OFFLINE") {
            const userId = Number(currentEvent[2]);
            offline.add(userId);
            online.delete(userId);
            data[userId] = Number(currentEvent[1]) + 60;

        }

    }
return result
};