function voterAge_Function() {
    var Age, Eligible; //Defining the variables.
    Age = document.getElementById("Age").value; //Obtaining the voter age input into the Age browser element.
    // Using the ternery operator to check elegibility for voting.
    Eligible = (Age >= 18) ? "You are eligible" : "You are not yet eligible";
        //Directing the output of the check to the browser.
    document.getElementById("Vote").innerHTML = Eligible + " to vote.";
}