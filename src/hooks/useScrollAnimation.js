import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
const useScrollAnimation = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',distance: '60px',
      duration: 2500,delay: 400,
      reset: true
    });
    // Apply animations
    sr.reveal('.home__img', {
      interval: 100
    });
    sr.reveal('.home__data', { 
      origin: 'bottom',delay: 800 
    });
    }, []);
};
export default useScrollAnimation;