// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.querySelector("#userInput1");
const copy = document.querySelector("#copy");
const output = document.querySelector("#output");

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  output.textContent = userInput1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.querySelector("#userInput2");

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

// Creating the missing output element in second section with class "output"
const outputElement = document.createElement("div");
outputElement.setAttribute("class", "output");

// Inserting our created div element into the relevant section
const inputEventSection = document.querySelector("#inputEventExample");
inputEventSection.append(outputElement);

// callback function to handle event
function handleInput(event) {
  outputElement.textContent = userInput2.value;
}
