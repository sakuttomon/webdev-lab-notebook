const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        addBookElement(book);
      });
    })
    .catch((error) => {
      console.log(error);

      const errorMessage = document.createElement("p");
      errorMessage.setAttribute("class", "text-center text-danger");
      errorMessage.textContent = "An error occured. Please reload the page.";
      app.append(errorMessage);
    })
    // Removing the loader in both cases
    .finally(() => {
      const loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

const addBookElement = (book) => {
  const bookInfo = document.createElement("div");
  /* Centering without bootstrap
  bookInfo.style.display = "flex";
  bookInfo.style.flexDirection = "column";
  bookInfo.style.alignItems = "center";
  */
  bookInfo.setAttribute("class", "text-center");
  bookInfo.style.marginTop = "1.5em";

  const name = document.createElement("h2");
  name.setAttribute("class", "fs-4");
  const author = document.createElement("p");
  const numberOfPages = document.createElement("p");
  const released = document.createElement("p");

  // Formatting text to show
  name.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substr(0, 4);
  numberOfPages.textContent = `${book.numberOfPages} pages`;

  // Have bookInfo element contain all the text content
  bookInfo.append(name);
  bookInfo.append(author);
  bookInfo.append(released);
  bookInfo.append(numberOfPages);

  // Add element into DOM
  app.append(bookInfo);
};

fetchData(url);
