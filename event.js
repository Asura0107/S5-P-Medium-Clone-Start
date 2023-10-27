const nav = document.querySelector(".nav");
const btn = document.querySelector(".firstbtn");
const change = function () {
  nav.style.backgroundColor = "white";
  btn.style.backgroundColor = "#1a8917";
};

window.addEventListener("scroll", change);
