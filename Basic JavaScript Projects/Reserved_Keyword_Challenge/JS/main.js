//Creating an object constructor function.
function Child(Name, Age, Gender, Class) {
    this.Child_Name = Name;
    this.Child_Age = Age;
    this.Child_Gender = Gender; 
    this.Child_Class = Class;
}

// Creating some objects of the Child function using the "new" keyword.
var new = new Child("Chris", 8, "Male", "3 Gold");
var this = new Child("Laura", 7, "Female", "3 Gold");

function my_Function() {
    document.getElementById("Reserved").innerHTML = new.Child_Name;
}
