/*The scope of a variable is the region of the program in which it is defined. 
A global variable has global scope meaning it is defined everywhere in the JavaScript code. 
A variable declared within a function is defined only within the body of the function and its scope is local to the function. 
Function parameters also count as local variables and are defined only within the body of the function.

Within the body of a function, a local variable takes precedence over a global variable with the same name. 
A local variable or function parameter declared with the same name as a global variable, effectively hides the global variable.*/

let global = 'This is a global variable'; 
function local_Function() {
    let local = 'This is a local variable'; 
}

document.write(global); //Displays 'This is a global variable' since this is in the global space.
document.write(local); //Throws up an 'undefined' error as the 'local' variable is not available in the global space.

/*The document.write statements are present in the global space where they have access to global variables 
but cannot access the local variables*/

//METHOD ASSIGNMENT.

function get_Date() {
    if(new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "Good Evening!";
    } 
    //Note there will be no output displayed when the hours are < 18.
}

//IF STATEMENT ASSIGNMENT.

function leap_Year() {
    if((new Date().getFullYear() % 4) == 0) {
        document.getElementById("Leap").innerHTML = "This is a leap year!"
    }
    //Note there will be no output displayed if the year is not a leap year.
}

//ELSE ASSIGNMENT.
// Function to check if a given number is positive, negative or zero.
function else_Function() {
    var integer;
    //Obtaining integer input from the user.
    integer = document.getElementById("Number").value;
    //Checking if the number is greater than 0 and displaying the outcome.
    if (integer > 0) {
        document.getElementById("Else").innerHTML = "The number is positive.";
    }
    //If the number is not greater than zero.
    else {
        document.getElementById("Else1").innerHTML = "The number is either equal to zero or negative!.";
    }
}