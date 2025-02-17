function generateMenu() {
	const menu = document.createElement('div');
	const menuHeader = document.createElement('h1');
	menuHeader.textContent = 'Menu';
	menu.appendChild(menuHeader);

	menu.appendChild(generateMenuCard(
		'Cacio e pepe',
		`A simple yet flavorful Roman dish made with spaghetti, Pecorino Romano 
		cheese, and black pepper, creating a creamy and peppery sauce.`,
		'23€'
	));

	menu.appendChild(generateMenuCard(
		'Penne alla Vodka',
		`A rich and creamy tomato-based pasta with a touch of vodka, heavy cream, 
		and Parmesan, offering a perfect balance of tangy and savory flavors.`,
		'21€'
	));

	menu.appendChild(generateMenuCard(
		'Orecchiette with Broccoli Rabe & Sausage',
		`Small, ear-shaped pasta tossed with sautéed garlic, spicy Italian sausage, 
		and slightly bitter broccoli rabe, creating a perfect mix of flavors.`,
		'22€'
	));

	menu.appendChild(generateMenuCard(
		'Seafood Linguine',
		`A delicious medley of shrimp, mussels, and calamari in a garlic white wine 
		or tomato-based sauce, served over linguine for a fresh, coastal-inspired dish.`,
		'21€'
	));

	menu.appendChild(generateMenuCard(
		'Pappardelle al Ragù',
		`Wide ribbon pasta coated in a slow-cooked meat sauce made with beef, pork, 
		and tomatoes, simmered to perfection for a deep, hearty flavor.`,
		'23€'
	));

	menu.appendChild(generateMenuCard(
		'Truffle Carbonara',
		`A luxurious twist on classic carbonara, featuring egg yolks, pancetta, 
		and Parmesan, elevated with aromatic black truffle shavings for an indulgent experience.`,
		'22€'
	))

	return menu;
}

function generateMenuCard(dishName, description, price) {
	const menuCard = document.createElement('div');
	
	menuCard.innerHTML = 
		`
			<div class='menu-card'>
				<h2>${dishName}</h2>
				<p><i>${description}</i></p>
				<h3>${price}</h3>
			</div>
	`;
			
			// <img src='./img/${dishName}'

			return menuCard;
}

function loadMenu() {
  const content = document.querySelector('.content');
	content.textContent = '';
	content.appendChild(generateMenu());
}

export default loadMenu;