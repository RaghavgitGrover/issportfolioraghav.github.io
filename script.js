let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

let themeMode = 1;
const themeToggle = document.getElementById("theme-toggle");
const themeStyle = document.getElementById("theme-style");
themeToggle.addEventListener("click", () => {
  themeMode = 1 - themeMode;
  if (themeMode === 1) {
    themeStyle.href = "style.css";
  } else {
    themeStyle.href = "lightmode.css";
  }
});
