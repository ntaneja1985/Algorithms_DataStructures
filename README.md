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