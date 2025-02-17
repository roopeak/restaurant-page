import pastaImage from './img/pasta-plate.jpg';

const content = document.querySelector('.content');

const restaurantName = document.createElement('h1');
restaurantName.textContent = 'Pasta restaurant';
content.appendChild(restaurantName);

const restaurantQuote = document.createElement('p');
restaurantQuote.textContent = '"A traditional restaurant serving a really good pasta."';
content.appendChild(restaurantQuote);

const pastaPlateImage = document.createElement('img');
pastaPlateImage.src = pastaImage;

content.appendChild(pastaPlateImage)