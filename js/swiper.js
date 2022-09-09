let product = new Swiper(".swiper", {
   navigation: {
      nextEl: '.doctors__next',
      prevEl: '.doctors__prev',
   },
   pagination: {
      el: ".doctors__pagination",
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,     
   },
   watchOverflow: true,
   // loop: true,
   centerSlides: false,

   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 1,
   freeMode: true,
   speed: 800,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      440: {
         slidesPerView: 1,
      },
      640: {
         slidesPerView: 1.3,
      },
      992: {
         slidesPerView: 2,
      },
   },
});
let comments = new Swiper(".comments__content", {
   navigation: {
      nextEl: '.doctors__next',
      prevEl: '.doctors__prev',
   },
   pagination: {
      el: ".doctors__pagination",
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,     
   },
   watchOverflow: true,
   centerSlides: false,

   slidesPerView: 3,
   spaceBetween: 20,
   slidesPerGroup: 1,
   freeMode: true,
   speed: 800,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      440: {
         slidesPerView: 1.2,
      },
      640: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },
});