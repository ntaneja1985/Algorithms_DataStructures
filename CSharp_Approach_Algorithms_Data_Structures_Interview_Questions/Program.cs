// See https://aka.ms/new-console-template for more information

using System.Reflection.Emit;
using System;
using System.Runtime.InteropServices;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

//Console.WriteLine("Please enter the string you wish to reverse");
//string input = Console.ReadLine();
//string reversed = ReverseStringWhileLoop(input);
// Console.WriteLine(reversed);

//Console.WriteLine("Please enter the string you wish to check for palindrome");
//string input = Console.ReadLine();
//Console.WriteLine(CheckIfPalindromeOrNot(input));
//Console.ReadKey();

//Console.WriteLine("Please enter the number you wish to reverse");
//string input = Console.ReadLine();
//int reversed = ReverseInt(Convert.ToInt32(input));
//Console.WriteLine(reversed);

//Console.WriteLine("Please enter the string you wish to find max char for");
//string input = Console.ReadLine();
//char maxChar = MaxChar(input);
//Console.WriteLine(maxChar);

//Console.WriteLine("Please enter the number for fizzbuzz");
//string input = Console.ReadLine();
//fizzbuzz(int.Parse(input));
//Console.ReadLine();

//Console.WriteLine("Run Chunking of Array");
//Chunk([1, 2, 3, 4,5], 2);
//Console.ReadLine();

//Console.WriteLine("Check if anagrams or not");
//bool result = isAnagram("Hi there", "Bye there");
//Console.WriteLine(result);
//Console.ReadLine();

//Console.WriteLine("Please enter the string to capitalize");
//string input = Console.ReadLine();
//string capitalized = CapitalizeString(input);
//Console.WriteLine(capitalized);
//Console.ReadLine();

//Console.WriteLine("Enter the number to print the steps for");
//string input = Console.ReadLine();
//PrintSteps(int.Parse(input));
//Console.ReadLine();

//Console.WriteLine("Enter the number to print the pyramid for");
//string input = Console.ReadLine();
//PrintPyramid3(int.Parse(input));
//Console.ReadLine();

//Console.WriteLine("Enter the string to count the vowels");
//string input = Console.ReadLine();
//Console.WriteLine(vowels(input));
//Console.ReadLine();

Console.WriteLine("Enter the size of the spiral matrix");
string input = Console.ReadLine();
PrintSpiralMatrix(int.Parse(input));
Console.ReadLine();







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

void PrintPyramid(int n)
{
    for (int i = 1; i <= n; i++)
    {
        // Print spaces
        for (int j = 1; j <= n - i; j++)
        {
            Console.Write(" ");
        }
        // Print pound
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            Console.Write("#");
        }
        // Move to the next line
        Console.WriteLine();
    }
}

void PrintPyramid2(int n, int row = 0, string level = "")
{

    if (row == n)
    {
        return;
    }

    if (level.Length == 2 * n - 1)
    {
        Console.WriteLine(level);
        PrintPyramid2(n, row + 1);
    }

    if (level.Length < n - row)
    {
        level += " ";
    }
    else
    {
        level += "#";
    }
    PrintPyramid2(n, row, level);
}

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

void PrintSpiralMatrix(int n)
{
    int value = 1;
    int[,] matrix = new int[n, n];
    //initialize the first row
    int top = 0;
    //initialize the last row
    int bottom = n - 1;
    //initialize the first column
    int left = 0;
    //initialize the last column
    int right = n - 1;

    while(value < n * n)
    {
        //Move across the first row from 1st column to last column
        for(int i = left; i <= right; i++)
        {
            matrix[top, i] = value++;
        }
        //Move to the next row
        top++;

        //Move downwards from the last column to the last row
        for(int i = top; i <= bottom; i++)
        {
            matrix[i, right] = value++;
        }
        //Move to the righter side column
        right--;

        //Move left from the second last column to the first column in the last row
        for(int i = right; i >= left; i--)
        {
            matrix[bottom, i] = value++;
        }
        //Move to the 2nd last row from the bottom
        bottom--;

        //Move up from the first column towards the top
        for(int i = bottom; i >= top; i--)
        {
            matrix[i, left] = value++;
        }
        //Move to the 2nd column
        left++;

    }

    //Print the matrix
    for(int i = 0; i < n; i++)
    {
        for(int j = 0; j< n; j++)
        {
            Console.Write(matrix[i, j] + "\t");
        }
        Console.WriteLine();
    }
}