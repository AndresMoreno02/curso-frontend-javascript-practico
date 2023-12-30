const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu () {

    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose) {
        aside.classList.add('inactive')
    }

    desktopmenu.classList.toggle('inactive');
}

function togglemobileMenu () {

    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito () {
   const iMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!iMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    }

   aside.classList.toggle('inactive')

}