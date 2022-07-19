const slider1 = document.getElementById("popular-nft-cards");
let isDownSlider1 = false;
let startXSlider1;
let scrollLeftSlider1;

slider1.addEventListener("mousedown", () => {
  isDownSlider1 = true;
  slider1.classList.add("active");

  startXSlider1 = event.pageX - slider1.offsetLeft;
  scrollLeftSlider1 = slider1.scrollLeft;
});
slider1.addEventListener("mouseleave", () => {
  isDownSlider1 = false;
  slider1.classList.remove("active");
});
slider1.addEventListener("mouseup", () => {
  isDownSlider1 = false;
  slider1.classList.remove("active");
});
slider1.addEventListener("mousemove", (e) => {
  if (!isDownSlider1) return;
  e.preventDefault();
  const x = event.pageX;
  const walk = (x - startXSlider1) * 3;
  slider1.scrollLeft = scrollLeftSlider1 - walk;
});

const slider2 = document.getElementById("popular-nft-types");
let isDownSlider2 = false;
let startXSlider2;
let scrollLeftSlider2;

slider2.addEventListener("mousedown", () => {
  isDownSlider2 = true;
  slider2.classList.add("active");

  startXSlider2 = event.pageX - slider2.offsetLeft;
  scrollLeftSlider2 = slider2.scrollLeft;
});
slider2.addEventListener("mouseleave", () => {
  isDownSlider2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("mouseup", () => {
  isDownSlider2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("mousemove", (e) => {
  if (!isDownSlider2) return;
  e.preventDefault();
  const x = event.pageX;
  const walk = (x - startXSlider2) * 3;
  slider2.scrollLeft = scrollLeftSlider2 - walk;
});

const slider3 = document.getElementById("popular-nft-bids");
let isDownSlider3 = false;
let startXSlider3;
let scrollLeftSlider3;

slider3.addEventListener("mousedown", () => {
  isDownSlider3 = true;
  slider3.classList.add("active");

  startXSlider3 = event.pageX - slider3.offsetLeft;
  scrollLeftSlider3 = slider3.scrollLeft;
});
slider3.addEventListener("mouseleave", () => {
  isDownSlider3 = false;
  slider3.classList.remove("active");
});
slider3.addEventListener("mouseup", () => {
  isDownSlider3 = false;
  slider3.classList.remove("active");
});
slider3.addEventListener("mousemove", (e) => {
  if (!isDownSlider3) return;
  e.preventDefault();
  const x = event.pageX;
  const walk = (x - startXSlider3) * 3;
  slider3.scrollLeft = scrollLeftSlider3 - walk;
});

const slider4 = document.getElementById("hottest-news-cards");
let isDownSlider4 = false;
let startXSlider4;
let scrollLeftSlider4;

slider4.addEventListener("mousedown", () => {
  isDownSlider4 = true;
  slider4.classList.add("active");

  startXSlider4 = event.pageX - slider4.offsetLeft;
  scrollLeftSlider4 = slider4.scrollLeft;
});
slider4.addEventListener("mouseleave", () => {
  isDownSlider4 = false;
  slider4.classList.remove("active");
});
slider4.addEventListener("mouseup", () => {
  isDownSlider4 = false;
  slider4.classList.remove("active");
});
slider4.addEventListener("mousemove", (e) => {
  if (!isDownSlider4) return;
  e.preventDefault();
  const x = event.pageX;
  const walk = (x - startXSlider4) * 3;
  slider4.scrollLeft = scrollLeftSlider4 - walk;
});

const slider5 = document.getElementById("popular-games-cards");
let isDownSlider5 = false;
let startXSlider5;
let scrollLeftSlider5;

slider5.addEventListener("mousedown", () => {
  isDownSlider5 = true;
  slider5.classList.add("active");

  startXSlider5 = event.pageX - slider5.offsetLeft;
  scrollLeftSlider5 = slider5.scrollLeft;
});
slider5.addEventListener("mouseleave", () => {
  isDownSlider5 = false;
  slider5.classList.remove("active");
});
slider5.addEventListener("mouseup", () => {
  isDownSlider5 = false;
  slider5.classList.remove("active");
});
slider5.addEventListener("mousemove", (e) => {
  if (!isDownSlider5) return;
  e.preventDefault();
  const x = event.pageX;
  const walk = (x - startXSlider5) * 3;
  slider5.scrollLeft = scrollLeftSlider5 - walk;
});
