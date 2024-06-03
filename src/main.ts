import changeBGColor from './changeBGColor';
import './style.scss';

const changeButton = document.getElementById('change-button');
const changingElement = document.getElementById('changing-element');

changeButton?.addEventListener('click', () => changeBGColor(changingElement));
