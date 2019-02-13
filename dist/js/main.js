// select DOM items

const menuButton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-items');

// setting the initial state of the menu

let showMenu = false;

// need an eventlistener
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {

  }
}

