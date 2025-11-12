import gsap from 'gsap';

const notificationSystem = () => {
  gsap.to('.one', {
    y: -150,
    scale: 1,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      gsap.to('.one', {
        delay: 2,
        y: -100,
        opacity: 0,
        ease: 'power1.inOut',
        duration: 0.7,
      });
    },
  });

  gsap.to('.two', {
    delay: 4,
    y: -150,
    scale: 1,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      gsap.to('.two', {
        delay: 2,
        y: -100,
        opacity: 0,
        ease: 'power1.inOut',
        duration: 0.7,
      });
    },
  });

  gsap.to('.three', {
    delay: 8,
    y: -150,
    scale: 1,
    duration: 1,
    ease: 'power1.inOut',
    onComplete: () => {
      gsap.to('.three', {
        delay: 2,
        y: -100,
        opacity: 0,
        ease: 'power1.inOut',
        duration: 0.7,
      });
    },
  });
};

notificationSystem();
