
//TENERY OPERATOR ASSIGNMENT.
//Creating the Ride_Function that determines eligibility for a ride.
function Ride_Function() {
    var Height, Can_Ride;
    //Obtaining height input from the user.
    Height = document.getElementById("Height").value;
    //Using ternery operator to determine eligibility.
    Can_Ride = (Height <52) ? "You are too short":"You are tall enough";
    //Displaying outcome in browser.
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//NEW KEYWORD ASSIGNMENT.
//In JavaScript, a constructor function is used to create objects.
//Creating the object constructor function.

function Employee(Name, Age, Active) {
    this.Employee_Name = Name;
    this.Employee_Age = Age;
    this.Employee_Active = Active; 
}
//Note: It is considered a good practice to capitalise the first letter of the constructor function.

// Creating some objects of the Employee function using the "new" keyword.
var Employee1 = new Employee("Kunta Kinte", 33, true);
var Employee2 = new Employee("Binta Kinte", 30, true);

function my_Function() {
    document.getElementById("New_and_This").innerHTML = 
    Employee1.Employee_Name + " is " + Employee1.Employee_Age + "  years old.";
    document.getElementById("New_and_This_1").innerHTML = 
    Employee2.Employee_Name + " is " + Employee1.Employee_Name + "'s wife, and she is " + Employee2.Employee_Age + " years old.";
}

//NESTED FUNCTION ASSIGNMENT.

/*A nested function is a function that is defined inside another function.
It can be returned: either as a property of a new object or as a result by itself. 
It can then be used somewhere else.*/

/*Nested functions have access to the variables and parameters of 
the outer (enclosing) functions, as well as the global variables, creating a scope hierarchy.
However, the enclosing functions cannot access variables inside the inner(nested) functions.*/

/*Nested functions can be useful in a variety of situations, including:
ENCAPSULATION: Nested functions help encapsulate logic and data, 
reducing the chances of polluting the global scope with unnecessary variables.
MODULARITY: By organizing code into nested functions, modular and reusable components are created 
resulting in improved code maintainability.
CLOSURES: Nested functions often create closures, which enable the inner function to maintain access 
to the variables of its containing function even after the containing function has finished execution.
INFORMATION HIDING: Nested functions can be used to hide implementation details and 
expose only the necessary interfaces, enhancing code abstraction.
READABILITY: Properly nested functions enhance the code readability
by grouping related logic together and making the code flow more intuitive.*/

//In my example of nested functions, I show how to calculate the volume of a rod with a circular cross-section.

/*Creating an outer function named radius_Function with one parameter 'dia', to calculate 
the radius of the rod cross-section*/
function radius_Function(dia) {
    let radius = dia / 2;
    //Creating an innner function named area_Function with no parameters to calculate the cross-sectional area.
    function area_Function() {
        let area = Math.PI * (radius)**2;
        /*Creating an inner-most function named vol_Function with one parameter 'length', 
        to calculate the volume of the rod.*/
        function vol_Function(length) {
            let Vol = area * length;
            return Vol;
        }
        return vol_Function;
    }
    return area_Function;
}

/*Declaring another variable named as Volume and calling the parent function 
with the two values of dia = 4 cm and length = 120 cm. Note the inner function has no parameter*/
let Volume = radius_Function(4)()(120);

function output_Function() {
    document.getElementById("Nested_Function").innerHTML = ("The volume of the circular rod is: " + Volume + " cm3");
}

