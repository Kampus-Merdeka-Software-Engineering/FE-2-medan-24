 //  SWIPER HOME
 var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // SWIPER TESTIMONIALS
  const swiper2 = new Swiper('.js-testimonials-slider',  {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.js-testimonials-pagination',
    clickable: true 
  },
  breakpoints:{
    767: {
      slidesPerView: 1
    }
  }
  });