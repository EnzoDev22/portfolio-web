import type { Project } from '../data/projects';

const dialogElement = document.querySelector<HTMLDialogElement>('#project-modal');
const dataNode = document.querySelector<HTMLScriptElement>('[data-project-modal-data]');

if (dialogElement && dataNode && dialogElement.dataset.initialized !== 'true') {
  const dialog = dialogElement;
  dialog.dataset.initialized = 'true';

  const projects = JSON.parse(dataNode.textContent || '[]') as Project[];
  const projectsById = new Map(projects.map((project) => [project.id, project]));
  const surface = dialog.querySelector<HTMLElement>('.project-modal__surface');
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-modal-close]');
  const mainImage = dialog.querySelector<HTMLImageElement>('[data-modal-main-image]');
  const thumbnails = dialog.querySelector<HTMLElement>('[data-gallery-thumbnails]');
  const technologies = dialog.querySelector<HTMLUListElement>('[data-modal-technologies]');
  const githubLink = dialog.querySelector<HTMLAnchorElement>('[data-modal-github]');
  const projectLink = dialog.querySelector<HTMLAnchorElement>('[data-modal-project]');
  const previousButton = dialog.querySelector<HTMLButtonElement>('[data-gallery-prev]');
  const nextButton = dialog.querySelector<HTMLButtonElement>('[data-gallery-next]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  let activeProject: Project | undefined;
  let activeImage = 0;
  let previousFocus: HTMLElement | null = null;
  let bodyOverflow = '';
  let bodyPaddingRight = '';

  const isEnglish = () => document.documentElement.dataset.lang === 'en';

  function setText(selector: string, value: string) {
    const element = dialog?.querySelector<HTMLElement>(selector);
    if (element) element.textContent = value;
  }

  function updateGallery(index: number) {
    if (!activeProject || !mainImage || !thumbnails) return;
    const images = activeProject.images.length ? activeProject.images : [activeProject.image];
    activeImage = (index + images.length) % images.length;
    mainImage.src = images[activeImage];
    mainImage.alt = isEnglish() ? activeProject.altEn : activeProject.alt;

    thumbnails.replaceChildren();
    images.slice(0, 3).forEach((image, imageIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'project-thumbnail';
      button.dataset.galleryIndex = String(imageIndex);
      button.setAttribute('aria-label', `${isEnglish() ? 'Show image' : 'Mostrar imagen'} ${imageIndex + 1}`);
      button.setAttribute('aria-current', String(imageIndex === activeImage));

      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = '';
      button.append(imageElement);
      button.addEventListener('click', () => updateGallery(imageIndex));
      thumbnails.append(button);
    });
  }

  function renderProject(project: Project) {
    activeProject = project;
    activeImage = 0;
    setText('[data-modal-title-es]', project.title);
    setText('[data-modal-title-en]', project.titleEn);
    setText('[data-modal-description-es]', project.description);
    setText('[data-modal-description-en]', project.descriptionEn);

    if (technologies) {
      technologies.replaceChildren();
      project.technologies.forEach((technology) => {
        const item = document.createElement('li');
        item.setAttribute('aria-label', technology.name);
        item.title = technology.name;

        const icon = document.createElement('span');
        icon.className = 'project-technology-icon';
        icon.style.setProperty('--project-technology-icon', `url("${technology.icon}")`);
        icon.setAttribute('aria-hidden', 'true');
        item.append(icon);
        technologies.append(item);
      });
    }

    if (githubLink) {
      githubLink.href = project.githubUrl;
      githubLink.setAttribute('aria-label', `${isEnglish() ? 'View' : 'Ver'} ${isEnglish() ? project.titleEn : project.title} en GitHub`);
    }
    if (projectLink) projectLink.href = project.projectUrl;
    updateGallery(0);
  }

  function lockDocumentScroll() {
    bodyOverflow = document.body.style.overflow;
    bodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  function unlockDocumentScroll() {
    document.body.style.overflow = bodyOverflow;
    document.body.style.paddingRight = bodyPaddingRight;
  }

  function openProject(project: Project, trigger: HTMLElement) {
    if (dialog?.open) return;
    previousFocus = trigger;
    renderProject(project);
    lockDocumentScroll();
    dialog.dataset.state = 'opening';
    dialog.showModal();
    requestAnimationFrame(() => {
      dialog.dataset.state = 'open';
      closeButton?.focus();
    });
  }

  function finishClose() {
    if (!dialog?.open) return;
    dialog.close();
  }

  function requestClose() {
    if (!dialog?.open || dialog.dataset.state === 'closing') return;
    dialog.dataset.state = 'closing';
    if (reducedMotion.matches) {
      finishClose();
      return;
    }
    window.setTimeout(finishClose, 180);
  }

  document.querySelectorAll<HTMLButtonElement>('[data-project-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = projectsById.get(button.dataset.projectId || '');
      if (project) openProject(project, button);
    });
  });

  closeButton?.addEventListener('click', requestClose);
  previousButton?.addEventListener('click', () => updateGallery(activeImage - 1));
  nextButton?.addEventListener('click', () => updateGallery(activeImage + 1));

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    requestClose();
  });

  dialog.addEventListener('click', (event) => {
    if (!surface) return;
    const bounds = surface.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) requestClose();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      requestClose();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'),
    ).filter((element) => !element.hidden && element.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  dialog.addEventListener('close', () => {
    dialog.dataset.state = 'closed';
    unlockDocumentScroll();
    previousFocus?.focus();
    previousFocus = null;
  });

  new MutationObserver(() => {
    if (activeProject && dialog.open) updateGallery(activeImage);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
}
