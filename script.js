// ome
let searchForm = document.querySelector('.search_form');
 document.querySelector('#search-btn').onclick = () =>{
searchForm.classList.toggle('active');
navbar.classList.remove('active');
shoppingCart.classList.remove('active');
loginForm.classList.remove('active');


 }

 let shoppingCart = document.querySelector('.shopping_cart');
 document.querySelector('#cart-btn').onclick = () =>{
shoppingCart.classList.toggle('active');
navbar.classList.remove('active');
searchForm.classList.remove('active');
loginForm.classList.remove('active');

 }

 let loginForm = document.querySelector('.login-form');
 document.querySelector('#user-btn').onclick = () =>{
loginForm.classList.toggle('active');
navbar.classList.remove('active');
searchForm.classList.remove('active');
shoppingCart.classList.remove('active');


 }

 let navbar = document.querySelector('.navbar');
 document.querySelector('#menu-btn').onclick = () =>{
navbar.classList.toggle('active');
searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
 }
 window.onscroll =() =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    

 }
//  var swiper = new Swiper(".product-slider", {
  
//   loop:true,
//   spaceBetween: 20,
//   autoplay:{
//     delay:7500,
//     disableOnInteraction:false,
//   },
//   centeredSlides:true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
      
//     },
//     768: {
//       slidesPerView: 2,
     
//     },
//     1020: {
//       slidesPerView: 3,
      
//     },
//   },
// });
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".review-slider", {
  
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  centeredSlides:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
     
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});

var swiper = new Swiper(".features-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






