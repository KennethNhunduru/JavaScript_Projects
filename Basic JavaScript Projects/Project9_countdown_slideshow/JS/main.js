function countdown() {
  //Selecting the element with an id of "seconds".
  var seconds = document.getElementById("seconds").value;
  //Defining the function that will be executed after a 1000ms delay.
  function tick() {
    seconds = seconds - 1; //Update the countdown every 1 second.
    timer.innerHTML = seconds; // Set the innerHTML of "timer" to "seconds"
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("It is Time to Get Up and Go!");
      clearTimeout(time); //Clearing the timer set with the setTimeout() method.
      timer.innerHTML = "";
    }
  }
  tick();
}

//THE SLIDESHOW CHALLENGE.

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}