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
  document.body.style.overflow = "hidden";
});

close_search.addEventListener('click', () => {
  overlay.style.display = "none";
  search_form.style.display = "none";
  document.body.style.overflow = "scroll";
});

window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    overlay.style.display = "none";
    search_form.style.display = "none";
    document.body.style.overflow = "scroll";
  }
})

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
    document.body.style.overflow = "hidden";
  }
  
  else {
    openmenu = false;
    menu.classList.remove('open');
    navbar.classList.remove('open-nav');
    modal_nav.style.visibility = "hidden";
    modal_nav.style.opacity = "0";
    document.body.style.overflow = "scroll";
  }
});

modal_nav.addEventListener('click', () => {
  if(openmenu) {
    openmenu = false;
    menu.classList.remove('open');
    navbar.classList.remove('open-nav');
    modal_nav.style.visibility = "hidden";
    modal_nav.style.opacity = "0";
    document.body.style.overflow = "scroll";
  }
});

//SHOPPING SLIDER FROM RIGHT SIDE
const cart = document.querySelector('.js-shopping');
const buy_cancel = document.querySelector('.cancel-buy');
const buyslider = document.querySelector('.js-buy');

cart.addEventListener('click', () => {
  buyslider.classList.add('buy-open');
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

buy_cancel.addEventListener('click', () => {
  buyslider.classList.remove('buy-open');
  overlay.style.display = "none";
  document.body.style.overflow = "scroll";
});

window.addEventListener('click', (e) => {
  if (e.target == overlay) {
    buyslider.classList.remove('buy-open');
    overlay.style.display = "none";
    document.body.style.overflow = "scroll";
  }
});

//HEART LIKED PRODUCT
const heart_icon = document.querySelector('.fa-heart');
const heart = document.querySelector('.liked');
const close_heart = document.querySelector('.close-liked');

heart_icon.addEventListener('click', () => {
  overlay.style.display = "block";
  heart.style.display = "block";
  document.body.style.overflow = "hidden";
});

close_heart.addEventListener('click', () => {
  overlay.style.display = "none";
  heart.style.display = "none";
  document.body.style.overflow = "scroll";
});

window.onclick = (event) => {
  if (event.target == overlay) {
    overlay.style.display = "none";
    heart.style.display = "none";
    document.body.style.overflow = "scroll";
  }
}

// //REGISTER
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
  document.body.style.overflow = "hidden"; //DISABLE SCROLLING
});

//CLOSE REGISTER MODAL
close_register.addEventListener('click', () => {
  document.body.style.overflow = "scroll";
  overlay.style.display = "none";
  register.style.display = "none";

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
    document.body.style.overflow = "scroll";

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
  document.body.style.overflow = "hidden"; //DISABLE SCROLLING
});

//CLOSE LOGIN MODAL
close_login.addEventListener('click', () => {
  document.body.style.overflow = "scroll";
  overlay.style.display = "none";
  login.style.display = "none";

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
    document.body.style.overflow = "scroll";

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
  })

  navLI.forEach(li => {
    li.classList.remove('active');

    if(li.classList.contains(current)) {

      li.classList.add('active');
    }
  })
})