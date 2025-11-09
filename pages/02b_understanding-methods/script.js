import gsap from 'gsap';

gsap.to('.box', {
  background: '#9b5782ff',
  borderRadius: '50%',
  rotation: 360,
  duration: 1.5,
  scale: 1.1,
  repeat: 3,
  yoyo: true,
});
