import { test } from "./test";
import './style.scss';

const parentDiv = document.createElement('div');
const firstChildDiv = document.createElement('div');
const secondChildDiv = document.createElement('div');

// Set classes for the child divs
firstChildDiv.classList.add('child-div__first');
secondChildDiv.classList.add('child-div__second');
parentDiv.classList.add('parent-div');

parentDiv.appendChild(firstChildDiv);
parentDiv.appendChild(secondChildDiv);

document.body.appendChild(parentDiv);


// Define the rows of keys for the keyboard
const keyRows = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  ["Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
  ["Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "◄", "▼", "►"]
];

// Create the keyboard container
const keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("keyboard-container");

// Loop through the rows of keys and create buttons for each key
for (let i = 0; i < keyRows.length; i++) {
  const keyRow = keyRows[i];
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("key-row");

  for (let j = 0; j < keyRow.length; j++) {
    const key = keyRow[j];
    const keyButton = document.createElement("button");
    keyButton.classList.add("key");
    keyButton.textContent = key;
    keyButton.setAttribute("data-key", key); // add data-key attribute

    // Add event listener for each key button
    // Add event listener for each key button
    keyButton.addEventListener("click", () => {
      inputField.focus();
      const keySymbol = keyButton.textContent;
      if (key === "Backspace") {
        inputField.value = inputField.value.slice(0, -1);
      } else if (key === "Enter") {
        inputField.value += "\n";
      } else if (key === "Tab") {
        inputField.value += "\t";
      } else if (key === "Caps Lock" || key === "Shift" || key === "Ctrl" || key === "Alt" || key === "Win") {
        // do nothing
      } else {
        inputField.value += keySymbol;
        inputField.dispatchEvent(new KeyboardEvent("keydown", { key: key }));
      }
    });



    rowDiv.appendChild(keyButton);
  }


  keyboardContainer.appendChild(rowDiv);
}

// Create the input field
const inputField = document.createElement("textarea");
inputField.classList.add("input-field");

inputField.addEventListener("click", () => {
  inputField.focus();
});

// Append the input field to the firstChildDiv
firstChildDiv.appendChild(inputField);

// Append the keyboard container to the second child div
secondChildDiv.appendChild(keyboardContainer);

function handleKeyDown(event: KeyboardEvent) {
  const key = event.key;
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.add('active');
  }

  if (key === "Backspace") {
    event.preventDefault();
    inputField.value = inputField.value.slice(0, -1);
  } else if (key === "ArrowUp") {
    inputField.value += "▲";
  } else if (key === "ArrowLeft") {
    inputField.value += "◄";
  } else if (key === "ArrowDown") {
    inputField.value += "▼";
  } else if (key === "ArrowRight") {
    inputField.value += "►";
  }
}



function handleKeyUp(event: KeyboardEvent) {
  const key = event.key;
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.remove('active');
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
