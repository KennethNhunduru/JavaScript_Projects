//main.js

//TYPEOF OPERATOR ASSIGNMENT.

document.write(typeof "Thierry");

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

document.write(typeof true);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

document.write(typeof 765);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//TYPE COERCION ASSIGNMENT.

//Number to String conversion
/*When any string or non-string value is added to a string, 
it always converts the non-string value to a string implicitly.*/
let x = 10 + '20';
let y = '20' + 10;
/* The Number 10 is converted to a string '10' and then '+'
concatenates both strings.*/

//Displaying the output for variables x and y
document.write("The new string is:" + " " + x);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

document.write("The new string is:" + " " + y);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//String to Number conversion
/*When an operation like Subtraction (-), Multiplication (*), Division (/), or Modulus (%), is performed, 
all the values that are not numbers are converted into the number data type, 
as these operations can be performed between numbers only.*/
let p = 10 - '5';
let q = 10 * '5';
let r = 10 / '5';
let s = 10 % '5';
// The string '5' is converted to number 5 in all cases implicitly

//Displaying the output for the variables: 
document.write("Expression (10 - '5') yields:" + " " + p);

document.write("<br>"); //Introducing a line break.

document.write("Expression (10 * '5') yields:" + " " + q);

document.write("<br>"); //Introducing a line break.

document.write("Expression (10 / '5') yields:" + " " + r);

document.write("<br>"); //Introducing a line break.

document.write("Expression (10 % '5') yields:" + " " + s);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//Boolean to String conversion.
let z = true + '10';
/* The Boolean value true is converted to the string 'true' and then '+'
concatenates both the strings.*/

//Displaying the output for variable z:
document.write("The new string is:" + " " + z);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//INFINITY ASSIGNMENT.

//Displaying positive infinity:
document.write(5E420);

document.write("<br>"); //Introducing a line break.

//Displaying negative infinity:
document.write(-9E420);

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//BOOLEAN ASSIGNMENT.

document.write(15>3 && 33>15); //Note '&&' is the symbol for logical operator AND in JavaScript.

document.write("<br>"); //Introducing a line break.

document.write(5>7 || 20>33); //Note '||' is the symbol for logical opperator OR in JavaScript.

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//'console.log()' ASSIGNMENT.

console.log(5**2); //Result for 5-squared is 25.

//BOOLEAN CHALLENGE.

console.log(! 5>2); //Note '!' is the symbol for logical operator NOT in JavaScript.

//DOUBLE EQUAL SIGNS ASSIGNENT.

//In JavaScript, '==' is a comparison operator, whereas '=' is an assignment operator.

console.log(5 == 5);     // True
console.log(2 == '2');   // True

console.log('kenneth' == 'Kenneth');  // False
console.log(3 == 5); //False

//TRIPLE EQUAL SIGNS ASSIGNMENT.

/*'===' is the symbol for the 'Strict equal to' operator in JavaScript.
The operator checks the data type of the operands in addition to comparing them.
Note that the '==' operator only compares the operands without checking the data type. */

document.write(5 === 5); //Both the data type and value match.

document.write("<br>"); //Introducing a line break.

document.write(5 === 'kenneth'); //Different value and different data type.

document.write("<br>"); //Introducing a line break.

document.write(5 === '5'); //Different data type, but same value.

document.write("<br>"); //Introducing a line break.

document.write(5 === 7); //different value, but same data type.

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//'AND' OPERATOR ASSIGNMENT.

document.write(15>3 && 33>15); //True since both comparison expressions are true.
document.write("<br>"); //Introducing a line break.

document.write(15<3 && 33>15); //False since one of the comparison expressions is false.
document.write("<br>"); //Introducing a line break.

document.write(5<7 || 20>33); //True since one of the comparison expressions is true.
document.write("<br>"); //Introducing a line break.

document.write(5>7 || 20>33); //False since neither comparison expression is true.

document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.

//'NOT' OPERATOR ASSIGNMENT.

//The logical NOT ('!') operator evaluates to true if the operand is false and vice-versa.
document.write(!false); //True
document.write("<br>"); //Introducing a line break.

document.write(!(5>7)); //True
document.write("<br>"); //Introducing a line break.

document.write(!true); //False
document.write("<br>"); //Introducing a line break.

document.write(!(5<7)); //False
document.write("<br>"); //Introducing a line break.
document.write("<br>"); //Introducing a line break.


