// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const charMap = new Map();
//
//     // Count the frequency of each character in the string
//     for (let char of str) {
//         if (charMap.has(char)) {
//             charMap.set(char, charMap.get(char) + 1);
//         } else {
//             charMap.set(char, 1);
//         }
//     }
//
//     // Find the character with the maximum frequency
//     let maxChar = '';
//     let maxCount = 0;
//
//     for (let [char, count] of charMap) {
//         if (count > maxCount) {
//             maxCount = count;
//             maxChar = char;
//         }
//     }
//
//     return maxChar;
// }]

function maxChar(str){
    const chars = {};

    //used to iterate through an array or string
    for(let character of str){
        //chars[character] = chars[character] + 1 || 1;
        if(!chars[character]){
            chars[character] = 1
        } else {
            chars[character]++;
        }
    }

    let maxCount = 0;
    let maxKey = '';

    //used to iterate through an object
    for(let key in chars)
    {
        if(chars[key] > maxCount){
            maxCount = chars[key];
            maxKey = key;
        }
    }

    return maxKey;
}

module.exports = maxChar;
