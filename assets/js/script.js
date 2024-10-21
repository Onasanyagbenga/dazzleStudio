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


// Active page
var navCurrentEl = document.querySelectorAll('.nav-current');
var current = document.querySelector('.active') ;

navCurrentEl.forEach(navCurrentEl => {
  navCurrentEl.addEventListener('click', () => {
    navCurrentEl.classList.add('active') ;
    current?.classList.remove('active') ;
  })
})

// end


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
const img = document.getElementById('images') ;
const slides = ['/gallery/Pictures/IMG_0957.PNG','/gallery/Pictures/IMG_7794.png','/gallery/Pictures/IMG_0956.jpg','/gallery/Pictures/IMG_6506.png','/gallery/Pictures/IMG_9760.png'] ;
var start = 0 ;

function slider(){
  if(start < slides.length){
    start += 1 ;
  }
  else{
    start = 1 ;
  }
  img.style.transition = '0.5s';
  img.style.opacity = '0.5';
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

// ends


// faq section

var accordion = document.getElementsByClassName('acc-item');
var i;

for(i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');
    // this.classList.remove('active')
    var content = this.nextElementSibling ;
    if (content.style.display ==='block'){
      content.style.display = 'none';
    }
    else{
      content.style.display = 'block';
    }
  });
}
// ends
