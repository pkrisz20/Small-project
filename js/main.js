//GSAP

gsap.from('.swiper', {

    scrollTrigger: {
      trigger: '.swiper-div',
      start: "top bottom"
    },
    y: '300px',
    duration: 1.5,
    opacity: 0
}, "-=0.5");

gsap.from('.slider', {

    scrollTrigger: {
      trigger: '.slider-div',
      start: "top bottom"
    },
    y: '300px',
    duration: 1.5,
    opacity: 0
}, "-=0.5");

gsap.from('.contact-form', {

    scrollTrigger: {
      trigger: '.contact-form',
      start: "top bottom"
    },
    x: '100vw',
    opacity: 0,
    duration: 1.5
}, "-=0.5");

gsap.from('.contactinfo', {

    scrollTrigger: {
      trigger: '.contact-form',
      start: "top bottom"
    },
    x: '-100vw',
    opacity: 0,
    duration: 1.5
}, "-=0.5");

//STICKY NAVBAR
window.onscroll = () => {
  myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//SEARCH FORM
const search_icon = document.querySelector('.fa-search');
const search_form = document.querySelector('.search-form');
const overlay = document.querySelector('.overlay');
const close_search = document.querySelector('.js-close-search');

search_icon.addEventListener('click', () => {
  overlay.style.display = "block";
  search_form.style.display = "block";
  document.body.style.overflowY = "hidden";
  document.body.style.paddingRight = "18px";
});

close_search.addEventListener('click', () => {
  overlay.style.display = "none";
  search_form.style.display = "none";
  document.body.style.overflowY = "scroll";
  document.body.style.paddingRight = "0";
});

window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    overlay.style.display = "none";
    search_form.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0";
  }
});

//HAMBURGER MENU
const menu = document.querySelector('.hamburger-div');
const navbar = document.querySelector('.navbar');
const modal_nav = document.querySelector('.modal-nav');
var openmenu = false;

menu.addEventListener('click', () => {

  if(!openmenu) {
    openmenu = true;
    menu.classList.add('open');
    navbar.classList.add('open-nav');
    modal_nav.style.visibility = "visible";
    modal_nav.style.opacity = "1";
    document.body.style.overflowY = "hidden";
  }
  
  else {
    openmenu = false;
    menu.classList.remove('open');
    navbar.classList.remove('open-nav');
    modal_nav.style.visibility = "hidden";
    modal_nav.style.opacity = "0";
    document.body.style.overflowY = "scroll";
  }
});

modal_nav.addEventListener('click', () => {
  if(openmenu) {
    openmenu = false;
    menu.classList.remove('open');
    navbar.classList.remove('open-nav');
    modal_nav.style.visibility = "hidden";
    modal_nav.style.opacity = "0";
    document.body.style.overflowY = "scroll";
  }
});

//SHOPPING SLIDER FROM RIGHT SIDE
const cart = document.querySelector('.js-shopping');
const buy_cancel = document.querySelector('.cancel-buy');
const buyslider = document.querySelector('.js-buy');

cart.addEventListener('click', () => {
  buyslider.classList.add('buy-open');
  overlay.style.display = "block";
  document.body.style.overflowY = "hidden";
  document.body.style.paddingRight = "18px";
});

buy_cancel.addEventListener('click', () => {
  buyslider.classList.remove('buy-open');
  overlay.style.display = "none";
  document.body.style.overflowY = "scroll";
  document.body.style.paddingRight = "0";
});

window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    buyslider.classList.remove('buy-open');
    overlay.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0";
  }
});

//HEART LIKED PRODUCT
const heart_icon = document.querySelector('.fa-heart');
const heart = document.querySelector('.liked');
const close_heart = document.querySelector('.close-liked');

heart_icon.addEventListener('click', () => {
  overlay.style.display = "block";
  heart.style.display = "block";
  document.body.style.overflowY = "hidden";
  document.body.style.paddingRight = "18px";
});

close_heart.addEventListener('click', () => {
  overlay.style.display = "none";
  heart.style.display = "none";
  document.body.style.overflowY = "scroll";
  document.body.style.paddingRight = "0";
});

window.onclick = (event) => {
  if (event.target == overlay) {
    overlay.style.display = "none";
    heart.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0";
  }
};

