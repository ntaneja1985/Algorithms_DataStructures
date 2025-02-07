# Algorithms and DataStructures
 Algorithms and Data Structures

## Fibonacci Series
- ![alt text](image.png)

## Write a function to reverse a string
```c#
string ReverseString(string s)
{
    char[] charArray = s.ToCharArray();
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < charArray.Length; i++)
    {
        sb.Append(charArray[charArray.Length - i - 1]);
    }
    return sb.ToString();
}

```

- In javascript it can done as follows:

```js
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const reverseArr = str.split('');
    let reversedString = '';
    for (let i = 0; i < reverseArr.length; i++) {
        reversedString += reverseArr[reverseArr.length - 1 - i];
    }
    return reversedString;
}

module.exports = reverse;

```

-  Reverse() function is built into Javascript and C#
-  In javascript we have Array.prototype.reverse().
-  Another technique we can do in javascript is as follows:
```js 
 function reverse(str) {
    let reversedString = "";
    for(let character of str){
        //This wont work if we do reversedString += character coz that is reversedString = reversedString + character
        //initially reversed string is empty, so when we loop over it, then we add each element before the first element
        reversedString  =  character + reversedString;
    }
    return reversedString;
}

```
- Another option in javascript is to do this using the reduce function 
```js 
 function reverse(str) {
    return str.split('').reduce((reversed,character) => {
        reversed = character + reversed;
        return reversed;
    },'');
}

```


- Another technique in C# is as follows which uses while loop and we swap the first and last elements of a string:
```c#
 string ReverseStringWhileLoop(string s)
{
    char[] charArray = s.ToCharArray();
    int start = 0;
    int end = charArray.Length - 1;

    while (start < end)
    {
        //Put it in a temporary variable
        char temp = charArray[start];
        //swap the start and the last elements
        charArray[start] = charArray[end];
        charArray[end] = temp;
        

        //move to the next element from front
        start++;
        //move to the next element from the back
        end--;
    }

    return new string(charArray);
}


```

- We can run a js file with the following commands
```shell
node inspect index.js
# We can hit the debugger then 
# Then we can write 
repl 
# We enter the repl mode and we can inspect variables.
```
- ![alt text](image-1.png)

## Check if a string is palindrome or not 
```js 
 // --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reversedString = str.split('').reduce((reversedString, character) => {
        return character + reversedString;
    },'');
    return str === reversedString
}



module.exports = palindrome;


```

- We can do it using every() helper in ES6 Javascript also 
- ![alt text](image-2.png)
- ![alt text](image-3.png)
```js
 function palindrome(str) {
    return str.split('').every((char,index) => {
        return char === str[str.length-index-1];
    })
}

```


### Using C# we can do it as follows:
```c#
 bool CheckIfPalindromeOrNot(string s)
{
    char[] chars = s.ToCharArray();
    int start = 0;
    int end = chars.Length - 1;
    while (start < end)
    {
        if (chars[start] != chars[end])
        {
            return false;
        }

        start++;
        end--;
    }
    return true;
}

```


## Reverse an integer 
- We can do it in c# as follows:
```c#
 int ReverseInt(int num)
{
    int reversed = 0;
    while (num != 0)
    {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num = num / 10;
    }
    return reversed;
}

```

- In javascript we have a function 
- ![alt text](image-4.png)
- We can do it in javascript as follows: 
```js 
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

```
- An alternative could be done using Math.sign:
```js 
 function reverseIntAlternative(n)
{
    const reversed = n.toString().split('').reverse().join('');
    //Math.sign return 1 if n > 0, if n < 0 then it returns -1
    return reversed * Math.sign(n);
}


```

## Find the Maxchar in a string 
- ![alt text](image-5.png)
- ![alt text](image-6.png)

- In c# we can do it as follows: 
```c#
 char MaxChar(string s)
{
    char[] chars = s.ToCharArray();
    int start = 0;
    Dictionary<char,int> dict = new Dictionary<char,int>();
    while (start < chars.Length)
    {
        if(!dict.ContainsKey(chars[start]))
        {
            dict[chars[start]] = 1;
        }
        else
        {
            dict[chars[start]]++;
        }

        start++;
    }

    // Find the character with the maximum frequency
    char maxChar = '\0';
    int maxCount = 0;

    foreach (var pair in dict)
    {
        if (pair.Value > maxCount)
        {
            maxCount = pair.Value;
            maxChar = pair.Key;
        }
    }

    return maxChar;
}


```
- We can do it in javascript as follows: 
```js 
 function maxChar(str) {
    const charMap = new Map();

    // Count the frequency of each character in the string
    for (let char of str) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    // Find the character with the maximum frequency
    let maxChar = '';
    let maxCount = 0;

    for (let [char, count] of charMap) {
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }

    return maxChar;
}


```
- Alternative way in javascript
- ![alt text](image-7.png)
- This is done using Character Map: ![alt text](image-8.png)
```js
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


```

