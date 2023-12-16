//Creating the "argument" for the function.
/* I will use the prompt() method in conjunction with 
the parseInt method to obtain user input.
I start by getting the user integer input as a string and 
placing it in a variable.*/

var msg = prompt("Enter an integer value:");

//Converting the string received from the user into an integer number.

var integer = parseInt(msg);

//Defining the function to determine if a number is even or odd.

function numberCheck(number) {
    
    //Getting the remainder from dividing the number by 2.
    var modulus = integer % 2;
    
    //Defining the number checking process.
    let result;
    if (modulus === 0) {
        result = integer + " " + "is an even number.";
        document.write(result); //Presenting the output.
    } else {
        result = integer + " " + "is an odd number.";
        document.write(result); //Presenting the output.
    }
}

//Calling the function with "integer" as its argument.
numberCheck(integer);

