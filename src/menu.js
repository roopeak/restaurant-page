function generateMenu() {
	const menu = document.createElement('div');
	const helloWorld = document.createElement('h1');
	helloWorld.textContent = 'This is a menu!';
	menu.appendChild(helloWorld);

	return menu;
}

function loadMenu() {
  const content = document.querySelector('.content');
	content.textContent = '';
	content.appendChild(generateMenu());
}

export default loadMenu;