export {};

document.querySelectorAll<HTMLElement>('[data-certificate-viewer]').forEach((viewer) => {
  const dialog = viewer.querySelector<HTMLDialogElement>('[data-certificate-dialog]');
  const image = viewer.querySelector<HTMLImageElement>('[data-certificate-image]');
  const caption = viewer.querySelector<HTMLElement>('[data-certificate-caption]');
  const closeButton = viewer.querySelector<HTMLButtonElement>('[data-certificate-close]');
  const openButtons = Array.from(viewer.querySelectorAll<HTMLButtonElement>('[data-certificate-open]'));

  if (!dialog || !image || !caption || !closeButton || !openButtons.length) return;

  const certificateDialog = dialog;
  const certificateImage = image;
  const certificateCaption = caption;
  const dismissButton = closeButton;
  let previousFocus: HTMLButtonElement | null = null;
  let activeButton: HTMLButtonElement | null = null;
  const isEnglish = () => document.documentElement.dataset.lang === 'en';

  function updateCertificate() {
    if (!activeButton) return;
    certificateImage.src = activeButton.dataset.certificateSrc ?? '';
    certificateImage.alt = isEnglish()
      ? activeButton.dataset.certificateAltEn ?? ''
      : activeButton.dataset.certificateAltEs ?? '';
    certificateCaption.textContent = isEnglish()
      ? activeButton.dataset.certificateTitleEn ?? ''
      : activeButton.dataset.certificateTitleEs ?? '';
    dismissButton.setAttribute('aria-label', isEnglish() ? 'Close certificate' : 'Cerrar certificado');
  }

  function closeCertificate() {
    if (certificateDialog.open) certificateDialog.close();
  }

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      previousFocus = button;
      activeButton = button;
      updateCertificate();
      certificateDialog.showModal();
      dismissButton.focus();
    });
  });

  dismissButton.addEventListener('click', closeCertificate);
  certificateDialog.addEventListener('click', (event) => {
    if (event.target === certificateDialog) closeCertificate();
  });

  certificateDialog.addEventListener('close', () => {
    certificateImage.removeAttribute('src');
    certificateImage.alt = '';
    certificateCaption.textContent = '';
    activeButton = null;
    previousFocus?.focus({ preventScroll: true });
    previousFocus = null;
  });

  certificateImage.addEventListener('error', () => {
    certificateImage.removeAttribute('src');
    certificateImage.alt = '';
  });

  new MutationObserver(() => {
    if (certificateDialog.open) updateCertificate();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
});
