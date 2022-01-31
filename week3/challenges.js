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
    Challenge centuryFromYear

    Given a year, return the century it is in. The first century spans 
    from the year 1 up to and including the year 100, the second - from the year 101
    up to and including the year 200, etc.

    Input: year (integer)
    Output:  number of the century the year is in  (integer)

    For year = 1905, the output should be solution(year) = 20
    For year = 1700, the output should be solution(year) = 17
      
    hint: research the Math.ceil() function

*/


function centuryFromYear(year) {
    // return 
}

// tests
console.log(centuryFromYear(1985));
console.log(centuryFromYear(2022));

/*
    Challenge checkPalindrome

    Given the string, check if it is a palindrome.
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
    Challenge adjacentElementsProduct

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
    Challenge matrixElementsSum

     Given a matrix, a rectangular matrix of integers, return the total sum of all elements
     that are less than a given value (number).

     A 2-D (2-dimensional) array is an array of arrays. 
       - Each element in the outer array is an array and can be called a sub-array.
       - You would need to create a nested loop (for loop within a for loop) 
         to iterate through each value of each sub-array
       - The outer array you iterate through can be called the row and the inner array
         can be called the column. 
       - Shown as: array[i][j]: i is the row, j is the column

     A matrix is a math construct that is similar to a grid and is often used to represent 
        a rectangular array of numbers. It is a common interview algo problem.

     matrix = [
               [4, 33, 14, 2], 
               [3, 5, 22, 12], 
               [20, 14, 3, 5]
             ]

     https://www.youtube.com/watch?v=CDpJ4PIWAlE

    Input:  matrix (2-D array of integers), number (integer)
    Output: sum of all elements of matrix under number (integer)

    hint: We know you loop through each element in a 1-dimensional array, so now that
          each element is an array, we just have to add another loop to iterate through
          each element in the sub-array. We validate the element is less than the number
          and add it to a sum variable we create outside the loop.

*/

function matrixElementsSum(matrix, number) {
    // return 
}

// tests
console.log(matrixElementsSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(matrixElementsSum([[9, 23, 2], [17, 18, 16], [3, 1, 0]], 17)); // 15 (9 + 2 + 3 + 1 + 0)


/*
    Challenge longestStrings

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