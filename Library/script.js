const myLibrary = [];

// Book constructor
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

// Function to display books on the page
function displayBooks() {
  const container = document.querySelector(".container");
  container.textContent = ""; //Delete content for not duplicate because update all not 1 item
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    container.appendChild(bookCard);

    const titleBook = document.createElement("p");
    titleBook.textContent = "Title: " + book.title;
    bookCard.appendChild(titleBook);

    const authorBook = document.createElement("p");
    authorBook.textContent = "Author: " + book.author;
    bookCard.appendChild(authorBook);

    const pagesBook = document.createElement("p");
    pagesBook.textContent = "Pages: " + book.pages;
    bookCard.appendChild(pagesBook);

    const statusBook = document.createElement("p");
    statusBook.textContent = "Status: " + (book.status ? "Read" : "Not Read");
    bookCard.appendChild(statusBook);

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "Remove";
    btnRemove.setAttribute("onClick", `removeBook(${index})`);
    bookCard.appendChild(btnRemove);

    const btnToggle = document.createElement("button");
    btnToggle.textContent = "Toggle";
    btnToggle.setAttribute("onClick", `toggleReadStatus(${index})`);
    bookCard.appendChild(btnToggle);
  });
}

// Function to add a new book to the library
function addBookToLibrary(author, title, pages, status) {
  const newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].status = !myLibrary[index].status;
  displayBooks();
}

// Event listeners for opening and closing the dialog
const dialog = document.querySelector("dialog");
const newBookBtn = document.getElementById("newBook");
const closeBtn = document.getElementById("closeBtn");
const confirmBtn = document.getElementById("confirmBtn");
const bookForm = document.getElementById("book-form");

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

// Handling the form submission
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form from submitting
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").checked;

  addBookToLibrary(author, title, pages, status);
  dialog.close();
  bookForm.reset(); //Delete input form data
});
