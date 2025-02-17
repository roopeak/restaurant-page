function generateContact() {
	const contact = document.createElement('div');
	contact.classList.add('contact-container');

	const header = document.createElement('h1');
	header.textContent = 'Contact Us';
	contact.appendChild(header);

	const contactCard = document.createElement('div');
	contactCard.innerHTML = `
		<h2>Call us</h2>
		<p>050 123 4567</p>
		<h2>E-mail</h2>
		<p>pastarestaurant@totallynotfake.com</p>
	`;
	contact.appendChild(contactCard);

	return contact;
}

function loadContact() {
	const content = document.querySelector('.content');
	content.textContent = '';
	content.appendChild(generateContact());
}

export default loadContact;