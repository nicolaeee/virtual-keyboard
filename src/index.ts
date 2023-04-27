
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


// // Define the rows of keys for the keyboard
// const keyRows = [
//   ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
//   ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
//   ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'Enter'],
//   ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
//   ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
// ];


// const keyRowsCaps = [
//   ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
//   ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del'],
//   ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', 'Enter'],
//   ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
//   ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],
// ];
// // Create the keyboard container
// const keyboardContainer = document.createElement('div');
// keyboardContainer.classList.add('keyboard-container');

// const inputField = document.createElement('textarea');
// inputField.classList.add('input-field');

// // Loop through the rows of keys and create buttons for each key
// for (let i = 0; i < keyRows.length; i++) {
//   const keyRow = keyRows[i];
//   const rowDiv = document.createElement('div');
//   rowDiv.classList.add('key-row');

//   for (let j = 0; j < keyRow.length; j++) {
//     const key = keyRow[j];
//     const keyButton = document.createElement('button');
//     keyButton.classList.add('key');
//     keyButton.textContent = key;
//     keyButton.setAttribute('data-key', key); // add data-key attribute

//     // Add event listener for each key button
//     keyButton.addEventListener('click', () => {
//       inputField.focus();
//       const keySymbol = keyButton.textContent;
//       if (key === 'Backspace') {
//         inputField.value = inputField.value.slice(0, -1);
//       } else if (key === 'Enter') {
//         inputField.value += '\n';
//       } else if (key === 'Tab') {
//         inputField.value += '\t';
//       } else if (key === 'Caps Lock' || key === 'Shift' || key === 'Ctrl' || key === 'Alt' || key === 'Win') {
//         // do nothing
//       } else {
//         inputField.value += keySymbol;
//         inputField.dispatchEvent(new KeyboardEvent('keydown', { key: key }));
//       }
//     });

//     rowDiv.appendChild(keyButton);
//   }

//   keyboardContainer.appendChild(rowDiv);
// }



// inputField.addEventListener('click', () => {
//   inputField.focus();
// });

// // Append the input field to the firstChildDiv
// firstChildDiv.appendChild(inputField);

// // Append the keyboard container to the second child div
// secondChildDiv.appendChild(keyboardContainer);

// function handleKeyDown(event: KeyboardEvent) {
//   const key = event.key;
//   const keyElement = document.querySelector(`.key[data-key="${key}"]`);
//   if (keyElement) {
//     keyElement.classList.add('active');
//   }

//   if (key === 'Backspace') {
//     event.preventDefault();
//     inputField.value = inputField.value.slice(0, -1);
//   } else if (key === 'ArrowUp') {
//     inputField.value += '▲';
//   } else if (key === 'ArrowLeft') {
//     inputField.value += '◄';
//   } else if (key === 'ArrowDown') {
//     inputField.value += '▼';
//   } else if (key === 'ArrowRight') {
//     inputField.value += '►';
//   }
// }



// function handleKeyUp(event: KeyboardEvent) {
//   const key = event.key;
//   const keyElement = document.querySelector(`.key[data-key='${key}']`);
//   if (keyElement) {
//     keyElement.classList.remove('active');
//   }
// }

// document.addEventListener('keydown', handleKeyDown);
// document.addEventListener('keyup', handleKeyUp);


