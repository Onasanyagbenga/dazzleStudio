// Hamburger
const hamburger = document.getElementById('hamburger') ;
const navLink = document.querySelector('.nav-link') ;
hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active');
  navLink.classList.toggle('active') ;
})

document.querySelectorAll('nav-menu').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active') ;
    navLink.classList.remove('active') ;
  }))
//


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
