// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle(
    'active'
  ); /* event listener, dipencet nanti on off sendiri */
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (event) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  event.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (event) => {
  shoppingCart.classList.toggle('active');
  event.preventDefault();
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

document.addEventListener('click', (event) => {
  if (!hamburgerMenu.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove('active');
  }
  if (!searchButton.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove('active');
  }
  if (!shoppingCartButton.contains(event.target) && !shoppingCart.contains(event.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

itemDetailButtons.onclick = (event) => {
  itemDetailModal.style.display = 'flex';
  event.preventDefault();
};

// Klik tombol modal close
const closeModalButton = document.querySelector('.close-icon');

closeModalButton.onclick = (event) => {
  itemDetailModal.style.display = 'none';
  event.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}
