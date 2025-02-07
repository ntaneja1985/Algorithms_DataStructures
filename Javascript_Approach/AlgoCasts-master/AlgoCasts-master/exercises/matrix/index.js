// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const spiralMatrix = [];
    for(let i = 0; i < n; i++) {
        spiralMatrix[i] = [];
        for(let j = 0; j < n; j++) {
            spiralMatrix[i][j] = 0;
        }
    }
    let value = 1;
    let top = 0;
    let bottom = n- 1;
    let left = 0;
    let right = n-1;
    while(value <= n * n) {
        //move from left column to right column
        for(let i = left;i<=right;i++) {
            spiralMatrix[top][i] = value++;
        }
        top++;

        //move from top to bottom row
        for(let i = top; i <=bottom;i++) {
            spiralMatrix[i][right] = value++;
        }
        right--;
        //move from right to left column
        for(let i = right;i >=left;i--) {
            spiralMatrix[bottom][i] = value++;
        }
        bottom--;
        for(let i = bottom;i>=top;i--) {
            spiralMatrix[i][left] = value++;
        }
        left++;
    }
   return spiralMatrix;

}

//matrix(3);
module.exports = matrix;