## Classic FizzBuzz
In C# we can do it like this 
```c#
 void fizzbuzz(int n)
{
    int i = 1;

    while (i <= n)
    {
        if (i % 3 == 0)
        {
            if (i % 5 == 0)
            {
                Console.WriteLine("fizzbuzz");
            }
            else
            {
                Console.WriteLine("fizz");
            }
        }
        else
        {
            if (i % 5 == 0)
            {
                Console.WriteLine("buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }

        i++;
    }
}

```
- In javascript we can do it like this 
```js 
 function fizzBuzz(n) {
let i = 1;
while (i <= n) {
    if(i % 3 === 0) {
        if(i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else {
            console.log("fizz");
        }
    } else {
        if(i % 5 === 0) {
            console.log("buzz");
        } else{
            console.log(i);
        }
    }
    i++;
}
}


```

## Array Chunking
- Problem Statement
```js
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

```
- We can do it in C# as follows: 
```c#
void Chunk(int[] inputArray, int length)
{
    int arrayLength = inputArray.Length;
    int chunkSize  = arrayLength / length;
    List<int[]> chunks = new List<int[]>();
    for (int i = 0; i < inputArray.Length; i += chunkSize)
    {
        int[] chunk = inputArray.Skip(i).Take(chunkSize).ToArray();
        chunks.Add(chunk);
    }
    // Print the chunks as an array with subarrays
    Console.Write("[");
    for (int i = 0; i < chunks.Count; i++)
    {
        Console.Write("[{0}]", string.Join(", ", chunks[i]));
        if (i < chunks.Count - 1)
        {
            Console.Write(", ");
        }
    }
    Console.WriteLine("]");
}

```
 - In javascript we can do so using slice function of arrays: 
 - ![alt text](image-10.png)
```js
 function chunk(array, size) {
let chunks = [];
for (let i = 0; i < array.length; i+=size) {
    let chunk = array.slice(i, i + size);
    chunks.push(chunk);
}
return chunks;
} 


```
- We can do the above using while loop also
- ![alt text](image-11.png)

- If we dont want to use slice, we can use this algorithm also.
- ![alt text](image-9.png)
```js
 function chunk(array,size) {
    let chunked = [];

        for(let elem of array) {
            const last = chunked[chunked.length - 1];
            if(!last || last.length === size) {
                chunked.push([elem]);
            } else {
                last.push(elem);
            }
        }
        return chunked;
}

```
- Another alternative in JS is as follows:
```js 
 function chunk(array,size) {
    let chunked = [];

        let chunk = [];
        for(let elem of array) {
            if(chunk.length < size) {
                chunk.push(elem);
            }
            else {
                chunked.push(chunk);
                chunk = [];
                chunk.push(elem);
            }
        }
        if(chunk.length > 0){
            chunked.push(chunk);
        }
    return chunked;
}


```

## Anagrams
- Problem Statement 
```js
 // --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

```
- Solution in c#
```c#
bool isAnagram(string strA, string strB)
{
    strA = string.Join("", strA.Split(default(string[]), StringSplitOptions.RemoveEmptyEntries));
    strB = string.Join("", strB.Split(default(string[]), StringSplitOptions.RemoveEmptyEntries));

    if(strA.Length != strB.Length)
    {
        return false;
    }

    char[] chars = strA.ToLower().ToCharArray();
    bool result = true;
    Dictionary<char, int> dict = new Dictionary<char, int>();
    foreach(var character in chars)
    {
        if (!char.IsWhiteSpace(character))
        {
            if (dict.ContainsKey(character))
            {
                dict[character]++;
            }
            else
            {
                dict[character] = 1;
            }
        }
      
    }

    char[] charsB = strB.ToLower().ToCharArray();
    Dictionary<char, int> dictB = new Dictionary<char, int>();
    foreach (var character in charsB)
    {
        if (!char.IsWhiteSpace(character))
        {

            if (dictB.ContainsKey(character))
            {
                dictB[character]++;
            }
            else
            {
                dictB[character] = 1;
            }
        }
    }

    foreach(var item in dictB)
    {
        if (dict.ContainsKey(item.Key))
        {
            if (dict[item.Key] != dictB[item.Key])
            {
                return false;
            }
        }
    }

    return result;

}
```
- In javascript we can do it as follows:
```js
function anagrams(stringA, stringB) {
    // Remove any non-alphabetic characters and convert to lowercase
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    // If the lengths are not the same, they cannot be anagrams
    if (stringA.length !== stringB.length) {
        return false;
    }

    // Sort the characters of both strings and compare
    let sortedStr1 = stringA.split('').sort().join('');
    let sortedStr2 = stringB.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

```
- We can also use the charMap method in javascript(similar to dictionary in javascript)
```js
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

```

## Sentence Capitalization
- Problem Statement 
```js
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

```
- Solution in c#
- ![alt text](image-12.png)
```c#
 string CapitalizeString(string str)
{
    string[] strings = str.Split(new char[] { ' ' }, StringSplitOptions.None);
    

    for(int i = 0; i < strings.Length; i++) 
    {
        char[] chars = strings[i].ToCharArray();
        chars[0] = char.ToUpper(chars[0]);
        strings[i] = new string(chars);
    }

    return string.Join(" ", strings);
}

```
- Same logic in Javascript can be done as follows:
```js
 function capitalize(str) {
    const strings = str.split(' ');
    for (let i = 0; i < strings.length; i++) {
        let currentString = strings[i];
        currentString = currentString.charAt(0).toUpperCase() + currentString.slice(1);
        strings[i] = currentString;
    }
    return strings.join(' ');
}

```
- Alternative Solution
- ![alt text](image-13.png)
```js
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

```

