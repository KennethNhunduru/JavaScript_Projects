
function greeting_Function(firstName, lastName) {
    var Greeting = ("How are you " + firstName + " " + lastName) + "?";
    alert(document.getElementById("d1").innerHTML = Greeting);
}

greeting_Function("Kenneth", "Nhunduru");

/*Scripts with "defer" never block the HTML page.
Scripts with defer always execute when the DOM is ready.
Deferred scripts keep their relative order, just like regular scripts.*/
