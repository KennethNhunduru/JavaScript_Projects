//WHILE_LOOP ASSIGNMENT.
//Program to find the sum of all numbers between 0 and 10

let num = 0;
let sum = 0;

function Call_Loop() {
    
    while(num <= 10) {
        // add all the numbers.
        sum += num;
        num++ ;
    }

    // display the output.
    alert(document.getElementById("Loop").innerHTML = sum);
}

//FOR_LOOP ASSIGNMENT.
//Program for counting the number of characters in each of the elements of an array.

function for_Loop() {
    let family = ["Inviolata", "Bridget", "Judith", "Benhilda", "Laura"];
    let fam_len;
    for(let i = 0; i < family.length; i++) {
        fam_len = (family[i].length);
        document.write(fam_len + "<br>");
    }
}

//DOCUMENT.GETELEMENTBYID ASSIGNMENT.
//Program to output one element of an array.

function array_Function() {
    let colors = ["crimson", "navy", "purple", "torquoise", "black", "khaki"];
    document.getElementById("Array").innerHTML = colors[3]
}

//CONST_KEYWORD ASSIGNMENT.

//Creating an object using the const keyword.
/*JavaScript object is a non-primitive data-type that allows storage of multiple collections of data.
Each member of the object is a "key: value" pair separated by commas and enclosed in curly braces {}.
In JavaScript, the "key: value" pairs are called properties*/

const student = {
    fname: 'Binta',
    lname: 'Kinte',
    age: 25,
    isActive: true,
    email: 'bintak@gmail.com'
};

/*Accessing the Object property values through the property keys using the dot notation:
Creating a function that will display at least one string value of the object properties.*/

function constant_Function() {
        document.getElementById("Constant").innerHTML = student.fname + " " + student.lname + " is " + student.age + " years old.";
}

/*Properties of an object in JavaScript can be changed, deleted, and even added dynamically 
even after the object has been created. This can be achieved through many ways that include 
using dot notation, and using bracket [ ] notation, among others.*/

//Example code to demonstrate the use of dot notation method in JavaScript

//Modifying the value of the age property from 25 to 31 using the dot notation:
student.age = 31;

//Adding new property gender with assigned value as 'Female' using dot operator in JavaScript.
student.gender = 'Female'

//Displaying a string that includes the added property value and the changed property value.
function constant1_Function() {
    document.getElementById("Constant1").innerHTML = 
    student.fname + " is a " + student.age + "year old " + student.gender + ".";
}

//LET_KEYWORD ASSIGNMENT.
/*The keywords let and var both declare new variables in JavaScript. 
The difference between let and var is in the scope of the variables they create: 
variables declared using the let in JavaScript are block scoped, and
variables declared using the var in JavaScript are function scoped.*/

//Program to print the text
//Variable "g" cannot be used here outside the function.
function greeting() {
    let g = 'How are';

    //Variable "h" cannot be used here outside the block.
    if(g == 'How are'){
        // variable "h" can be used here inside the block.
        let h = 'you sir?';
        document.getElementById("LetKey").innerHTML = (g + ' ' + h);
    }
    //Variable "h" cannot be used here outside the block.
    document.getElementById("LetKey1").innerHTML = (g + ' ' + h); //This gives an error because of variable "h".
}
//Variable "g" cannot be used here outside the function.

//OBJECT ASSIGNMENT.

function vote_Eligibility() {
//Creating an object using the let keyword.
let  voter = {
    fname: 'Leonardo',
    lname: 'daVinci',
    age: 50,
};
    
voter.eligible  =   function(){if (this.age >= 18) {return(" is eligible to vote");}
    else{return(" is not eligible to vote");}
};

document.getElementById("Vote").innerHTML =
voter.fname + ' ' + voter.lname + voter.eligible(); 
}
    