//REGISTER
const register_link = document.querySelector('.register-link');
const register = document.querySelector('.register');
const close_register = document.querySelector('.close-register');

const username_reg = document.querySelector('.username-reg');
const email_reg = document.querySelector('.email-reg');
const firstPassword_reg = document.querySelector('.pass-reg');
const secondPassword_reg = document.querySelector('.pass-rep-reg');

const errorDiv_reg = document.querySelector('#show-error-reg');
const successDiv_reg = document.querySelector('#success-reg');

// OPEN REGISTER MODAL
register_link.addEventListener('click', () => {
  overlay.style.display = "block";
  register.style.display = "block";
  document.body.style.overflowY = "hidden"; //DISABLE SCROLLING
  document.body.style.paddingRight = "18px";
});

//CLOSE REGISTER MODAL
close_register.addEventListener('click', () => {
  document.body.style.overflowY = "scroll";
  overlay.style.display = "none";
  register.style.display = "none";
  document.body.style.paddingRight = "0";

  //RESET EACH FIELD TO DEFAULT
  email_reg.value = "";
  username_reg.value = "";
  firstPassword_reg.value = "";
  secondPassword_reg.value = "";

  email_reg.style.border = "transparent";
  username_reg.style.border = "transparent";
  firstPassword_reg.style.border = "transparent";
  secondPassword_reg.style.border = "transparent";

  errorDiv_reg.innerHTML = "No error!";
  successDiv_reg.style.display = "none";
});

//CLOSE REGISTER MODAL
window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    overlay.style.display = "none";
    register.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0";

    //RESET EACH FIELD TO DEFAULT
    email_reg.value = "";
    username_reg.value = "";
    firstPassword_reg.value = "";
    secondPassword_reg.value = "";

    email_reg.style.border = "transparent";
    username_reg.style.border = "transparent";
    firstPassword_reg.style.border = "transparent";
    secondPassword_reg.style.border = "transparent";

    errorDiv_reg.innerHTML = "No error!";
    successDiv_reg.style.display = "none";
  }
});

// LOGIN
const login_link = document.querySelector('.login-link');
const login = document.querySelector('.login');
const close_login = document.querySelector('.close-login');

const errorDiv_log_main = document.querySelector('#show-error-log');
const successDiv_log_main = document.querySelector('#success-log');

const username_log_main = document.querySelector('.username-log');
const password_log_main = document.querySelector('.pass-log');

//OPEN LOGIN MODAL
login_link.addEventListener('click', () => {
  overlay.style.display = "block";
  login.style.display = "block";
  document.body.style.overflowY = "hidden"; //DISABLE SCROLLING
  document.body.style.paddingRight = "18px";
});

//CLOSE LOGIN MODAL
close_login.addEventListener('click', () => {
  document.body.style.overflowY = "scroll";
  overlay.style.display = "none";
  login.style.display = "none";
  document.body.style.paddingRight = "0";

  //RESET EACH FIELD TO DEFAULT
  username_log_main.value = "";
  password_log_main.value = "";

  username_log_main.style.border = "transparent";
  password_log_main.style.border = "transparent";

  errorDiv_log_main.innerHTML = "No error!";
  successDiv_log_main.style.display = "none";
});

//CLOSE LOGIN MODAL
window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    overlay.style.display = "none";
    login.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0";

    //RESET EACH FIELD TO DEFAULT
    username_log_main.value = "";
    password_log_main.value = "";
  
    username_log_main.style.border = "transparent";
    password_log_main.style.border = "transparent";
  
    errorDiv_log_main.innerHTML = "No error!";
    successDiv_log_main.style.display = "none";
  }
});

//MENU ACTIVITY
const sections = document.querySelectorAll('.section');
const navLI = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop) {

      current = section.getAttribute('id');
    }
  });

  navLI.forEach(li => {
    li.classList.remove('active');

    if(li.classList.contains(current)) {

      li.classList.add('active');
    }
  });
});

//SLICK HERO
$('.hero-slider').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

//SLICK DOWN
$('.slider').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10',
        slidesToShow: 1,
        dots: true,
        autoplay: true
      }
    }
  ]
});