## Printing Steps
- Problem Statement 
```js
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


```
- Solution in C#
```c#
void PrintSteps(int n)
{
    int i = 1;
    while(i <= n)
    {
        StringBuilder sb = new StringBuilder();
        for(int j = 0; j < i; j++)
        {
            sb.Append("#");
        }
        Console.WriteLine(sb.ToString());

        i++;
    }
}


```
- Solution in javascript 
- ![alt text](image-17.png)
```js
 function steps(n) {
    for(let row = 0; row < n; row++){
        let stair = '';
        for(let col = 0; col < n; col++){
            if(col <= row){
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}


```
- Solution that i worked on 
```js
function steps(n) {
    let i = 1;
    while( i<=n) {
        let str = '';
        for(let j = 0; j<i; j++){
            str+='#';
        }
        let diff = n - str.length;
        for(let k = 0; k < diff; k++){
            str += ' ';
        }
        console.log(str);
        i++;
    }
}


```
- Solution using Recursion 
- In recursion we need to think of a base case always 
```js 
 //Function to print numbers from 1 to 10
function printNumber(n) {
    //base case
    if(n === 0) {
        return;
    }
    
    console.log(n);
    //Change the arguments to not be in an infinite loop
    printNumber(n-1);
}

printNumber(10); 

```
- ![alt text](image-18.png)
- In recursive solution, when our row is equal to n we have reached the end of the problem 
- ![alt text](image-19.png)
```js
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


```

## Pyramid vs Steps
- Problem Statement 
```js 
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


```
- ![alt text](image-20.png)
- Solution in c#
```c#
void PrintPyramid3(int n)
{
    //calculate midpoint of the row
    int midpoint = Math.Abs(((2 * n) - 1) / 2);
    for (int row = 0; row < n; row++) {
        string level = "";

      for(int col = 0; col < 2 * n - 1; col++ )
        {
            if(midpoint - row <= col && midpoint + row >= col)
            {
                level += "#";
            }
            else
            {
                level += " ";
            }
        }

      Console.WriteLine(level) ;
    }

}


```
- Iterative solution in javascript 
```js 
function pyramid(n) {
    //calculate midpoint of our row
    const midpoint = Math.floor((2 * n - 1) / 2);
    for(let row = 0; row < n; row++) {
        let level = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            //we essential want to put pounds(#) to the left and right of the midpoint
           if(midpoint - row <= col && midpoint + row >= col ) {
               level += '#'
           } else {
               level += ' '
           }
        }
        console.log(level);
    }
}

```
- Recursive solution in javascript 
```js 
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


```


## Find the Vowels
- Problem Statement: 
```js
 // --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

```
- Solution in c#
```c#
 int vowels(string n)
{
    int count = 0;
    char[] vowels = ['a', 'e', 'i', 'o', 'u'];
    foreach (char ch in n.ToLower().ToCharArray())
    {
        if (ch != ' ') {
            if (vowels.Contains(ch))
            {
                count++;
            }
        }
    }

    return count;
}

```

- Solution in javascript
```js
function vowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let character of str.toLowerCase()) {
        if(character !== ' '){
            if(vowels.includes(character)) {
                count++;
            }
        }
    }
    return count;
}


```

## Create a spiral matrix
- Problem Statement
```js
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


```
- Let's consider an example where n = 4. We'll fill a 4 x 4 matrix in a spiral pattern.
- Initialize Variables
- n: Size of the matrix (entered by the user).
- matrix: A two-dimensional array [n, n].
- value: Starts at 1 and increments with each assignment.
- Boundaries:
- top: Starting row index (0).
- bottom: Ending row index (n - 1).
- left: Starting column index (0).
- right: Ending column index (n - 1).
- ![alt text](image-21.png)
- ![alt text](image-22.png)
- ![alt text](image-23.png)
- ![alt text](image-24.png)
- ![alt text](image-25.png)
- ![alt text](image-26.png)
- ![alt text](image-27.png)
- ![alt text](image-28.png)
- ![alt text](image-29.png)
- ![alt text](image-30.png)
- ![alt text](image-31.png)
- ![alt text](image-32.png)
- ![alt text](image-33.png)
- ![alt text](image-34.png)
- ![alt text](image-35.png)
- ![alt text](image-36.png)
- ![alt text](image-37.png)

- Solution using javascript
- ![alt text](image-38.png)
```js
 function matrix(n) {

    const spiralMatrix = [];
    for(let i = 0; i < n; i++) {
        spiralMatrix[i] = [];
        for(let j = 0; j < n; j++) {
            spiralMatrix[i][j] = 0;
        }
    }
    //initial value
    let value = 1;
    //topmost row
    let top = 0;
    //bottom row
    let bottom = n- 1;
    //leftmost column
    let left = 0;
    //rightmost row
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

```