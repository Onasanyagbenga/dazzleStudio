// Hamburger
const hamburger = document.getElementById('hamburger') ;
const navLink = document.querySelector('.nav-link') ;
// const navHead = document.querySelector('.nav-head') ;
hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active');
  navLink.classList.toggle('active') ;
  // siteHeader.style.position = 'fixed'
})

document.querySelectorAll('nav-menu').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active') ;
    navLink.classList.remove('active') ;
  }))
// Hamburger ends

// if(hamburger.classList.remove('active')){
//   siteHeader.style.position = 'fixed'
// }
// else{
//   siteHeader.style.position = 'sticky'
// }
  
//user scroll 
let prevScrollPos = window.pageYOffset;
const siteHeader = document.getElementById('site-header') ;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        siteHeader.style.top = '0';
    } else {
        // Scrolling down
        siteHeader.style.top = '-125px'; 
    }

    prevScrollPos = currentScrollPos;
};
//user scroll ends

// image highlights
var img = document.getElementById('images') ;
var slides = ['Pictures/IMG_0372.JPG','Pictures/IMG_0373.JPG','Pictures/IMG_0375.JPG','Pictures/IMG_6506.png','Pictures/IMG_7794.png'] ;
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

// modal display

const closeModal = document.getElementById('closeModalBtn') ;
const openModal = document.getElementById('openModalBtn') ;
const bookingModal = document.getElementById('booking-modal')

closeModal.addEventListener('click', () => {
  bookingModal.style.display = 'none' ;
})
openModal.addEventListener('click', () => {
  openModal.classList.add('active')
  bookingModal.style.display = 'block' ;
})
//modal ends

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



//   document.querySelectorAll('.nav-link').forEach(link => {
//     if(link.href === window.location.href){
//         link.setAttribute('aria-current','page')
//     }
//   })
