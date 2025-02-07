// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let totalColumnLength = 2 * n - 1;
//     for(let row= 1; row <= n; row++){
//         let level = '';
//         for(let col= 1; col <= n- row; col++){
//             level += ' ';
//         }
//         for (let k = 1; k <= 2 * row - 1; k++)
//         {
//             level += '#';
//         }
//         if(level.length < totalColumnLength){
//             let diff = totalColumnLength - level.length;
//             for(let i = 0;i < diff;i++){
//                 level+=' ';
//             }
//         }
//         console.log(level);
//     }
// }

function pyramid(n, row = 0, level = '') {
    if(row === n){
        return;
    }

    if(level.length === 2 * n - 1){
        console.log(level);
        pyramid(n,row + 1);
        return;
    }

    //find the midpoint
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    //look to the left and right of midpoint
    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }
    return pyramid(n, row, level + add);
}

// function pyramid(n) {
//     //calculate midpoint of our row
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for(let row = 0; row < n; row++) {
//         let level = '';
//         for (let col = 0; col < 2 * n - 1; col++) {
//             //we essential want to put pounds(#) to the left and right of the midpoint
//            if(midpoint - row <= col && midpoint + row >= col ) {
//                level += '#'
//            } else {
//                level += ' '
//            }
//         }
//         console.log(level);
//     }
// }

module.exports = pyramid;
