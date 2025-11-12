import gsap from 'gsap';

const showToastLoop = () => {
  gsap.to('.toast', {
    scale: 1,
    y: -120,
    opacity: 1,
    ease: 'power4.in',
    duration: 1,
    // repeat: 2,
    // repeatDelay: 2,

    onComplete: () => {
      gsap.to('.toast', {
        delay: 2,
        y: 150,
        scale: 0.95,
        duration: 1,
        opacity: 0,
        ease: 'power4.out',
      });
    },
  });
};

showToastLoop();
