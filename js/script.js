// NAVBAR
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// SWIPER HOME
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// FILTER MENU  
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length;
  i++) {
    list[i].addEventListener('click', function() {
      for (let j = 0; j< list.length; j++) {
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for (let k = 0; k < itemBox.length; k++) {
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "menu") {
          itemBox[k].classList.remove('hide');
          itemBox[k].classList.add('active');
        }
      }

    })
  }

// SWIPER TESTIMONIALS
// const swiper = new Swiper('.js-testimonials-slider',  {
//   grabCursor: true,
//   spaceBetween: 30,
//   pagination: {
//     el: '.js-testimonials-pagination',
//     clickable: true 
//   },
//   breakpoints:{
//     767: {
//       slidesPerView: 2
//     }
//   }
// });