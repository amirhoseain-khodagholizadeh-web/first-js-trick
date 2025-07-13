const input = document.querySelector("input");
const body = document.querySelector("body");
input.addEventListener("input", (e) => {
  body.style.backdropFilter = `brightness(${input.value}%)`;
});
console.log("hello")
