/*JavaScript Object is the 8th data type in JavaScript after the 7 different primitive data types.
JavaScript Object is a non-primitive data-type.
A JavaScript Object is a container for unordered named values, called properties and methods.
The named values ("key: value" pairs), in JavaScript Objects, are called "properties"
The JavaScript "Object Method" is an object property that has a function value.
It is a common practice to declare objects with the "const" keyword.
Objects are typically constants.
Properties can usually be changed, added, and deleted, but some are read only.
The Object cannot be removed or replaced from the container.
JavaScript Objects inherit the properties of their prototype.
*/

//JavaScript Objects for a computer program in an Employment Agency.
//Creation of the dictionary of Agency Workers, aw_Dictionary:

function aw_Dictionary() {
    var Agency_Worker = {
        employment_number: 54321,
        firstName: "Thierry",
        lastName: "Master",
        age: 21,
        right_to_work: true,
        current_deployment: "Poundland",
        wage_thisPeriod: function earnIngs(min_wage, hours) {
           return min_wage * hours
        }
    };
    delete Agency_Worker.firstName; //Removing the firstName key
    //Accessing one of the properties of the Object
    document.getElementById("Dictionary").innerHTML = Agency_Worker.firstName;
}

//Calling the function
aw_Dictionary()
