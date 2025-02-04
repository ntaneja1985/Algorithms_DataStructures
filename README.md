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