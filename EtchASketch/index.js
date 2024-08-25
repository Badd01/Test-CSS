const container = document.querySelector(".container");
const width = 960;
let number = 16;
let a = [];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

for (let i = 0; i < number; i++) {
  a[i] = document.createElement("div");
  a[i].classList.add("row");
  container.appendChild(a[i]);
  let b = [];
  for (let j = 0; j < number; j++) {
    b[j] = document.createElement("div");
    b[j].classList.add("item");
    b[j].setAttribute(
      "style",
      `width: ${width / number}px; height: ${width / number}px`
    );

    a[i].appendChild(b[j]);
    b[j].addEventListener("mouseenter", () => {
      b[j].style.backgroundColor = getRandomColor();
    });
    let opacity = 100;
    b[j].addEventListener("mouseleave", () => {
      b[j].style.backgroundColor = "aqua";
      b[j].style.opacity = `${opacity}%`;
      opacity -= 10;
    });
  }
}

const numberSquare = () => {
  let number = prompt("Number of squares per side [0,100]");
  if (number > 100 || number < 0) {
    alert("Errors");
    return numberSquare();
  }
  container.innerHTML = "";

  for (let i = 0; i < number; i++) {
    a[i] = document.createElement("div");
    a[i].classList.add("row");
    container.appendChild(a[i]);
    let b = [];
    for (let j = 0; j < number; j++) {
      b[j] = document.createElement("div");
      b[j].classList.add("item");
      b[j].setAttribute(
        "style",
        `width: ${width / number}px; height: ${width / number}px`
      );
      a[i].appendChild(b[j]);
      b[j].addEventListener("mouseenter", () => {
        b[j].style.backgroundColor = getRandomColor();
      });
      let opacity = 100;
      b[j].addEventListener("mouseleave", () => {
        b[j].style.backgroundColor = "aqua";
        b[j].style.opacity = `${opacity}%`;
        opacity -= 10;
      });
    }
  }
};
const button = document.querySelector("#select");
button.addEventListener("click", () => {
  numberSquare();
});
