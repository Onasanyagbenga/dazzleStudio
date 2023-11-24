// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 8,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });

var img = document.getElementById('images') ;
var slides = ['Pictures/IMG_0372.JPG','Pictures/IMG_0373.JPG','Pictures/IMG_0375.JPG','Pictures/IMG_6506.png'] ;
var start = 0 ;

function slider(){
  if(start < slides.length){
    start += 1 ;
  }
  else{
    start = 1 ;
  }
  img.innerHTML = "<img src=" + slides[start-1]+">";
}
setInterval(slider,4000)



// function eventHandler(index) {
//     img.forEach((card, i) => {
//         card.classList.remove('active');
//         slideBtns[i].classList.remove('active');
//     });
//     img[index].classList.add('active');
//     slideBtns[index].classList.add('active');
// }

// img.forEach((card, i) => {
//     card.addEventListener("click", () => eventHandler(i)
//     )
// });

// slideBtns.forEach((btn, i) => {
//     btn.addEventListener("click", () => eventHandler(i));
// });


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
