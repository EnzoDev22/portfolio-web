export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  images: string[];
  alt: string;
  altEn: string;
  githubUrl: string;
  projectUrl: string;
  technologies: ProjectTechnology[];
}

const technology = (name: string, asset: string): ProjectTechnology => ({
  name,
  icon: `/assets/${asset}`,
});

export const projects: Project[] = [
  {
    id: 'sistema-monopatines',
    title: 'Sistema de monopatines',
    titleEn: 'Scooter system',
    description:
      'Sistema integral para administrar el alquiler, seguimiento y guardado de monopatines eléctricos.',
    descriptionEn:
      'An end-to-end system for managing electric scooter rentals, tracking, and storage.',
    image: '/assets/raw-7.jpg',
    images: ['/assets/raw-7.jpg', '/assets/raw-7.jpg', '/assets/raw-7.jpg'],
    alt: 'Sistema de alquiler y guardado de monopatines eléctricos',
    altEn: 'Electric scooter rental and storage system',
    githubUrl: 'https://github.com/',
    projectUrl: 'https://github.com/',
    technologies: [
      technology('HTML', 'tech-html.svg'),
      technology('CSS', 'tech-css.svg'),
      technology('JavaScript', 'tech-javascript.svg'),
      technology('Angular', 'tech-angular.svg'),
      technology('npm', 'tech-npm.svg'),
    ],
  },
  {
    id: 'sitio-videojuegos',
    title: 'Sitio de videojuegos',
    titleEn: 'Video game website',
    description:
      'Experiencia web enfocada en descubrir videojuegos mediante una interfaz visual, clara y adaptable.',
    descriptionEn:
      'A responsive, visual web experience focused on making video games easy to discover.',
    image: '/assets/raw-8.png',
    images: ['/assets/raw-8.png', '/assets/raw-8.png', '/assets/raw-8.png'],
    alt: 'Página principal de una tienda de videojuegos',
    altEn: 'Home page of a video game store',
    githubUrl: 'https://github.com/',
    projectUrl: 'https://github.com/',
    technologies: [
      technology('HTML', 'tech-html.svg'),
      technology('CSS', 'tech-css.svg'),
      technology('JavaScript', 'tech-javascript.svg'),
      technology('TypeScript', 'tech-typescript.svg'),
      technology('Java', 'tech-java.svg'),
    ],
  },
  {
    id: 'tienda-mates',
    title: 'Tienda de mates',
    titleEn: 'Mate shop',
    description:
      'Catálogo de comercio electrónico para explorar productos, comparar alternativas y simplificar la compra.',
    descriptionEn:
      'An e-commerce catalogue for browsing products, comparing options, and simplifying purchases.',
    image: '/assets/raw-9.png',
    images: ['/assets/raw-9.png', '/assets/raw-9.png', '/assets/raw-9.png'],
    alt: 'Catálogo de una tienda online de mates',
    altEn: 'Online mate shop catalogue',
    githubUrl: 'https://github.com/',
    projectUrl: 'https://github.com/',
    technologies: [
      technology('HTML', 'tech-html.svg'),
      technology('CSS', 'tech-css.svg'),
      technology('JavaScript', 'tech-javascript.svg'),
      technology('PHP', 'tech-php.svg'),
      technology('Git', 'tech-git.svg'),
    ],
  },
];
