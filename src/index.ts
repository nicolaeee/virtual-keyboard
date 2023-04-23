import { test } from "./test";
import './style.scss';

const parentDiv = document.createElement('div');
const firstChildDiv = document.createElement('div');
const secondChildDiv = document.createElement('div');

firstChildDiv.textContent = 'This is the first child div';
secondChildDiv.textContent = 'This is the second child div';

parentDiv.appendChild(firstChildDiv);
parentDiv.appendChild(secondChildDiv);

document.body.appendChild(parentDiv);
