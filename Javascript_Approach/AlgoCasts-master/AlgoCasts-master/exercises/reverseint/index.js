// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
    let isNegative = num < 0;
    num = Math.abs(num);

    let reversed = 0;

    while (num !== 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    if(isNegative) {
        reversed = -reversed;
    }

    return reversed;
}

function reverseIntAlternative(n)
{
    const reversed = n.toString().split('').reverse().join('');
    //Math.sign return 1 if n > 0, if n < 0 then it returns -1
    return reversed * Math.sign(n);
}

module.exports = reverseInt;
