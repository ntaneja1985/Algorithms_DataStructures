// See https://aka.ms/new-console-template for more information

using System.Text;

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

Console.WriteLine("Run Chunking of Array");
Chunk([1, 2, 3, 4,5], 2);
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