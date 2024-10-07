const myLibrary = [];

const btnSubmit = document.getElementById("submit");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");
const tableBooks = document.getElementById("library-table-body");
const labelError = document.getElementById("error-label");
const btnRead = document.getElementsByClassName("read-book");
const btnDel = document.getElementsByClassName("del-book");

btnSubmit.addEventListener("click", (e) => addBookToLibrary(e), false);

function Book(title, author, pages, read) {
  this.id = myLibrary.length + 1;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.printMe = function () {};

function addBookToLibrary(event) {
  if (
    inputTitle.value === "" ||
    inputAuthor.value === "" ||
    inputPages.value === ""
  ) {
    labelError.innerText = "Please ensure all fields are filled";
    return;
  } else {
    labelError.innerText = "";
  }

  newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.checked
  );
  myLibrary.push(newBook);
  updateBookShelf();
  event.preventDefault();
}

function updateBookShelf() {
  tableBooks.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let currentBook = myLibrary[i];

    let newRow = document.createElement("tr");
    newRow.setAttribute("data-bookid", currentBook.id);

    let titleData = document.createElement("td");
    titleData.innerText = currentBook.title;

    let authorData = document.createElement("td");
    authorData.innerText = currentBook.author;

    let pagesData = document.createElement("td");
    pagesData.innerText = currentBook.pages;

    let readData = document.createElement("td");
    readData.innerText = currentBook.read ? "Yes" : "No";

    let btnReadCell = document.createElement("td");
    let btnRead = document.createElement("button");
    btnRead.setAttribute("class", "btn-read-book");
    btnRead.innerHTML = "Read";
    btnRead.addEventListener("click", (e) =>
      readBook(e.target.parentNode.parentNode.getAttribute("data-bookid"))
    );
    btnReadCell.appendChild(btnRead);

    let btnDelCell = document.createElement("td");
    let btnDel = document.createElement("button");
    btnDel.setAttribute("class", "btn-del-book");
    btnDel.innerHTML = "Del";
    btnDel.addEventListener("click", (e) =>
      removeBook(e.target.parentNode.parentNode.getAttribute("data-bookid"))
    );
    btnDelCell.appendChild(btnDel);

    let nodeList = [
      titleData,
      authorData,
      pagesData,
      readData,
      btnReadCell,
      btnDelCell,
    ];

    tableBooks.append(newRow);

    newRow.append(...nodeList);
  }
}

function removeBook(id) {
  myLibrary.splice(
    myLibrary.findIndex((book) => book.id === parseInt(id)),
    1
  );
  updateBookShelf();
}

function readBook(id) {
  myLibrary[myLibrary.findIndex((book) => book.id === parseInt(id))].read =
    !myLibrary[myLibrary.findIndex((book) => book.id === parseInt(id))].read;
  updateBookShelf();
}
