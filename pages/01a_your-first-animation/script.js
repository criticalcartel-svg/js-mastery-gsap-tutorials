import { gsap } from 'gsap';

gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to('.card', {
      yoyo: true,
      duration: 0.5,
      repeat: -1,
      y: -20,
    });
  },
});
