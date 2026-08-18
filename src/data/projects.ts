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
  icon: `/assets/tech/${asset}`,
});


export const projects: Project[] = [
  {
    id: 'sistema-inventario',
    title: 'Sistema de Control de Inventario',
    titleEn: 'Inventory Management System',
    description: 'Aplicación full stack para gestionar categorías y productos, con autenticación mediante Keycloak, backend en Spring Boot 3, base de datos PostgreSQL y frontend en Angular 16. Fue desplegada en Google Cloud Platform utilizando Kubernetes Engine, Cloud SQL y App Engine, e incluye pruebas de API y backend.',
    descriptionEn: 'A full-stack application for managing categories and products, featuring Keycloak authentication, a Spring Boot 3 backend, a PostgreSQL database, and an Angular 16 frontend. It was deployed on Google Cloud Platform using Kubernetes Engine, Cloud SQL, and App Engine, and includes API and backend testing.',
    image: '/assets/screenshots-proyect/inventory-system/categories.jpg',
    images: ['/assets/screenshots-proyect/inventory-system/categories.jpg','/assets/screenshots-proyect/inventory-system/add-category.jpg','/assets/screenshots-proyect/inventory-system/add-product.jpg','/assets/screenshots-proyect/inventory-system/login.jpg'],  
    alt: 'Sistema de control de inventario para gestionar categorías y productos',
    altEn: 'Inventory management system for managing categories and products',
    githubUrl: 'https://github.com/EnzoDev22/inventory-frontend',
    projectUrl: 'https://github.com/',
    technologies: [
      technology('Java', 'tech-java.svg'),
      technology('Spring Boot 3', 'tech-spring-boot.svg'),
      technology('Angular 16', 'tech-angular.svg'),
      technology('PostgreSQL', 'tech-postgresql.svg'),
      technology('Keycloak', 'tech-keycloak.svg'),
      technology('Docker', 'tech-docker.svg'),
      technology('Google Cloud Platform', 'tech-googlecloud.svg'),
      technology('JUnit', 'tech-junit.svg'),
      technology('Postman', 'tech-postman.svg'),
    ],
  },
  {
    id: 'sistema-monopatines',
    title: 'API de Gestión de Monopatines',
    titleEn: 'Scooter Fleet Management API',
    description:
      'Sistema para gestionar una flota de monopatines de uso urbano, desarrollado en versiones monolítica y de microservicios. Está compuesto por servicios para monopatines, usuarios, clientes, estacionamientos, administración, mantenimiento y viajes, con descubrimiento de servicios mediante Eureka Server, API Gateway y autenticación JWT.',
    descriptionEn:
      'A system for managing an urban scooter fleet, developed in both monolithic and microservices-based versions. It includes services for scooters, users, customers, parking stations, administration, maintenance, and trips, with Eureka Server service discovery, an API Gateway, and JWT authentication.',
    image: '/assets/screenshots-proyect/api-monopatines/diagram.jpeg',
    images: [],  
    alt: 'Arquitectura de la API para la gestión de una flota de monopatines',
    altEn: 'API architecture for managing a scooter fleet',
    githubUrl: 'https://github.com/EnzoDev22/APIMonopatines',
    projectUrl: '',
    technologies: [
      technology('Java', 'tech-java.svg'),
      technology('Spring Boot 3', 'tech-spring-boot.svg'),
      technology('PostgreSQL', 'tech-postgresql.svg'),
      technology('Mongo DB', 'tech-mongodb.svg'),
      technology('Docker', 'tech-docker.svg'),
      technology('JUnit', 'tech-junit.svg'),
      technology('Postman', 'tech-postman.svg'),
      technology('JWT', 'tech-jwt.svg'),
    ],
  },
  {
    id: 'sito-videojuegos',
    title: 'Sitio de Videojuegos con Juego Interactivo',
    titleEn: 'Video Game Website with an Interactive Game',
    description:
      'Sitio web responsive de videojuegos desarrollado en equipo con un enfoque Mobile First. Incluye animaciones mediante CSS Keyframes y un juego creado con Canvas. El diseño fue trabajado en Figma mediante un sistema de diseño, prototipos y modelos interactivos, aplicando principios de UX/UI.',
    descriptionEn:
      'A responsive video game website developed collaboratively using a Mobile First approach. It includes CSS Keyframe animations and a game built with Canvas. The interface was designed in Figma using a design system, prototypes, and interactive models while applying UX/UI principles.',
    image: '/assets/screenshots-proyect/videogames-site/home.png',
    images: ['/assets/screenshots-proyect/videogames-site/home.png','/assets/screenshots-proyect/videogames-site/game.png','/assets/screenshots-proyect/videogames-site/login.png'],  
    alt: 'Página principal responsive de un sitio web de videojuegos',
    altEn: 'Responsive home page of a video game website',
    githubUrl: 'https://github.com/EnzoDev22/Tpe_Interfaces_Grupo_15/tree/master/TP4/EntregaFinal',
    projectUrl: 'https://videojuegos-gamestoon.vercel.app/',
    technologies: [
      technology('HTML', 'tech-html.svg'),
      technology('JavaScript', 'tech-javascript.svg'),
      technology('CSS', 'tech-css.svg'),
      technology('Figma', 'tech-figma.svg'),
    ],
  },
  {
    id: 'api-vehiculos',
    title: 'API de Catálogo de Vehículos',
    titleEn: 'Vehicle Catalogue API',
    description:
      'Aplicación para administrar un catálogo de vehículos y categorías mediante una API desarrollada en PHP. Utiliza el patrón MVC, Smarty como motor de plantillas y Bootstrap para la interfaz. El frontend consume la API mediante solicitudes asíncronas con JavaScript.',
    descriptionEn:
      'An application for managing a catalogue of vehicles and categories through a PHP API. It uses the MVC pattern, Smarty as its template engine, and Bootstrap for the interface. The frontend consumes the API through asynchronous JavaScript requests.',
    image: '/assets/screenshots-proyect/api-vehicles/diagram.png',
    images: [],  
    alt: 'Interfaz del catálogo de vehículos y categorías',
    altEn: 'Vehicle and category catalogue interface',
    githubUrl: 'https://github.com/EnzoDev22/API-Catalogo-Vehiculos/tree/master',
    projectUrl: '',
    technologies: [
      technology('PHP', 'tech-php.svg'),
      technology('JavaScript', 'tech-javascript.svg'),
      technology('Smarty', 'tech-smarty.svg'),
      technology('Bootstrap', 'tech-bootstrap.svg'),
    ],
  },
  {
    id: 'number-blocks',
    title: 'Number Blocks',
    titleEn: 'Number Blocks',
    description:
      'Sitio web de Number Blocks, con enfoque en diseño pixel perfect y animaciones CSS con Keyframes. El proyecto fue desarrollado con HTML, CSS y JavaScript, y se centra en la experiencia del usuario y la estética visual.',
    descriptionEn:
      'Number Blocks website, focusing on pixel-perfect design and CSS animations with Keyframes. The project was developed using HTML, CSS, and JavaScript, emphasizing user experience and visual aesthetics.',
    image: '/assets/screenshots-proyect/number-blocks/first.png',
    images: ['/assets/screenshots-proyect/number-blocks/first.png', '/assets/screenshots-proyect/number-blocks/second.png', '/assets/screenshots-proyect/number-blocks/third.png'],  
    alt: 'Imagen deNumber Blocks',
    altEn: 'Image of Number Blocks',
    githubUrl: 'https://github.com/EnzoDev22/Tpe_Interfaces_Grupo_15/tree/tp4/TP4/EntregaFinal',
    projectUrl: 'https://number-blocks.vercel.app/',
    technologies: [
      technology('HTML', 'tech-html.svg'),
      technology('JavaScript', 'tech-javascript.svg'),
      technology('CSS', 'tech-css.svg'),
      technology('Figma', 'tech-figma.svg'),
    ],
  },
  {
    id: 'tienda-mates',
    title: 'Tienda de Mates',
    titleEn: 'Mate Shop',
    description:
      'Catálogo de productos desarrollado con Angular 16 y TypeScript. Utiliza MockAPI para el almacenamiento de los productos, una arquitectura basada en módulos y SCSS para los estilos. El proyecto se encuentra en evolución, con foco en mejorar su interfaz y migrar hacia Angular 21.',
    descriptionEn:
      'A product catalogue developed with Angular 16 and TypeScript. It uses MockAPI for product storage, a module-based architecture, and SCSS for styling. The project is currently evolving, with a focus on improving its interface and migrating to Angular 21.',
    image: '/assets/screenshots-proyect/mates-shop/home.png',
    images: [],  
    alt: 'Catálogo de productos de una tienda online de mates',
    altEn: 'Product catalogue of an online mate shop',
    githubUrl: 'https://github.com/EnzoDev22/mates-shop-angular',
    projectUrl: 'https://mates-shop-angular.vercel.app/mates',
    technologies: [
      technology('TypeScript', 'tech-typescript.svg'),
      technology('Angular 16', 'tech-angular.svg'),
      technology('SCSS', 'tech-scss.svg'),
    ],
  },
];
