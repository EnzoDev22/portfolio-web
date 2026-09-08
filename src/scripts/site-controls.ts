export {};

const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');
const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

function syncTheme() {
  const dark = root.classList.contains('dark');
  themeButton?.setAttribute('aria-pressed', String(dark));
  themeButton?.setAttribute('aria-label', dark ? themeButton.dataset.lightLabel ?? '' : themeButton.dataset.darkLabel ?? '');
  themeMeta?.setAttribute('content', dark ? '#0a0f0c' : '#f4f6f3');
}

syncTheme();
themeButton?.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  syncTheme();
});

document.querySelector<HTMLAnchorElement>('.language-toggle')?.addEventListener('click', (event) => {
  const link = event.currentTarget as HTMLAnchorElement;
  const path = window.location.pathname;
  const nextPath = document.documentElement.lang === 'en'
    ? path.replace(/^\/en(?=\/|$)/, '') || '/'
    : `/en${path === '/' ? '/' : path}`;
  link.href = `${nextPath}${window.location.search}${window.location.hash}`;
});

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? menuButton.dataset.openLabel ?? '' : menuButton.dataset.closeLabel ?? '');
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
