const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
function addBookToLibrary() {}

const newBook = document.getElementById("newBook");
const dialog = document.querySelector("dialog");
const container = document.querySelector(".container");
const authorBook = container.querySelector(".authorBook");
const titleBook = container.querySelector(".titleBook");
const pagesBook = container.querySelector(".pagesBook");
const statusBook = container.querySelector(".statusBook");
const confirmBtn = dialog.querySelector("#confirmBtn");
const author = dialog.querySelector("#author");
const title = dialog.querySelector("#title");
const pages = dialog.querySelector("#pages");
const status = dialog.querySelector("#status");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

let data = {};
dialog.addEventListener("close", () => {
  data
    ? ((authorBook.textContent = data.author),
      (titleBook.textContent = data.title),
      (pagesBook.textContent = data.pages),
      (statusBook.textContent = data.status))
    : "";
});
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  data = {
    author: author.value,
    title: title.value,
    pages: pages.value,
    status: "Not Read",
  };
  dialog.close();
});
