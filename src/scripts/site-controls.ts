export {};

const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');
const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

function syncTheme() {
  const dark = root.classList.contains('dark');
  themeButton?.setAttribute('aria-pressed', String(dark));
  themeButton?.setAttribute('aria-label', dark ? 'Activar tema claro' : 'Activar tema oscuro');
  themeMeta?.setAttribute('content', dark ? '#0a0f0c' : '#f4f6f3');
}

syncTheme();
themeButton?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  syncTheme();
});

const languageButton = document.querySelector<HTMLButtonElement>('.language-toggle');
const languageButtonText = languageButton?.querySelector<HTMLElement>('span');
const backToTopLink = document.querySelector<HTMLAnchorElement>('.back-to-top');
const reducedLanguageMotion = matchMedia('(prefers-reduced-motion: reduce)');
let languageTransitioning = false;

const waitForLanguageTransition = (duration: number) => new Promise((resolve) => window.setTimeout(resolve, duration));

function updateLanguage(next: 'es' | 'en') {
  root.dataset.lang = next;
  root.lang = next;
  localStorage.setItem('language', next);
  if (languageButtonText) languageButtonText.textContent = next.toUpperCase();
  languageButton?.setAttribute('aria-pressed', String(next === 'en'));
  backToTopLink?.setAttribute('aria-label', next === 'en' ? 'Back to top' : 'Volver al inicio');
}

updateLanguage(root.dataset.lang === 'en' ? 'en' : 'es');

languageButton?.addEventListener('click', async () => {
  if (languageTransitioning) return;
  const next = root.dataset.lang === 'en' ? 'es' : 'en';

  if (reducedLanguageMotion.matches) {
    updateLanguage(next);
    return;
  }

  languageTransitioning = true;
  root.classList.add('is-language-leaving');
  await waitForLanguageTransition(100);
  root.classList.remove('is-language-leaving');
  updateLanguage(next);
  root.classList.add('is-language-entering');
  await waitForLanguageTransition(180);
  root.classList.remove('is-language-entering');
  languageTransitioning = false;
});

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  if (mobileMenu) mobileMenu.hidden = isOpen;
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a[href="#inicio"], .mobile-nav a[href="#inicio"], .back-to-top[href="#inicio"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState(null, '', '#inicio');
    window.scrollTo({ top: 0 });
  });
});
