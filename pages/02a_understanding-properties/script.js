import gsap from 'gsap';

gsap.to('.box', {
  opacity: 1,
  rotation: 360,
  background: '#ff617f',
  borderRadius: '50%',
  scale: 1.2,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: 'bounce',
});
