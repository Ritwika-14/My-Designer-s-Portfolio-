const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// hide section 2 and section 3 on load
section2.style.display = "none";
section3.style.display = "none";
button1.classList.add("button1");

// show section 1 by default
button1.addEventListener("click", function() {
  section1.style.display = "block";
  section2.style.display = "none";
  section3.style.display = "none";
  button1.classList.add("button1");
  button2.classList.remove("button1");
  button3.classList.remove("button1");
});

// show section 2 on button2 click
button2.addEventListener("click", function() {
  section1.style.display = "none";
  section2.style.display = "block";
  section3.style.display = "none";
  button1.classList.remove("button1");
  button2.classList.add("button1");
  button3.classList.remove("button1");
});

// show section 3 on button3 click
button3.addEventListener("click", function() {
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "block";
  button1.classList.remove("button1");
  button2.classList.remove("button1");
  button3.classList.add("button1");
});


