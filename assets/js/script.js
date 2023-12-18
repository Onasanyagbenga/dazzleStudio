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
// Hamburger ends

// see line34
// whenever user scrolls down ofcourse the header will hide,user scrolls down header appears,
// but if user clicks on the hamburger and scrolls up or down the header hides as well ,
// it should be fixed and not hide in any way. how can i achieve that ?

// this puts the header on fixed postion when hamburger is active and user trys to scroll up or down.
// lol i thought i got it right here, i was deceiving myself

// if(hamburger.classList.remove('active')){
//   siteHeader.style.position = 'fixed'
//   siteHeader.style.top = '0'; 
// }
// else{
//   siteHeader.style.position = 'sticky'
// }
// ends
  
//user scrolls up ,siteheader hides . scrolls down, siteheader shows .
let prevScrollPos = window.pageYOffset;
const siteHeader = document.getElementById('site-header') ;
let isHamburgerActive = false ;

window.onscroll = function() {

  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    siteHeader.style.top = '0';
  } else {
    // Scrolling down
    siteHeader.style.top = '-125px';
  }
  // if (hamburger.classList.toggle('active')) {
  //   siteHeader.style.top = '0';
  //   siteHeader.style.position = 'fixed'
  // } else {
  //   siteHeader.style.top = '-125px';
  // }
    
    prevScrollPos = currentScrollPos;
};
//user scroll ends

// image highlights
const img = document.getElementById('images') ;
const slides = ['/Pictures/IMG_0957.PNG','/Pictures/IMG_7794.png','/Pictures/IMG_0956.jpg','/Pictures/IMG_6506.png','/Pictures/IMG_9760.png'] ;
var start = 0 ;

function slider(){
  if(start < slides.length){
    start += 1 ;
  }
  else{
    start = 1 ;
  }
  img.style.transition = 'opacity 0.5s';
  img.style.opacity = 0.5;

  setTimeout(function () {
    // Change the image source and reset opacity after the transition
    img.innerHTML = "<img id='images' src=" + slides[start-1] + " alt='Image'>";
    img.style.transition = '1s'; // Reset transition
    img.style.opacity = 1;
    img.style.border = 'none';
  }, 500);

  // img.innerHTML = "<img src=" + slides[start-1] + ">";
}
setInterval(slider,5000)

// modal display

// const openModal = document.getElementById('openModalBtn') ;
// const bookingModal = document.getElementById('booking-modal')

// openModal.addEventListener('click', () => {
//   openModal.classList.add('active')
//   bookingModal.style.display = 'block' ;
// })
//  function showModal() {
//   bookingModal.style.display = 'block' ;
//  }

//  function isFormValid(){
//   document.getElementById('clientName');
//   document.getElementById('telephone');
//   document.getElementById('makeupApt');
//   document.getElementById('datepicker');
//   document.getElementById('timepicker');
//  }

// openModal.addEventListener('click', function(){
//   if(isFormValid() === ''){
//     alert('Please fill out all required fields.')
//   }
//   else{
//     showModal() ;
//   }
// })

//modal ends

//faq active class
// const faqItem = document.querySelectorAll('#faq-item') ;
// const content = document.querySelector('.content')
// for(i = 0 ; i > faqItem.length; i++){
//   faqItem[i].addEventListener('click', function(){
//     this.classList.toggle('active')
//   })
// }

// faqItem.forEach(item =>
//   item.addEventListener('click', () => {
//     const isItemOpen = item.classList.contains('content');
//     faqItem.forEach(item => item.classList.remove('content'));
//     if(isItemOpen){
//       item.classList.toggle('content')
//     }
//   } ))

// faqItem.addEventListener('click', () => {
//   faqItem.classList.add('active')
//   content.style.display = 'block'
// })

  document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current','page')
    }
  })
