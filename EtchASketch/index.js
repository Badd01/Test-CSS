const container = document.querySelector(".container");

let a = [];
let b = [];

for (let i = 0; i < 16; i++) {
  a[i] = document.createElement("div");
  a[i].classList.add("row");
  container.appendChild(a[i]);
  for (let j = 0; j < 16; j++) {
    b[j] = document.createElement("div");
    b[j].classList.add("item");
    a[i].appendChild(b[j]);
  }
}
