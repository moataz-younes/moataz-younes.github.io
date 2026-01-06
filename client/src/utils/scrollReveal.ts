// Enhanced scroll reveal utility using IntersectionObserver
// Automatically adds 'revealed' class to elements with 'scroll-reveal' class
// Improved with better performance and staggered animations

export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.15, // Trigger slightly earlier for better UX
    rootMargin: '0px 0px -100px 0px', // Start animation before element is fully visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add revealed class with a slight delay for smoother animation
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, 50);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-reveal class
  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

