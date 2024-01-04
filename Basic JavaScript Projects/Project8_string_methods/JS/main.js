//CONCAT() METHOD ASSIGNMENT.

//Defining the function.
function concat_Function() {
    var section_1 = "Strings in JavaScript ";
    var section_2 = "are immutable, ";
    var section_3 = "so the concat() function ";
    var section_4 = "does not modify ";
    var section_5 = "the string in place.";
    var Sentence = section_1.concat(section_2, section_3, section_4,section_5);
    document.getElementById("Modified").innerHTML = Sentence //Sending the function output to the browser.
}

//SLICE() METHOD ASSIGNMENT.
/*The slice() method takes two parameters that specify which characters in your string will be cut out and displayed.
The first parameter is the mandatory and specifies start position for the extraction to take place. 
The second parameter is optional and specifies the position up to, but not including where the extraction ends.
If we omit this parameter, the sliced substring goes from start position to the end of the string.*/

//Defining the function.
function slice_Function() {
    var Str = "I want my slice of the cake from the whole!";
    var Slice = Str.slice(7, 28); //Start slice at 7th character and end at 28th character.
    document.getElementById("Get_Slice").innerHTML = Slice
}

//MORE METHODS CHALLENGE.

//TOUPPER-CASE() METHOD.
/*The built-in way of capitalizing strings in JavaScript is using the toUpperCase() function, 
which capitalizes the whole string.*/

function upcase_Function() {
    let string = 'my name is kenneth edison nhunduru';
    var output = string.toUpperCase();
    document.getElementById("Upper").innerHTML = output;
}

//SEARCH() METHOD
/*The search() method searches a string for a specified value, and returns the position of the first match.
The search value can be a string or a regular expression.
If string is provided as an input parameter, it will be automatically converted to a regular expression. 
The method returns -1 if no match is found.*/

function search_Function() {
    let str = 'My hometown is the beautiful City of Mutare in the eastern highlands!';
    let index = str.search('Mutare');
    document.getElementById("Finding").innerHTML = index;
}

//NUMBER METHODS ASSIGNMENT.

//TOSTRING() METHOD.
/*The toString() method in JavaScript converts a value to a string. 
This method is available for all JavaScript objects and data types and 
provides a standardized way to represent the value as a string.*/

//Converting a number to a string
function tostr_Function() {
    let num = 1867;
    let strnum = num.toString();
    document.getElementById("Tostr").innerHTML = strnum;  
}

//TOPRECISION METHOD ASSIGNMENT.
/*The JavaScript Number toPrecision( ) method is used to format a number to a specific precision or length. 
If the formatted number requires more digits than the original number then 
decimals and nulls(zeros) are also added to create the specified length. 
If the length of precision passed to the toPrecision() method is smaller than the original number then 
the number is rounded off to that precision.*/

function precise_Function(){
    let num = 783.74658353;
    let precise_num = num.toPrecision(6);
    document.getElementById("Precise").innerHTML = precise_num;
}

//NEW METHOD CHALLENGE.

//TOFIXED() METHOD.
/*JavaScript Number toFixed() method is used to format a number using fixed-point notation.
It is used to format a number with a specific number of digits to the right of the decimal. 
The toFixed() method accepts a single parameter value that signifies the number of digits to appear after the decimal point.
The method will return a number represented as a string which will have exactly that number of digits after the decimal place.
If there is no parameter specified in the toFixed() method, then it doesn’t display any digits after the decimal place.*/

function tofixed_Function() {
    let test_num = 263.7549686979;
    let fixed_num = test_num.toFixed(3);
    document.getElementById("Tofixed").innerHTML = fixed_num;
}

//VALUEOF() METHOD.
/*JavaScript String valueOf() method is an inbuilt method in JavaScript that is used to return the value of the given string. 
The valueOf() method returns the primitive value of a string. 
It does not modify the original string. 
It does not accept any parameter and returns a string that represents the value of the given string object.*/

function valueof_Function() {
    let val_num = 783;
    let p = val_num.valueOf();
    document.getElementById("Primitive").innerHTML = p;
}