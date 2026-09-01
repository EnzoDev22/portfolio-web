export {};

document.querySelectorAll<HTMLElement>('[data-project-gallery]').forEach((gallery) => {
  const lightbox = gallery.querySelector<HTMLDialogElement>('[data-gallery-lightbox]');
  const lightboxImage = gallery.querySelector<HTMLImageElement>('[data-lightbox-image]');
  const lightboxCounter = gallery.querySelector<HTMLElement>('[data-lightbox-counter]');
  const closeButton = gallery.querySelector<HTMLButtonElement>('[data-lightbox-close]');
  const previousButton = gallery.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
  const nextButton = gallery.querySelector<HTMLButtonElement>('[data-lightbox-next]');
  const thumbnails = Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-open]'));

  if (!lightbox || !lightboxImage || !closeButton || !thumbnails.length) return;

  const galleryDialog = lightbox;
  const fullImage = lightboxImage;
  const dismissButton = closeButton;

  let activeIndex = 0;
  let previousFocus: HTMLButtonElement | null = null;
  const isEnglish = () => document.documentElement.dataset.lang === 'en';

  function updateImage(index: number) {
    activeIndex = (index + thumbnails.length) % thumbnails.length;
    const thumbnail = thumbnails[activeIndex];
    fullImage.src = thumbnail.dataset.src || '';
    fullImage.alt = isEnglish() ? thumbnail.dataset.altEn || '' : thumbnail.dataset.altEs || '';
    if (lightboxCounter) lightboxCounter.textContent = `${activeIndex + 1} / ${thumbnails.length}`;

    const hasMultipleImages = thumbnails.length > 1;
    if (previousButton) previousButton.hidden = !hasMultipleImages;
    if (nextButton) nextButton.hidden = !hasMultipleImages;
    dismissButton.setAttribute('aria-label', isEnglish() ? 'Close image' : 'Cerrar imagen');
    previousButton?.setAttribute('aria-label', isEnglish() ? 'Previous image' : 'Imagen anterior');
    nextButton?.setAttribute('aria-label', isEnglish() ? 'Next image' : 'Imagen siguiente');
  }

  function closeLightbox() {
    if (galleryDialog.open) galleryDialog.close();
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      previousFocus = thumbnail;
      updateImage(index);
      galleryDialog.showModal();
      dismissButton.focus();
    });
  });

  dismissButton.addEventListener('click', closeLightbox);
  previousButton?.addEventListener('click', () => updateImage(activeIndex - 1));
  nextButton?.addEventListener('click', () => updateImage(activeIndex + 1));

  galleryDialog.addEventListener('click', (event) => {
    if (event.target === galleryDialog) closeLightbox();
  });

  galleryDialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && thumbnails.length > 1) {
      event.preventDefault();
      updateImage(activeIndex - 1);
    } else if (event.key === 'ArrowRight' && thumbnails.length > 1) {
      event.preventDefault();
      updateImage(activeIndex + 1);
    }
  });

  galleryDialog.addEventListener('close', () => {
    fullImage.removeAttribute('src');
    fullImage.alt = '';
    previousFocus?.focus({ preventScroll: true });
    previousFocus = null;
  });

  fullImage.addEventListener('error', () => {
    fullImage.removeAttribute('src');
    fullImage.alt = '';
  });

  new MutationObserver(() => {
    if (galleryDialog.open) updateImage(activeIndex);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
});
