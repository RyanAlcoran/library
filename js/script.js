const myLibrary = [];
const book1 = new Book("Red Rising", "Pierce Brown", 382, true );
const book2 = new Book("Golden Son", "Pierce Brown", 466, true );
myLibrary.push(book1);
myLibrary.push(book2);
console.log(myLibrary);

const booksContainer = document.querySelector(".books-container");

const showButton = document.getElementById("showBookDialog");
const addBookDialog = document.getElementById("addBookDialog");
const submitButton = document.querySelector("#submitBookBtn");

// "NEW BOOK" button opens the dialog modally
showButton.addEventListener("click", () => {
  addBookDialog.showModal();
});


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
  }

  function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
  }

  function displayLibary() {
    myLibrary.forEach((book) => {
      let bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      
    });
    

  }