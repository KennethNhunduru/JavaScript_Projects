/*JavaScript return statement is used to return a particular value from the function. 
The function will stop the execution when the return statement is called and return a specific value. 
The return statement should be the last statement of the function because 
the code after the return statement won’t be accessible.*/

/*The return statement can return any value i.e. Primitive value (Boolean, number and string, etc) 
or object type value ( function, object, array, etc).*/

//Defining an addition function that returns the sum of two numbers:

function add_Function(x, y) {
    return(x + y); //Reurn the sum of x and y.
}
document.getElementById("Return").innerHTML = add_Function(6, 12);