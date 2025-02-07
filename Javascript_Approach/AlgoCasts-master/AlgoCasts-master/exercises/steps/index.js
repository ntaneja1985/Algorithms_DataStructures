// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let i = 1;
//     while( i<=n) {
//         let str = '';
//         for(let j = 0; j<i; j++){
//             str+='#';
//         }
//         let diff = n - str.length;
//         for(let k = 0; k < diff; k++){
//             str += ' ';
//         }
//         console.log(str);
//         i++;
//     }
// }

// function steps(n) {
//     for(let row = 0; row < n; row++){
//         let stair = '';
//         for(let col = 0; col < n; col++){
//             if(col <= row){
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// //Function to print numbers from 1 to 10
// function printNumber(n) {
//     //base case
//     if(n === 0) {
//         return;
//     }
//
//     console.log(n);
//     //Change the arguments to not be in an infinite loop
//     printNumber(n-1);
// }
//
// printNumber(10);


function steps(n, row = 0, stair = '') {
    //if number of steps is equal to number of rows, we have reached end of the program
    if(n === row) {
        return;
    }

    //we have reached the end of the row
    if(n === stair.length) {
        console.log(stair);
        steps(n,row + 1);
        return;
    }

    //if length of stair is less than the row then add '#' else add empty space
    if(stair.length <= row){
        stair+='#';
    } else {
        stair+=' ';
    }

    //call steps again for n = 3, row = 0, stair = '#'
    return steps(n, row, stair);

}

module.exports = steps;
