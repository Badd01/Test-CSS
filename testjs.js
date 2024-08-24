const container = document.querySelector(".container");

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: red";
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue");
const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 3
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
