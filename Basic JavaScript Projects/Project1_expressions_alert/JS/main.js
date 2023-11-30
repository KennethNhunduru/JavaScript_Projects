//This is the main.js JavaScript file which is an external file to the HTML file
//This external script file has been used by referencing it in the index.html file.
//This has been achieved by putting the name of the script file in the src (source) attribute of a <script> tag. 

//The main.js file highlights the window.alert and document.write methods that offer two output alternatives for JavaScript.
//JavaScript can also display data by writing it into an HTML element, using innerHTML.
//JavaScript can also display data by writing it into the browser console, using console.log().

//window.alert method sends its output to a pop-up window.
window.alert("Hello, World!");

//document.write method sends its output to the browser.
document.write("Here We Go! ");

//Assigning a string to a variable.
var A = "This is a String. ";
document.write(A); //Output to the browser.

var B = "The More the Merrier!";
window.alert(B); //Output to a pop-up window.

//Realising punctuation marks as JavaScript output using the backslash symbol.
var C = "That\'s the meaning when she says \"I\'m going to discuss with them.\""; 
window.alert(C);

//Examples of concatenation of strings
document.write("We, the not-so-enlightened, " + "led by the so-called enlightened, " + "have achieved very little to show for the brains of the enlightened! "); //Joins three strings into one string (concatenation).

var D = ("This STRING " + "is concantenated. "); //Joins two strings into one string.
document.write(D);

var Sent1 = "This is the beginning of the string ";
var Sent2 = "and the end of the string. ";
//Concatenation of the strings using the document.write method.
document.write(Sent1 + Sent2);

//Declaration of multiple variables on a single line.
var Dad = "Baba", Mum = "Amai", Children = "Vana", Grandfather = "Sekuru", Grandmother = "Ambuya"; 
//Output of one of the variables using the document.write method.
document.write(Mum);

//An expression is any unit of code that can be evaluated to a VALUE.
//Note the distinction from a statement which is an INSTRUCTION to perform a specific action.
//The following is an example of an expression.

alert(3 +12); //Requests output of expression in the brackets in a pop-up window.

//Note window keyword has been omitted from the window.alert method.
//In JavaScript, the window object is the global scope object. 
//This means that variables, properties, and methods by default belong to the window object.
//This then means that specifying the window keyword is optional.