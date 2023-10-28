const nav = document.querySelector(".nav");
const btn = document.querySelector(".firstbtn");

const change = function () {
  const scrollheight = window.scrollY;
  if (scrollheight > 400) {
    nav.style.backgroundColor = "white";
    btn.style.backgroundColor = "#1a8917";
  } else {
    // dopo che l'utente ha scrollato, se l'altezza è minore ai 400 allora il background rimane quello di default
    nav.style.backgroundColor = "";
    btn.style.backgroundColor = "";
  }
};

window.addEventListener("scroll", change);
