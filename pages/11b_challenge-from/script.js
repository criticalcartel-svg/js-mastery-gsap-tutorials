import gsap from 'gsap';

const card = document.querySelector('#card');

card.addEventListener('click', () => {
  gsap.from(card, {
    opacity: 0,
    background: red,
    ease: 'power1.in',
    rotateY: 90,
  });
});