// Define the keys for the keyboard
const keys = [
  { code: 'Backquote', key: '`', shiftKey: '~' },
  { code: 'Digit1', key: '1', shiftKey: '!' },
  { code: 'Digit2', key: '2', shiftKey: '@' },
  { code: 'Digit3', key: '3', shiftKey: '#' },
  { code: 'Digit4', key: '4', shiftKey: '$' },
  { code: 'Digit5', key: '5', shiftKey: '%' },
  { code: 'Digit6', key: '6', shiftKey: '^' },
  { code: 'Digit7', key: '7', shiftKey: '&' },
  { code: 'Digit8', key: '8', shiftKey: '*' },
  { code: 'Digit9', key: '9', shiftKey: '(' },
  { code: 'Digit0', key: '0', shiftKey: ')' },
  { code: 'Minus', key: '-', shiftKey: '_' },
  { code: 'Equal', key: '=', shiftKey: '+' },
  { code: 'Backspace', key: 'Back space' },
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'q', shiftKey: 'Q' },
  { code: 'KeyW', key: 'w', shiftKey: 'W' },
  { code: 'KeyE', key: 'e', shiftKey: 'E' },
  { code: 'KeyR', key: 'r', shiftKey: 'R' },
  { code: 'KeyT', key: 't', shiftKey: 'T' },
  { code: 'KeyY', key: 'y', shiftKey: 'Y' },
  { code: 'KeyU', key: 'u', shiftKey: 'U' },
  { code: 'KeyI', key: 'i', shiftKey: 'I' },
  { code: 'KeyO', key: 'o', shiftKey: 'O' },
  { code: 'KeyP', key: 'p', shiftKey: 'P' },
  { code: 'BracketLeft', key: '[', shiftKey: '{' },
  { code: 'BracketRight', key: ']', shiftKey: '}' },
  { code: 'Delete', key: 'Del' },
  { code: 'CapsLock', key: 'Caps Lock' },
  { code: 'KeyA', key: 'a', shiftKey: 'A' },
  { code: 'KeyS', key: 's', shiftKey: 'S' },
  { code: 'KeyD', key: 'd', shiftKey: 'D' },
  { code: 'KeyF', key: 'f', shiftKey: 'F' },
  { code: 'KeyG', key: 'g', shiftKey: 'G' },
  { code: 'KeyH', key: 'h', shiftKey: 'H' },
  { code: 'KeyJ', key: 'j', shiftKey: 'J' },
  { code: 'KeyK', key: 'k', shiftKey: 'K' },
  { code: 'KeyL', key: 'l', shiftKey: 'L' },
  { code: 'Semicolon', key: ';', shiftKey: ':' },
  { code: 'Enter', key: 'Enter' },
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'z', shiftKey: 'Z' },
  { code: 'KeyX', key: 'x', shiftKey: 'X' },
  { code: 'KeyC', key: 'c', shiftKey: 'C' },
  { code: 'KeyV', key: 'v', shiftKey: 'V' },
  { code: 'KeyB', key: 'b', shiftKey: 'B' },
  { code: 'KeyN', key: 'n', shiftKey: 'N' },
  { code: 'KeyM', key: 'm', shiftKey: 'M' },
  { code: 'Comma', key: ',', shiftKey: '<' },
  { code: 'Period', key: '.', shiftKey: '>' },
  { code: 'Slash', key: '/', shiftKey: '?' },
  { code: 'ArrowUp', key: '▲' },
  { code: 'ShiftRight', key: 'Shift' },
  { code: 'ControlLeft', key: 'Ctrl' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: ' ', shiftKey: ' ' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ControlRight', key: 'Ctrl' },
  { code: 'ArrowLeft', key: '◄' },
  { code: 'ArrowDown', key: '▼' },
  { code: 'ArrowRight', key: '►' },

];

