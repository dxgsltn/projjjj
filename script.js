"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElem);

let index = 1;
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  const body = document.body;
  const headings = document.querySelectorAll("h1, h2, h3, .span, .card-text");
  const paragraphs = document.querySelectorAll("p");
  const links = document.querySelectorAll("a");
  const footer = document.querySelector("footer");
  const exploreShadow = document.querySelector(".explore__shadow");
  const homeShadow = document.querySelector(".home__shadow");

  body.classList.toggle("dark");
  body.style.backgroundColor = index === 0 ? "black" : "white";

  headings.forEach((heading) => {
    try {
      heading.style.color = index === 0 ? "white" : "black";
    } catch (error) {
      console.error("Error setting heading color:", error);
    }
  });

  paragraphs.forEach((paragraph) => {
    try {
      paragraph.style.color = index === 0 ? "white" : "black";
    } catch (error) {
      console.error("Error setting paragraph color:", error);
    }
  });

  links.forEach((link) => {
    try {
      link.style.color = index === 0 ? "white" : "black";
    } catch (error) {
      console.error("Error setting link color:", error);
    }
  });

  try {
    footer.style.backgroundColor =
      index === 0 ? "var(--container-color)" : "#C3C3C3";
  } catch (error) {
    console.error("Error setting footer background color:", error);
  }

  try {
    exploreShadow.style.background =
      index === 0
        ? "linear-gradient(180deg, hsl(0, 0%, 0%) 5%, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 0) 60%, hsl(0, 0%, 0%) 92%)"
        : "linear-gradient(180deg, hsl(0, 0%, 100%) 5%, hsla(0, 0%, 100%, 0) 40%, hsla(0, 0%, 100%, 0) 60%, hsl(0, 0%, 100%) 92%)";
  } catch (error) {
    console.error("Error setting explore shadow background:", error);
  }

  index = index === 1 ? 0 : 1;
});
