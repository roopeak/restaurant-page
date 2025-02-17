import homeContent from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.querySelector('.content')
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', () => {
  console.log('Hey');
});

menuButton.addEventListener('click', () => {
	loadMenu();
});

contactButton.addEventListener('click', () => {
  loadContact();
});