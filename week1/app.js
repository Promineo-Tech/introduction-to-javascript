/*
 *   Primitive Values
 *    - Undefined (undefined), used for unintentionally missing values.
 *    - Null (null), used for intentionally missing values.
 *    - Booleans (true and false), used for logical operations.
 *    - Numbers (-100, 3.14, and others), used for math calculations.
 *    - BigInts (uncommon and new), used for math on big numbers.
 *    - Strings ("hello", "abracadabra", and others), used for text.
 * 
 *     * Primitive Values are immutable (unchangeable) *
 *     
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 * 
 *    Non-Primitive Values: Arrays, Objects and Functions
 *    - Arrays ([]), used for lists of values.
 *    - Objects ({}), used for key-value pairs.
 *    - Functions (function() {}), used for code blocks.
 * 
 *    Checking the type of a value:
 *    - typeof
 *    - note: null is not an object, it's a primitive (bug from first iteration of JavaScript)
 *              https://2ality.com/2013/10/typeof-null.html
 *    
 *    Expressions (piece of code that expresses a value)
 *      - Expressions are questions that JavaScript can answer. 
 *        JavaScript answers expressions in the only way it knows how—with values.
 * 
 *         - Assignment: https://www.w3schools.com/js/js_assignment.asp
 *         - Arithmetic: https://www.w3schools.com/js/js_arithmetic.asp
 *         - Logical and Comparison: https://www.w3schools.com/js/js_comparisons.asp
 *   
 *    JavaScript is a loosely typed language.
 *      -  You don't specify what type of value
 *      - This is also known as dynamic typing.
 * 
 *        https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing
 */

var a = 10;
var b = a;
a = 0;

console.log("a is equal to:", a)
console.log("b is equal to:", b)
// Why is b still equal to 10?

console.log("The number 1 is a", typeof 1);
console.log("The string \"superbowl\" is", typeof "superbowl");
console.log("The boolean true is", typeof true);
console.log("The null value is", typeof null);

/*
 *  Primitive values are immutable (not variables)
 *   - Variables are not values.
 *   - Variables point to values.
 *  
 *   A variable is a wire that points to a value.
 */

var pet = 'Narwhal'; // the variable pet points to the string 'Narwhal'
pet = 'The Kraken'; // the variable pet now points to the string 'The Kraken'
console.log("pet is:", pet); 

/* 
 *  Rules of Assignment
 * 
 *  Rule 1: The left side of an assignment must be a “wire”
 *  
 *  Rule 2: The right side of an assignment must be an expression, 
 *          so it always results in a value.
 * 
 */

var num1 = 2; // 2 is a literal expression that evaluates to a value of 2
var num2 = 3; // 3 is a literal expression that evaluates to a value of 3
var sum = num1 + num2; // num1 and num2 is an expression which evaluates to a value of 5

/*
 *  console.log is a function that takes a string and a value
 *  
 *    - The console is an object that has a log method.
 *    - The conosle object is an object that has many methods.
 *    - The console object is available from the Console API
 *    - The Console API is part of the Web Workers API
 *    - All these APIS are only part of the browser.
 *    - https://developer.mozilla.org/en-US/docs/Web/API/Console/log
 * 
 *    We use console.log to print out values of variable for debugging.
 *    console.log(pet); // passing the value (not variable) of pet to console.log 
 * 
 *    Why does this matter? You will see in later lessons. 😀
 */ 

// Is this code valid?

let numberOfTentacles = 10;
numberOfTentacles = 'eight';
console.log(typeof numberOfTentacles);


