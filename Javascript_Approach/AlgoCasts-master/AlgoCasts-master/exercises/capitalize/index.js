// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     const strings = str.split(' ');
//     for (let i = 0; i < strings.length; i++) {
//         let currentString = strings[i];
//         currentString = currentString.charAt(0).toUpperCase() + currentString.slice(1);
//         strings[i] = currentString;
//     }
//     return strings.join(' ');
// }

function capitalize(str) {
    let result = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;
