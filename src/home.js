import pastaImage from './img/pasta-plate.jpg';

function generateHome() {
	const home = document.createElement('div');
	home.classList.add('home-container');
	
	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'Pasta restaurant';
	home.appendChild(restaurantName);
	
	const restaurantQuote = document.createElement('p');
	restaurantQuote.textContent = '"A traditional restaurant serving really good pasta."';
	home.appendChild(restaurantQuote);
	
	const pastaPlateImage = document.createElement('img');
	pastaPlateImage.src = pastaImage;
	
	home.appendChild(pastaPlateImage)
	
	const hoursContainer = document.createElement('div');
	hoursContainer.innerHTML = `
			<h2>Hours</h2>
			<p>Monday: 8am - 9pm</p>
			<p>Tuesday: 8am - 9pm</p>
			<p>Wednesday: 8am - 9pm</p>
			<p>Thursday: 8am - 9pm</p>
			<p>Friday: 8am - 11pm</p>
			<p>Saturday: 8am - 11pm</p>
			<p>Sunday: 10am - 9pm</p>
	`;
	home.appendChild(hoursContainer);
	
	const locationContainer = document.createElement('div');
	locationContainer.innerHTML = `
			<h2>Location</h2>
			<p>Yliopistonkatu 55, 33100 Tampere</p>
	`
	home.appendChild(locationContainer);

	return home;
}

function loadHome() {
	const content = document.querySelector('.content');
	content.textContent = '';
	content.appendChild(generateHome());
}


export default loadHome;