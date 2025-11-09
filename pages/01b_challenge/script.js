import gsap from 'gsap';

gsap.to('.card', {
  opacity: 1,
  rotate: 360,
  duration: 2,
  borderRadius: '50%',
  background: '#e76ab1',
  scale: 1.2,
  yoyo: true,
  repeat: -1,
  ease: 'power1.inOut',
});
