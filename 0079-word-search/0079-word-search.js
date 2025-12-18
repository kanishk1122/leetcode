/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function backtrack(row, col, index) {
        if (index === word.length) return true; 
        if (row < 0 || col < 0 || row >= rows || col >= cols) {
            return false
        }
        if (word[index] !== board[row][col]) return false;
        let temp = board[row][col]
        board[row][col] = "#"
        let found = backtrack(row + 1, col, index + 1) ||
                    backtrack(row - 1, col, index + 1) ||
                    backtrack(row, col + 1, index + 1) ||
                    backtrack(row, col - 1, index + 1);

        board[row][col] = temp
        return found
    }

       for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false
};
