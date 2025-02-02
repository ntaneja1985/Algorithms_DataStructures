// See https://aka.ms/new-console-template for more information

using System.Text;

Console.WriteLine("Please enter the string you wish to reverse");
string input = Console.ReadLine();
string reversed = ReverseStringWhileLoop(input);
 Console.WriteLine(reversed);



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
        char temp = charArray[start];
        charArray[start] = charArray[end];
        charArray[end] = temp;
        

        start++;
        end--;
    }

    return new string(charArray);
}