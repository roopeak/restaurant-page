import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './styles/styles.css';

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', () => {
  loadHome();
});

menuButton.addEventListener('click', () => {
	loadMenu();
});

contactButton.addEventListener('click', () => {
  loadContact();
});

loadHome();