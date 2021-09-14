gsap.fromTo('.mobile-div', { y: '-100px', opacity: 0 }, { ease: 'power1', duration: 0.5, y: 0, opacity: 1 })

gsap.from('.list-item', { duration: .5, opacity: 0, delay: .5, stagger: 0.5 })

gsap.from('.icons-div', { duration: 1, x: '100vw', ease: 'sine', delay: 2 })

gsap.from('.logo-div', { duration: 1, x: '-100vw', ease: 'sine', delay: 2 })

gsap.from('.swiper', {

    scrollTrigger: {
        trigger: '.swiper-div',
        start: "top center"
    },
    x: 400,
    ease: 'slow',
    duration: .8,
    opacity: 0
}, "-=2");

gsap.from('.slider', {

    scrollTrigger: {
        trigger: '.slider',
        start: "top center"
    },
    x: 400,
    ease: 'slow',
    duration: .8,
    opacity: 0
}, "-=2");


gsap.from('.contact', {

    scrollTrigger: {
        trigger: '.contact',
        start: "top bottom"
    },
    y: 300,
    ease: 'slow',
    duration: 1.5,
    opacity: 0
}, "-=2");

gsap.from('.contact-form', {

    scrollTrigger: {
        trigger: '.contact-form',
        start: "top bottom"
    },
    x: '100vw',
    opacity: 0,
    duration: 0.5
}, "-=2");

gsap.from('.contactinfo', {

    scrollTrigger: {
        trigger: '.contact-form',
        start: "top bottom"
    },
    x: '-100vw',
    opacity: 0,
    duration: 0.5
}, "-=2");