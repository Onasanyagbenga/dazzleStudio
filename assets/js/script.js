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

// this puts the header on fixed postion when hamburger is active and user trys to scroll up or down

if(hamburger.classList.remove('active')){
  siteHeader.style.position = 'fixed'
  siteHeader.style.top = '0'; 
}
else{
  siteHeader.style.position = 'sticky'
}
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
    
    prevScrollPos = currentScrollPos;
};
//user scroll ends

// image highlights
var img = document.getElementById('images') ;
var slides = ['Pictures/IMG_9760.png','Pictures/IMG_0373.JPG','Pictures/IMG_0375.JPG','Pictures/IMG_6506.png','Pictures/IMG_7794.png'] ;
var start = 0 ;

function slider(){
  if(start < slides.length){
    start += 1 ;
  }
  else{
    start = 1 ;
  }
  img.innerHTML = "<img src=" + slides[start-1] + ">";
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
