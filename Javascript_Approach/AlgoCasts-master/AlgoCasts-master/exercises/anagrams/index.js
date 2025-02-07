// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     // Remove any non-alphabetic characters and convert to lowercase
//     stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//
//     // If the lengths are not the same, they cannot be anagrams
//     if (stringA.length !== stringB.length) {
//         return false;
//     }
//
//     // Sort the characters of both strings and compare
//     let sortedStr1 = stringA.split('').sort().join('');
//     let sortedStr2 = stringB.split('').sort().join('');
//
//     return sortedStr1 === sortedStr2;
// }

function anagrams(stringA, stringB){
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length ){
        return false;
    }

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
}

function buildCharMap(str){
    const charMap = {};
    for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    return charMap;
}

module.exports = anagrams;
