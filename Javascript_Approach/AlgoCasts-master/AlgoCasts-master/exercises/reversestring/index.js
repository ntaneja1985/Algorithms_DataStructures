// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const reverseArr = str.split('');
//     let reversedString = '';
//     for (let i = 0; i < reverseArr.length; i++) {
//         reversedString += reverseArr[reverseArr.length - 1 - i];
//     }
//     return reversedString;
// }

// function reverse(str) {
//     let reversedString = "";
//     for(let character of str){
//         //This wont work if we do reversedString += character coz that is reversedString = reversedString + character
//         reversedString  =  character + reversedString;
//     }
//     return reversedString;
// }

function reverse(str) {
    return str.split('').reduce((reversed,character) => {
        reversed = character + reversed;
        return reversed;
    },'');
}

module.exports = reverse;
