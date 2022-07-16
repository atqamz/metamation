const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navbarLogo = document.getElementById("navbar-logo");
const nav = document.getElementById("menu");

openBtn.addEventListener("click", () => {
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  navbarLogo.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  navbarLogo.classList.toggle("hidden");
});
