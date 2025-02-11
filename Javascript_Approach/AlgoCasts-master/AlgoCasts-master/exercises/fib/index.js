// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let fibArray = [];
//     if(n === 0){
//         return 0;
//     }
//     if(n === 1){
//         return 1;
//     }
//     let count = 2;
//     fibArray.push(0);
//     fibArray.push(1);
//     while (count <= n){
//         let number = fibArray[count - 1] + fibArray[count - 2];
//         fibArray[count] = number;
//         count++;
//     }
//
//     return fibArray[n];
//
// }

//

// function fib(n, obj = {}) {
//     if(n <= 1){
//         return n;
//     }
//     if(obj[n]){
//         return obj[n];
//     }
//     let result =  fib(n - 1,obj) + fib(n - 2,obj);
//     obj[n] = result;
//     return result;
// }
function memoize(fn) {
    const cache = {};
    return function(...args) {
        debugger;
        if(cache[args]) {
            debugger;
            return cache[args];
        }
        debugger;
        const result = fn.apply(this, args);
        cache[args] = result;
        debugger;
        return result;
    }
}

function fib(n) {
    debugger;
    if(n <= 1){
        return n;
    }
    return fib(n -1) + fib(n - 2);
}

fib = memoize(fib);

//fib(15);
module.exports = fib;
