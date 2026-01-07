/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length <= 2) {
        return false
    }
    let stack = []
    let inclining = true
    let tophill = 0
    let lasthill = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (inclining) {
            if (arr[tophill] < arr[i]) {
                tophill = i
            }
            if (lasthill < arr[i]) {
                lasthill = arr[i]
            } else if (
                lasthill > arr[i]
            ) {
                lasthill = arr[i]
                inclining = false
            } else {
                return false
            }
        } else {
            if (lasthill > arr[i]) {
                lasthill = arr[i]
            } else {
                return false
            }
        }
    }
    console.log(tophill)
    return inclining ? false : tophill == 0 ? false : true
};
