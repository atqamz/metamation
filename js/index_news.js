const slider1 = document.getElementById("news");
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
