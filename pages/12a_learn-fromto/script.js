import gsap from 'gsap';

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.5,
      repeat: -1,
      duration: 0.6,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.1,
    }
  );
});
