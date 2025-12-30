/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const heap = new MaxHeap();

    for (let s of stones) {
        heap.push(s);
    }

    while (heap.size() > 1) {
        let y = heap.pop();
        let x = heap.pop();

        if (y !== x) {
            heap.push(y - x);
        }
    }

    return heap.size() ? heap.pop() : 0;
};