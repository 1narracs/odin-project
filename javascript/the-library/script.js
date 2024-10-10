class Book {
  static count = 0;

  constructor(title, author, pages, read) {
    this.id = ++this.constructor.count;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(id) {
    this.books.splice(
      this.books.findIndex((book) => book.id === parseInt(id)),
      1
    );
  }

  readBook(id) {
    this.books[this.books.findIndex((book) => book.id === parseInt(id))].read =
      !this.books[this.books.findIndex((book) => book.id === parseInt(id))]
        .read;
  }
}

class DomController {
  constructor() {
    this.library = new Library();
    this.btnSubmit = document.getElementById("submit");
    this.inputTitle = document.getElementById("title");
    this.inputAuthor = document.getElementById("author");
    this.inputPages = document.getElementById("pages");
    this.inputRead = document.getElementById("read");
    this.tableBooks = document.getElementById("library-table-body");
    this.labelError = document.getElementById("error-label");
    this.btnRead = document.getElementsByClassName("read-book");
    this.btnDel = document.getElementsByClassName("del-book");
  }

  addBookToLibrary() {
    if (
      this.inputTitle.value === "" ||
      this.inputAuthor.value === "" ||
      this.inputPages.value === ""
    ) {
      this.labelError.innerText = "Please ensure all fields are filled";
      return;
    } else {
      this.labelError.innerText = "";
    }

    this.library.addBook(
      new Book(
        this.inputTitle.value,
        this.inputAuthor.value,
        this.inputPages.value,
        this.inputRead.checked
      )
    );
  }

  updateBookShelf() {
    this.tableBooks.innerHTML = "";

    this.library.books.forEach((book) => {
      let newRow = document.createElement("tr");
      newRow.setAttribute("data-bookid", book.id);

      let titleData = document.createElement("td");
      titleData.innerText = book.title;

      let authorData = document.createElement("td");
      authorData.innerText = book.author;

      let pagesData = document.createElement("td");
      pagesData.innerText = book.pages;

      let readData = document.createElement("td");
      readData.innerText = book.read ? "Yes" : "No";

      let btnReadCell = document.createElement("td");
      let btnRead = document.createElement("button");
      btnRead.setAttribute("class", "btn-read-book");
      btnRead.innerHTML = "Read";
      btnRead.addEventListener("click", (e) => {
        this.library.readBook(
          e.target.parentNode.parentNode.getAttribute("data-bookid")
        );
        this.updateBookShelf();
      });
      btnReadCell.appendChild(btnRead);

      let btnDelCell = document.createElement("td");
      let btnDel = document.createElement("button");
      btnDel.setAttribute("class", "btn-del-book");
      btnDel.innerHTML = "Del";
      btnDel.addEventListener("click", (e) => {
        this.library.removeBook(
          e.target.parentNode.parentNode.getAttribute("data-bookid")
        );
        this.updateBookShelf();
      });
      btnDelCell.appendChild(btnDel);

      this.tableBooks.append(newRow);

      newRow.append(
        ...[titleData, authorData, pagesData, readData, btnReadCell, btnDelCell]
      );
    });
  }
}

let controller = new DomController();

controller.btnSubmit.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    controller.addBookToLibrary();
    controller.updateBookShelf();
  },
  false
);