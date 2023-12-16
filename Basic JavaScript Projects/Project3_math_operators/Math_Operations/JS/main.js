//Declaring the addition function.
function sumFunc(a,b) {
    return a + b;
}
// Assign values to x and y
let x = 10;
let y = 3;

document.getElementById("Math").innerHTML = "10 + 3 =" + " " + sumFunc(x,y);

//Declaring the subtraction function.
function differenceFunc(a,b) {
    return a - b;
}
// Assign values to x1 and y1
let x1 = 20;
let y1 = 4;

document.getElementById("Math1").innerHTML = "20 - 4 =" + " " + differenceFunc(x1,y1);

//Declaring the multiplication function.
function productFunc(a,b) {
    return a * b;
}
// Assign values to x2 and y2
let x2 = 30;
let y2 = 6;

document.getElementById("Math2").innerHTML = "30 * 6 =" + " " + productFunc(x2,y2);

//Declaring the division function.
function quotientFunc(a,b) {
    return a / b;
}
//Assign values to x3 and y3
let x3 = 40;
let y3 = 8;

document.getElementById("Math3").innerHTML = "40 / 8 =" + " " + quotientFunc(x3,y3);

//Multiple math operations

/*Exponentiations are executed before multiplications.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
When parentheses are used, expressions in parentheses are processed first.
Operations with the same precedence (like * and /) are computed from left to right.
Functions are executed before the result is used in the rest of the expression.
Assignments are executed after other operations.*/

//Example of a multiple math operation is as follows: 
//Goal is to solve expression = (3 * (10 / (6 - 4))) + 2 

//first step is to solve the inner-most bracket
let z = differenceFunc(6,4); //expression becomes (3 * (10 / z)) + 2 

//second step is to solve the next inner-most bracket
let z1 = quotientFunc(10,differenceFunc(6,4)); //expression becomes (3 * z1) + 2 

//third step is to solve the last racket
let z2 = productFunc(3,quotientFunc(10,differenceFunc(6,4))); //expression becomes z2 + 2

//Final step is to add the two numbers
let result = sumFunc(productFunc(3,quotientFunc(10,differenceFunc(6,4))),2);

//Displaying the result of solving the expression
document.write("The solution for the expression is:" + " " + result);

//document.write("<br>"); //Introducing a line break
//document.write("<br>"); //Introducing a line break

//Defining the function that finds the remainder from a division operation
function moduloFunc(a,b) {
    return a % b;
}

//Processing the arguments for the function
let x4 = 50;
let y4 = 9;

//Calling the function and displaying the result
document.getElementById("Math4").innerHTML = "The remainder from dividing 50 by 9 is:" + " " + moduloFunc(x4,y4);

//Defining the NEGATION function
function negationFunc(a) {
    return -a;
}

//Processing the argument for the function
let x5 = 10;

//Calling the function and displaying the result
document.getElementById("Math5").innerHTML = "The negated value of 10 is:" + " " + negationFunc(x5);

//Defining the increment function
function incrementFunc(a) {
    return ++a; //Note the symbols have to be "prefix" in a function for correct output
}

//Processing the argument for function
var x6 = 12;

document.getElementById("Math6").innerHTML = "The incremented value of 12 is:" + " " + incrementFunc(x6);

//Defining the decrement function
function decrementFunc(a) {
    return --a; //Note symbols have to be "prefix" in a function for correct output
}

//Processing the argument for the function
var x7 = 15;

document.getElementById("Math7").innerHTML = "The decremented value of 15 is:" + " " + decrementFunc(x7);

//Defining the function for generating a random number between 0 and 1
function random1Func() { 
    return Math.random();
}

//Calling the function and displaying the output
document.getElementById("Math8").innerHTML = "The random number between 0 and 1 is:" + " " + random1Func();

//Defining the function for generating a random number between 0 and 100
function random2Func() { 
    return Math.random() * 100;
}

//Calling the function and displaying the output
document.getElementById("Math9").innerHTML = "Random number between 0 and 100 is:" + " " + (Math.random() * 100);

/*This next example shows the utilisation of a Math Object and Math Object Method.
The Math Object is Math.PI which is a constant with a value = 22/7
The Math Object Method is Math.pow(r,2) which returns the value of r to the power of 2.*/

//Defining the function that calculates the area of a circle of radius r
function circleArea(r) {
    return Math.PI * Math.pow(r,2);
}

//InitiaLising the argument for the function for a circle of raadius 10cm
let x8 = 10;

//Calling the function and displaying the result
document.getElementById("Math10").innerHTML = "The area of the circle of radius 10cm is:" + " " + circleArea(x8) + "sqcm";