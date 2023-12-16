// This program adds two numbers.
// Declaring the function.
function addFunc(a, b) {
    return a + b;
}

// Acquiring input from the user.
let number1 = parseFloat(prompt("Enter first number: ")); //Global  Scope variable
let number2 = parseFloat(prompt("Enter second number: ")); //Global Scope variable

// Calling function.
let result = "The sum is" + " " + addFunc(number1,number2);

// Displaying the result.
document.getElementById("sample").innerHTML = result;
