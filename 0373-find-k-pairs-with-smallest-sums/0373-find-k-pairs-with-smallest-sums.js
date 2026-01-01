/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    if (!nums1.length || !nums2.length || k === 0) return [];
    let minheap = new MinPriorityQueue(x => x.sum);
    let result = []
    let n = Math.min(k, nums1.length)
    for (let i = 0; i < n; i++) {
        minheap.push({
            sum: nums1[i] + nums2[0],
            i,
            j: 0
        });
    }

    while (k > 0 && !minheap.isEmpty()) {
        const { i, j } = minheap.pop();
        result.push([nums1[i], nums2[j]]);
        k--;

        if (j + 1 < nums2.length) {
            minheap.push({
                sum: nums1[i] + nums2[j + 1],
                i,
                j: j + 1
            });
        }
    }

    return result
};
