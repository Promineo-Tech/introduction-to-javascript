/*
 *   Expression vs Statement
 *      - Statement: Performs an action that evaluates (not true or false) to nothing.
 *        var age = 39;
 *        Whereever JS expects a statemment, you can put an expression.
 * 
 *      - Expression: A value that can be evaluated to a value; uses an operator
 *        age = 39; (assignment expression;  age is evaluated to 39)
 *        age = 1 + (age * 2); => 6 total expressions 
 *           - 2 is a literal expression
 *           - 1 is a literal expression
 *           - age is a variable expression
 *           - (age * 2) is an arithmetic expression      
 *           - 1 + (age * 2) is an artithmetic expression
 *           - age = 1 + (age * 2) is an artithmetic expression
 *        - You cannot use an expression as a statement.
 * 
 *   Conditional statements use comparison operators (> < >= <= == === !==)
 *       - Greater/less than: a > b, a < b
 *       - Greater/less than or equals: a >= b, a <= b
 *       - Equals: a == b, double
 *         -  == means the equality test (a == 5)
 *         -  = means an assignment (a = "5")
 *                             
 *   The result of a conditional statement is either true or false (boolean).
 *      - console.log(2 > 1); // true
 *      - console.log(2 < 1); // false
 *      - console.log(2 >= 2); // true
 * 
 *   Type coercion: Process of converting one type to another (String, Number or Booklean).
 *      - implicit coercion: JS converts a value to a different type under the hood.
 *      - explicit coercion: Use a built-in function to convert a value to a different type.
 * 
 *   Truthy and Falsy
 *    - Falsy: false, 0, null, undefined, NaN, ""
 *    - Truthy: All values are truthy unless they are defined as falsy
 *   
 *   if ... else statements
 * 
 *    if (condition) {
 *        // code to execute if condition is true
 *      } else {
 *        // code to execute if condition is false
 * 
 *   
 * 
 *      
 * 
 * 
 * 
 * 
 * 
 */

// true or false?
console.log("2 != 2:", 2 !=2); // false (Is 2 not equal to 2?)
console.log("2 == 2:", 2 == 2); // true (Is 2 equal to 2?)

// string comparison
console.log("\"2\" == 2:", "2" == 2); // true, but why?
console.log("\"Tom\" == \"TOM\":", "Tom" == "TOM"); // false, but why?

// type coercion (implicit)
// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
console.log("2 == \"2\":", 2 == "2"); // JavaScript converts the string "2" to a number 2.

// type coercion (explicit) using Number() or Boolean() or String()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
console.log(Number("2")); // 2
console.log(String(34)); // "34"
console.log(String(0)); // "0"
console.log(String(null)); // "null"
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false



