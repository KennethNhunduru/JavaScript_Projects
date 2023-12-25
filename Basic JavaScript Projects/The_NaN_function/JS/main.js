function myNaN_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
    document.write("<br>"); //Introducing a line break
    
    document.getElementById("Test1").innerHTML = isNaN("Kenneth");
    document.write("<br>"); //Introducing a line break
    
    document.getElementById("Test2").innerHTML = isNaN("987");
    document.write("<br>"); //Introducing a line break
    document.write("<br>"); //Introducing a line break
}

//Calling the function
myNaN_Function()