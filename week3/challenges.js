/*
 *   Code Challenges
 * 
 *   Following the instructions and add the code under the instruction.
 *   
 *   Note: You will need to point this "challenges.js" file to an .html file.
 *         Use the <script src="challenges.js"> tag to include the file.
 *         Place the code in the <script> tag right before the closing </HTML> tag.
 *         https://www.w3schools.com/tags/att_script_src.asp
 */

/*
    Challenge: maxValue

    Given an array of numbers return the largest number in the array.

    note: Solve this without using any built-in array methods.

    [8, 3, 2, 10, 4, 5] => 10 is the largest number

    Input: array of numbers
    Output: largest number (integer)
   
    hint: What is your first largest value? You first need a starting "largest" value. 
          Create an empty variable and set it equal to the first element in the array.
          That will be your starting largest value. Then, loop through the array
          and see if each element is larger than the current largest value.
          If it is, re-assign the variable to the current element in the array.
*/

function maxValue(arr) {
    // return 
}

// tests
console.log(maxValue([1,4,2,4,2])); // 4
console.log(maxValue([9,1,2,4,2])); // 9
console.log(maxValue([8])); // 8

/*
    Challenge: isPrime

    Given a number, return true if it is a prime number, false otherwise.
    A prime number is a number that is only divisible by 1 AND itself.

    0 => return false - 0 cannot be divided by anything
    1 => return false - 1 is only divisible by 1 
    2 => return true - it is a prime number, divisible by 1 and itself
    7 => returns true - is a prime number, only divisible by 1 and itself
    10 => return false - 10 is divisible by 1, 2, 5, 10
   
    Input: number
    Output: true or false (boolean)
      
   hint: 
         Part 1:
         You know 0 and 1 are not prime numbers. So you can check immediately if the number
         is 0 or 1. If it is, then you can return false since it is not a prime number.
         
         Part 2:
         Then you would loop through all the numbers from 2 to the number -1.
           
            for (let i = 2; i <= n -1; i += 1) 
         
         Return false if the number is divisible by any of those numbers.

         Part 3
         If it got through those 2 checks, then it must be a prime number.
         Return true.
   
   you would use the modulo operator.
         If there is no remainder, then the number is prime. 

            7 % 7 === 0; // true
         
         But how do you check if the number is divisible by other numbers?

         Your approach would be to loop through all the numbers from 2 to the number before
         the number you are checking. If any of those numbers returns true, then the number
         is NOT prime. A prime is only divisible by 1 and itself. If it's other numbers
         then it is not.

            8 % 2 === 0; // true => 8 is divisible by 2 so it's not prime

*/

function isPrime(num) {
    // return
}

// tests
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
console.log(isPrime(15)); // false
console.log(isPrime(1)); true

/*
    Challenge: checkPalindrome

    Given a string, check if it is a palindrome.
    A palindrome is a word, phrase, number, or other sequence of characters.

    Input: word or phrase (string)
    Output: true or false (boolean)

    "abbaaa" returns false
    "bob" returns true
    "tent" returns false
    "racecar" returns true
      
   hint: You are comparing the first and last elements by iterating only through
         half of the string (.length), and ignoring decimals (Math.floor).
         Also, make sure you compare characters of the same case (.toLowerCase)

   note: Although you can convert the string to an array using .split("") and then
         use the .reverse() method to  compare the first and last characters, you
         should try to do it with a for loop instead.

*/

function checkPalindrome(str) {
    // return 
}

// tests
console.log(checkPalindrome("aabaa")); // true
console.log(checkPalindrome("abac")); // false 
console.log(checkPalindrome("a")); // true
console.log(checkPalindrome("hlbeeykoqqqqokyeeblh")); // true

/*
    Challenge: adjacentElementsProduct

    Given an array of integers, find the pair of adjacent elements that has 
    the largest product (mulitply) and return that product. 

    For example: inputArray = [3, 6, -2, -5, 7, 3], the output should 21 (7 * 3)

    Input: array of integers
    Output: largest product of adjacent elements (integer)

    hint: You create a starting product (first two element product) comparing
          the product of the next pair, etc. If the next pair is the larger, 
          it becomes the new largest product.
*/

function adjacentElementsProduct(arr) {
    // return 
}

// tests
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21 (7 * 3)
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); // 6 (2 * 3)
console.log(adjacentElementsProduct([[9, 5, 10, 2, 24, -1, -48]])); // 50 (10 * 5)

/*
    Challenge: longestStrings

     Given an array of strings, return an array of the the longest string(s).

     You are given an array of strings, each element is a string. Return and array
     of all of the lonest string(s).

     Example: 
     input: ["aba", "aa", "ad", "cd", "aba"]
     output: ["aba", "aba"]

    Input:  array of strings
    Output: array of the longest strings

    hint: Since you have to return an array of all the longest strings, you first
          have to find the length of longest string, then check which strings 
          match that length. You will need to iterate through the array twice.
          Once to find the longest length, and second to find the longest strings.
          
          Before looping through the array, you would need a variable to store the
          largest length and an empty array to store the longest strings via Array.push(). 

*/

function longestStrings(arr) {
    // return
}

// tests
console.log(longestStrings(["aba", "aa", "ad", "cd", "aba"])); // ["aba", "aba"]
console.log(longestStrings(["a", "aa", "aaa", "aaaa"])); // ["aaaa"]
console.log(longestStrings(["bcd", "aa", "a"])); // ["bcd"]
console.log(longestStrings(["aa"])); // ["aa"]