//SWIPER
const swiper = new Swiper('.swiper', {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//VALIDATE LOGIN
const button_log = document.getElementById('submit-log');
const errorDiv_log = document.querySelector('#show-error-log');
const successDiv_log = document.querySelector('#success-log');
const username_log = document.querySelector('.username-log');
const password_log = document.querySelector('.pass-log');

button_log.addEventListener('click', (error) => {

    let incorrectInput_log = [] //Create array for errors

    //Username validation
    if(username_log.value === '' || username_log.value == null) {
        incorrectInput_log.push('The username is required!\n');
        username_log.style.border = "5px solid red";
    }
    else if(username_log.value.length < 6) {
        incorrectInput_log.push('The username must be at least 6 characters!\n');
        username_log.style.border = "5px solid red";
    }
    else {
        username_log.style.border = "5px solid #00E360";
    }

    //Password validation
    if(password_log.value === '' || password_log.value == null) {
        incorrectInput_log.push('The password is required 2 times to verify!\n');
        password_log.style.border = "5px solid red";
    }
    else if(password_log.value.length < 6 || password_log.value.length >= 20) {
        incorrectInput_log.push('The password should be at least 6 and less than 20 characters!\n');
        password_log.style.border = "5px solid red";
    }
    else {
        password_log.style.border = "5px solid #00E360";
    }

    //Display output
    if (incorrectInput_log !== "") {
        error.preventDefault();
        errorDiv_log.innerText = incorrectInput_log.join(' ');
    }
    
    if (incorrectInput_log.length === 0) {
        error.preventDefault();
        errorDiv_log.style.display = "none";
        successDiv_log.style.display = "block";
        
        username_log.value = "";
        password_log.value = "";

        password_log.style.border = "transparent";
        username_log.style.border = "transparent";
    }
});

//VALIDATE REGISTER
const button = document.getElementById('submit-reg');
const errorDiv = document.querySelector('#show-error-reg');
const successDiv = document.querySelector('#success-reg');
const username = document.querySelector('.username-reg');
const email = document.querySelector('.email-reg');
const firstPassword = document.querySelector('.pass-reg');
const secondPassword = document.querySelector('.pass-rep-reg');

let validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', (error) => {

    let incorrectInput = [] //Create array for errors

    //Email validation
    if(email.value === '' || email.value == null) {
        incorrectInput.push('The email is required!\n');
        email.style.border = "5px solid red";
    }
    else if(!validateEmail(email.value)) {
        incorrectInput.push('Invalid email!\n');
        email.style.border = "5px solid red";
    }
    else {
        email.style.border = "5px solid #00E360";
    }

    //Username validation
    if(username.value === '' || username.value == null) {
        incorrectInput.push('The username is required!\n');
        username.style.border = "5px solid red";
    }
    else if(username.value.length < 6) {
        incorrectInput.push('The username must be at least 6 characters!\n');
        username.style.border = "5px solid red";
    }
    else {
        username.style.border = "5px solid #00E360";
    }

    //Password validation
    if(firstPassword.value === '' || firstPassword.value == null || secondPassword.value === '' || secondPassword.value == null) {
        incorrectInput.push('The password is required 2 times to verify!\n');
        firstPassword.style.border = "5px solid red";
        secondPassword.style.border = "5px solid red";
    }
    else if(firstPassword.value.length < 6 || firstPassword.value.length >= 20) {
        incorrectInput.push('The password should be at least 6 and less than 20 characters!\n');
        firstPassword.style.border = "5px solid red";
        secondPassword.style.border = "5px solid red";
    }
    else if(firstPassword.value !== secondPassword.value) {
        incorrectInput.push('The passwords do not match!\n');
        firstPassword.style.border = "5px solid red";
        secondPassword.style.border = "5px solid red";
    }
    else {
        firstPassword.style.border = "5px solid #00E360";
        secondPassword.style.border = "5px solid #00E360";
    }

    //Display output
    if (incorrectInput !== "") {
        error.preventDefault();
        errorDiv.innerText = incorrectInput.join(' ');
    }
    
    if (incorrectInput.length === 0) {
        error.preventDefault();
        errorDiv.style.display = "none";
        successDiv.style.display = "block";
        
        email.value = "";
        username.value = "";
        firstPassword.value = "";
        secondPassword.value = "";

        email.style.border = "transparent";
        username.style.border = "transparent";
        firstPassword.style.border = "transparent";
        secondPassword.style.border = "transparent";
    }
});