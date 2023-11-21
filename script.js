var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});






// var swiper = new Swiper(".mySwiper", {
//     watchSlidesProgress: true,
//     effect:"autoplay",
//     slidesPerView: 3,
//     grabCursor: true,
//     autoplay: {
//         delay: false,
//         disableOnInteraction: false,
//     },
//     autoplayEffect:{
//         pauseOnMouseEnter: true,
//     },
//     centeredSlides: true,
//     pagination: {
//      el: ".swiper-pagination",
//     clickable: true,
//     }
//   });

//   document.querySelectorAll('.nav-link').forEach(link => {
//     if(link.href === window.location.href){
//         link.setAttribute('aria-current','page')
//     }
//   })
