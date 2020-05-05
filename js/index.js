// Your code goes here

// Change the text color to crimson on mouse enter
const footerText = document.querySelector(".footer p");
footerText.addEventListener("mouseenter", function () {
  footerText.style.color = "crimson";
});

// Change the color to grey on mouse leave
const footer = document.querySelector(".footer");
footer.addEventListener("mouseleave", function () {
  footer.style.background = "grey";
});

// click mouse down to change width to 200px
const photo = document.querySelector(".img-content img");
photo.addEventListener("mousedown", function () {
  photo.style.width = "200px";
});

// Double clikc to change display to none
const intro = document.querySelector(".intro img");
intro.addEventListener("dblclick", function () {
  intro.style.display = "none";
});
