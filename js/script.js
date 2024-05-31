const myLibrary = [];
const book1 = new Book("Red Rising", "Pierce Brown", 382, true );
const book2 = new Book("Golden Son", "Pierce Brown", 466, true );
myLibrary.push(book1);
myLibrary.push(book2);
console.log(myLibrary);

const booksContainer = document.querySelector(".books-container");

displayLibary();

const showButton = document.getElementById("showBookDialog");
const addBookDialog = document.getElementById("addBookDialog");
const submitButton = addBookDialog.querySelector("#submitBookBtn");
const cancelButton = addBookDialog.querySelector("#cancelBookBtn");
const newBookForm = document.getElementById("newBookForm");



// "NEW BOOK" button opens the dialog modally
showButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

cancelButton.addEventListener("click", () => {
  addBookDialog.close();
});

/// Prevent the "Submit" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
newBookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = parseInt(document.getElementById("pages").value);
  read = document. getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayLibary();
  newBookForm.reset();
  addBookDialog.close();
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
    empty(booksContainer);

    myLibrary.forEach((book, index) => {
      let bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      const title = document.createElement("h2");
      const titleText = document.createTextNode(book.title);
      title.classList.add("title");
      title.appendChild(titleText);

      const author = document.createElement("p");
      const authorText = document.createTextNode("by " + book.author);
      author.classList.add("author");
      author.appendChild(authorText);

      const pages = document.createElement("p");
      const pagesText = document.createTextNode("Pages: " + book.pages)
      pages.classList.add("pages");
      pages.appendChild(pagesText);

      const removeBtn = document.createElement("button")
      removeBtn.dataset.bookIndex = index;
      removeBtn.classList.add("removeBtn");
      removeBtn.textContent = 'x Remove';

      // Remove button deletes book from library
      removeBtn.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        displayLibary();
      });
      
      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(pages);
      bookCard.appendChild(removeBtn);
      booksContainer.appendChild(bookCard);

      
      
    });
  }

  function empty(element) {
    element.textContent = "";
  }