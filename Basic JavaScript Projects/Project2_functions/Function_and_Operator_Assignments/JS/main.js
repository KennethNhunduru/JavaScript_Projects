//Defining the Concatenation function.
function MyConcatFunction() {
    var str1 = "Greetings Instructors! "; //Declaring the 1st variable.
    var str2 = "I wish you a Merry Christmas!"; //Declaring the 2nd variable.
    document.getElementById("Sample").innerHTML = str1 + str2; //Statement for concatenation output including execution of the expression within the statement.
}

//Defining the Operator function.
function MyOperatorFunction() {
    var greeting = "Greetings Instructors! "; //Declaring the variable.
    greeting += "I wish you a Merry Christmas!"; //Using the += operator for concatenation to the variable.
    document.getElementById("Operator").innerHTML = greeting; //Statement for the greeting output
}