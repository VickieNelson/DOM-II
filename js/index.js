//  `keydown`on Fun Bus logo
const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
  const newText = document.querySelector(".logo-heading");
  newText.textContent = "Come Travel Us!";
  newText.style.color = "#4c89bf";
  newText.style.fontSize = "5rem";
});

//  `keyup`on Fun Bus logo
window.addEventListener("keyup", () => {
  newText.textContent = "Fun Bus";
  newText.style.color = "#212529";
  newText.style.fontSize = "4rem";
});

//  `mouseover` on Navagation
document.querySelectorAll(".nav a").forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.color = "#4c89bf";
  });
});

//  `mouseout` on Navagation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});
