import homeContent from './home.js';
import loadMenu from './menu.js';

const content = document.querySelector('.content')
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');

homeButton.addEventListener('click', () => {
  console.log('Hey');
});

menuButton.addEventListener('click', () => {
	loadMenu();
});

aboutButton.addEventListener('click', () => {
  console.log('Hey');
});