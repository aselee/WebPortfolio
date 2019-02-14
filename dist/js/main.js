// select DOM items

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItem = document.querySelectorAll('.nav-item');

// setting the initial state of the menu

let showMenu = false;

// need an addeventlistener
menuButton.addEventListener('click', toggleMenu);

// want to show the classes as well as closed classes

function toggleMenu() {
  if(!showMenu) {
    menuButton.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    navItem.forEach(item => item.classList.add('show'));

  // Set Menu State
    showMenu = true;

  // removing classes
  } else {
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    navItem.forEach(item => item.classList.remove('show'));

    // Set Menu State
    // as false to close the menu
    showMenu = false;
  }
}