const keysRus = [
  { code: 'Backquote', key: 'ё', shiftKey: 'Ё' },
  { code: 'Digit1', key: '1', shiftKey: '!' },
  { code: 'Digit2', key: '2', shiftKey: '"' },
  { code: 'Digit3', key: '3', shiftKey: '№' },
  { code: 'Digit4', key: '4', shiftKey: ';' },
  { code: 'Digit5', key: '5', shiftKey: '%' },
  { code: 'Digit6', key: '6', shiftKey: ':' },
  { code: 'Digit7', key: '7', shiftKey: '?' },
  { code: 'Digit8', key: '8', shiftKey: '*' },
  { code: 'Digit9', key: '9', shiftKey: '(' },
  { code: 'Digit0', key: '0', shiftKey: ')' },
  { code: 'Minus', key: '-', shiftKey: '_' },
  { code: 'Equal', key: '=', shiftKey: '+' },
  { code: 'Backspace', key: 'Backspace' },
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'й', shiftKey: 'Й' },
  { code: 'KeyW', key: 'ц', shiftKey: 'Ц' },
  { code: 'KeyE', key: 'у', shiftKey: 'У' },
  { code: 'KeyR', key: 'к', shiftKey: 'К' },
  { code: 'KeyT', key: 'е', shiftKey: 'Е' },
  { code: 'KeyY', key: 'н', shiftKey: 'Н' },
  { code: 'KeyU', key: 'г', shiftKey: 'Г' },
  { code: 'KeyI', key: 'ш', shiftKey: 'Ш' },
  { code: 'KeyO', key: 'щ', shiftKey: 'Щ' },
  { code: 'KeyP', key: 'з', shiftKey: 'З' },
  { code: 'BracketLeft', key: 'х', shiftKey: 'Х' },
  { code: 'BracketRight', key: 'ъ', shiftKey: 'Ъ' },
  { code: 'Delete', key: 'Delete' },
  { code: 'CapsLock', key: 'Caps Lock' },
  { code: 'KeyA', key: 'ф', shiftKey: 'Ф' },
  { code: 'KeyS', key: 'ы', shiftKey: 'Ы' },
  { code: 'KeyD', key: 'в', shiftKey: 'В' },
  { code: 'KeyF', key: 'а', shiftKey: 'А' },
  { code: 'KeyG', key: 'п', shiftKey: 'П' },
  { code: 'KeyH', key: 'р', shiftKey: 'Р' },
  { code: 'KeyJ', key: 'о', shiftKey: 'О' },
  { code: 'KeyK', key: 'л', shiftKey: 'Л' },
  { code: 'KeyL', key: 'д', shiftKey: 'Д' },
  { code: 'Semicolon', key: 'ж', shiftKey: 'Ж' },
  { code: 'Quote', key: 'э', shiftKey: 'Э' },
  { code: 'Enter', key: 'Enter' },
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'я', shiftKey: 'Я' },
  { code: 'KeyX', key: 'ч', shiftKey: 'Ч' },
  { code: 'KeyC', key: 'с', shiftKey: 'С' },
  { code: 'KeyV', key: 'м', shiftKey: 'М' },
  { code: 'KeyB', key: 'и', shiftKey: 'И' },
  { code: 'KeyN', key: 'т', shiftKey: 'Т' },
  { code: 'KeyM', key: 'ь', shiftKey: 'Ь' },
  { code: 'Comma', key: 'б', shiftKey: 'Б' },
  { code: 'Period', key: 'ю', shiftKey: 'Ю' },
  { code: 'Slash', key: '.', shiftKey: ',' },
  { code: 'ArrowUp', key: '▲' },
  { code: 'ShiftRight', key: 'Shift' },
  { code: 'ControlLeft', key: 'Ctrl' },
  { code: 'MetaLeft', key: 'Win' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: ' ' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ArrowLeft', key: '◄' },
  { code: 'ArrowDown', key: '▼' },
  { code: 'ArrowRight', key: '►' },
  { code: 'ControlRight', key: 'Ctrl' },
] ;


const container = document.createElement('div');
container.classList.add('keyboard-container');

// define an array to store the number of buttons for each row
const rows = [14, 14, 12, 13, 9];
let rowIndex = 0;
let rowElement: HTMLElement | null = null;

keys.forEach((key) => {
  // check if the current row has reached its maximum number of buttons
  if (rowElement && rowElement.childElementCount >= rows[rowIndex]) {
    // move on to the next row
    rowIndex++;
    rowElement = null;
  }

  // create a new row if necessary
  if (!rowElement) {
    rowElement = document.createElement('div');
    rowElement.classList.add('key-row');
    container.appendChild(rowElement);
  }

  const button = document.createElement('div');
  button.classList.add('key');

  const engSpan = document.createElement('span');
  engSpan.classList.add('eng');
  engSpan.innerHTML = key.key;
  button.appendChild(engSpan);

  const rusSpan = document.createElement('span');
  rusSpan.classList.add('rus', 'hidden');

  const capsDownSpan = document.createElement('span');
  capsDownSpan.classList.add('capsDown');
  capsDownSpan.innerHTML = key.key.toLowerCase();
  rusSpan.appendChild(capsDownSpan);

  const capsUpSpan = document.createElement('span');
  capsUpSpan.classList.add('capsUp');
  capsUpSpan.innerHTML = key.key.toUpperCase();
  rusSpan.appendChild(capsUpSpan);

  button.appendChild(rusSpan);

  // handle special cases
  switch (key.code) {
    case 'Tab':
      engSpan.innerHTML = 'Tab';
      break;
    case 'Backspace':
      engSpan.innerHTML = 'Backspace';
      break;
    case 'Enter':
      engSpan.innerHTML = 'Enter';
      break;
    case 'CapsLock':
      engSpan.innerHTML = 'Caps Lock';
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      engSpan.innerHTML = 'Shift';
      break;
    case 'ControlLeft':
    case 'ControlRight':
      engSpan.innerHTML = 'Ctrl';
      break;
    case 'AltLeft':
    case 'AltRight':
      engSpan.innerHTML = 'Alt';
      break;
  }

  if (key.shiftKey) {
    button.dataset.shiftKey = key.shiftKey;
  }

  rowElement?.appendChild(button);
});

const childDivSecond = document.querySelector('.child-div__second');
if (childDivSecond) {
  childDivSecond.appendChild(container);
}
