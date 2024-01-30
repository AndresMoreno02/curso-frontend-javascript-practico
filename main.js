const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu () {

    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopmenu.classList.toggle('inactive');
}

function togglemobileMenu () {

    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito () {
   const iMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!iMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    }

   shoppingCartContainer.classList.toggle('inactive')

}

/* Array */
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940;'
})

productList.push({
    name: 'Car',
    price: 120320,
    image: 'https://cdn1.img.sputniknews.lat/img/106297/47/1062974704_0:60:1200:739_600x0_80_0_0_e1d52d2be9078a9c3774f91b413c510d.jpg'
})

productList.push({
    name: 'Computador',
    price: 1030220,
    image: 'https://teratech.com.co/wp-content/uploads/2023/02/X15-COMBO.jpg.webp'
})

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      */

for (product of productList) {

   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.append(productPrice, productName);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productImgCart);

   productInfo.append(productInfoDiv, productInfoFigure)
   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard)

}