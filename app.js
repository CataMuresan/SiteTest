const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.75});

tl.to('.intro', {y: "-100%", duration: 1}, "-=1.1");

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});

tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

// window.scrollTo(0, 0);

const refresh = () =>{
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

refresh();

