const revealSections = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-section]'));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

if (revealSections.length && !reducedMotion.matches && 'IntersectionObserver' in window) {
  revealSections.forEach((section) => {
    const bounds = section.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      section.classList.add('is-revealed');
    }
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -5% 0px',
  });

  document.documentElement.classList.add('section-reveal-enabled');
  revealSections
    .filter((section) => !section.classList.contains('is-revealed'))
    .forEach((section) => revealObserver.observe(section));
}
