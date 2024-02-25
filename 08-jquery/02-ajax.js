const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
app.style.paddingLeft = 0;
const loading = document.querySelector("#loading");

const addBookToDOM = (item) => {
  console.log(item);
  $("#books").append(
    $("<div>")
      .css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      })
      .append($("<h2>").text(item.name).addClass("fs-4"))
      .append($("<p>").text(item.authors[0]))
      .append($("<p>").text(item.released.substr(0, 4)))
      .append($("<p>").text(`${item.numberOfPages} pages`))
  );
};

const fetchData = (url) => {
  $.ajax({
    type: "GET",
    url: url,
    success: (data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    },

    error: (error) => {
      console.error(error);
      $("#books").append(
        $("<div>").text(`An error occured. Please try again.`)
      );
    },

    // Removing loading indicator
    complete: () => {
      $("#loading").remove();
    },
  });
};

fetchData(url);
