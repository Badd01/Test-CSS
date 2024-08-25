const container = document.querySelector(".container");

const width = 960;
let square = 16;
let a = [];
let b = [];

for (let i = 0; i < square; i++) {
  a[i] = document.createElement("div");
  a[i].classList.add("row");
  container.appendChild(a[i]);
  for (let j = 0; j < square; j++) {
    b[j] = document.createElement("div");
    b[j].classList.add("item");
    b[j].setAttribute(
      "style",
      `width: ${width / square}px; height: ${width / square}px`
    );
    a[i].appendChild(b[j]);
  }
}

const numberSquare = () => {
  let x = prompt("Number of squares per side [0,100]");
  if (x > 100 || x < 0) {
    alert("Errors");
    return numberSquare();
  }
  for (let i = 0; i < x; i++) {
    a[i] = document.createElement("div");
    a[i].classList.add("row");
    container.appendChild(a[i]);
    for (let j = 0; j < x; j++) {
      b[j] = document.createElement("div");
      b[j].classList.add("item");
      b[j].setAttribute(
        "style",
        `width: ${width / x}px; height: ${width / x}px`
      );
      a[i].appendChild(b[j]);
    }
  }
};
const button = document.querySelector("#select");
button.addEventListener("click", () => {
  numberSquare();
});
