const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
  }

  function addBookToLibrary() {
    // do stuff here
  }