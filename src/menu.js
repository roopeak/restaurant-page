function generateMenu() {
	const menu = document.createElement('div');
	const menuHeader = document.createElement('h1');
	menuHeader.textContent = 'Menu';
	menu.appendChild(menuHeader);

	return menu;
}

function loadMenu() {
  const content = document.querySelector('.content');
	content.textContent = '';
	content.appendChild(generateMenu());
}

export default loadMenu;