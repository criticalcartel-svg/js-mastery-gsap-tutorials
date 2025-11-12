import gsap from 'gsap';

const repeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
  y: 100,
  scale: 0.95,
  opacity: 0,
  duration: 0.5,
  ease: 'power4.inOut',
  delay: 0.25,
  stagger: 0.2,
  onComplete: () => {
    gsap.to('.card', {
      y: 300,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });
  },
});

repeat.addEventListener('click', () => {
  animation.restart();
});
