export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  inProduction: boolean;
  description: string;
  descriptionEn: string;
  problem: string;
  problemEn: string;
  built: string;
  builtEn: string;
  technicalDecisions: string;
  technicalDecisionsEn: string;
  result: string;
  resultEn: string;
  image: string;
  images: string[];
  alt: string;
  altEn: string;
  githubUrl: string;
  projectUrl: string;
  videoUrl?: string;
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
    subtitle: 'Gestión full stack de inventario desplegada en la nube',
    subtitleEn: 'Cloud-deployed full-stack inventory management',
    inProduction: false,
    description: 'Aplicación full stack para gestionar categorías y productos, con autenticación mediante Keycloak, backend en Spring Boot 3, base de datos PostgreSQL y frontend en Angular 16. Fue desplegada en Google Cloud Platform utilizando Kubernetes Engine, Cloud SQL y App Engine, e incluye pruebas de API y backend.',
    descriptionEn: 'A full-stack application for managing categories and products, featuring Keycloak authentication, a Spring Boot 3 backend, a PostgreSQL database, and an Angular 16 frontend. It was deployed on Google Cloud Platform using Kubernetes Engine, Cloud SQL, and App Engine, and includes API and backend testing.',
    problem: 'La gestión de categorías y productos necesitaba centralizar el inventario y proteger las operaciones para que cada usuario accediera únicamente a las funciones correspondientes.',
    problemEn: 'Category and product management needed a centralized inventory and protected operations so each user could access only the appropriate features.',
    built: 'Construí una aplicación full stack para administrar categorías y productos, con autenticación, una API de negocio y una interfaz web para las operaciones del inventario.',
    builtEn: 'I built a full-stack application for managing categories and products, with authentication, a business API, and a web interface for inventory operations.',
    technicalDecisions: 'Separé frontend y backend con Angular 16 y Spring Boot 3, utilicé PostgreSQL para la persistencia y Keycloak para la identidad. La solución se contenedorizó con Docker y se desplegó sobre servicios de Google Cloud Platform.',
    technicalDecisionsEn: 'I separated the frontend and backend with Angular 16 and Spring Boot 3, used PostgreSQL for persistence, and Keycloak for identity. The solution was containerized with Docker and deployed using Google Cloud Platform services.',
    result: 'El resultado es una solución desplegada en la nube que reúne la gestión del inventario, el control de acceso y las pruebas de API y backend en un mismo producto.',
    resultEn: 'The result is a cloud-deployed solution that brings inventory management, access control, and API and backend testing together in one product.',
    image: '/assets/screenshots-proyect/inventory-system/categories.webp',
    images: ['/assets/screenshots-proyect/inventory-system/categories.webp','/assets/screenshots-proyect/inventory-system/add-category.webp','/assets/screenshots-proyect/inventory-system/add-product.webp','/assets/screenshots-proyect/inventory-system/login.webp'],  
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
    subtitle: 'Arquitectura monolítica y de microservicios para movilidad urbana',
    subtitleEn: 'Monolithic and microservices architecture for urban mobility',
    inProduction: false,
    description:
      'Sistema para gestionar una flota de monopatines de uso urbano, desarrollado en versiones monolítica y de microservicios. Está compuesto por servicios para monopatines, usuarios, clientes, estacionamientos, administración, mantenimiento y viajes, con descubrimiento de servicios mediante Eureka Server, API Gateway y autenticación JWT.',
    descriptionEn:
      'A system for managing an urban scooter fleet, developed in both monolithic and microservices-based versions. It includes services for scooters, users, customers, parking stations, administration, maintenance, and trips, with Eureka Server service discovery, an API Gateway, and JWT authentication.',
    problem: 'Administrar una flota urbana exige coordinar monopatines, usuarios, clientes, estacionamientos, mantenimiento y viajes sin perder consistencia ni seguridad entre las operaciones.',
    problemEn: 'Managing an urban fleet requires coordinating scooters, users, customers, parking stations, maintenance, and trips without losing consistency or security across operations.',
    built: 'Construí el sistema en una versión monolítica y otra basada en microservicios, cubriendo los servicios centrales de la flota, la administración, el mantenimiento y los viajes.',
    builtEn: 'I built the system in both monolithic and microservices-based versions, covering the fleet’s core services, administration, maintenance, and trips.',
    technicalDecisions: 'La versión distribuida utiliza Eureka Server para descubrimiento, API Gateway como punto de entrada y JWT para autenticación. PostgreSQL y MongoDB resuelven distintas necesidades de persistencia, con Docker para estandarizar la ejecución.',
    technicalDecisionsEn: 'The distributed version uses Eureka Server for discovery, an API Gateway as its entry point, and JWT for authentication. PostgreSQL and MongoDB address different persistence needs, with Docker standardizing execution.',
    result: 'El resultado es un backend que cubre el ciclo operativo de una flota y documenta la evolución de una arquitectura monolítica hacia servicios independientes y comprobables.',
    resultEn: 'The result is a backend that covers a fleet’s operational lifecycle and demonstrates the evolution from a monolithic architecture to independent, testable services.',
    image: '/assets/screenshots-proyect/api-monopatines/diagram.webp',
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
    subtitle: 'Experiencia responsive con juego interactivo y diseño UX/UI',
    subtitleEn: 'Responsive experience with an interactive game and UX/UI design',
    inProduction: true,
    description:
      'Sitio web responsive de videojuegos desarrollado en equipo con un enfoque Mobile First. Incluye animaciones mediante CSS Keyframes y un juego creado con Canvas. El diseño fue trabajado en Figma mediante un sistema de diseño, prototipos y modelos interactivos, aplicando principios de UX/UI.',
    descriptionEn:
      'A responsive video game website developed collaboratively using a Mobile First approach. It includes CSS Keyframe animations and a game built with Canvas. The interface was designed in Figma using a design system, prototypes, and interactive models while applying UX/UI principles.',
    problem: 'El desafío era crear una experiencia de videojuegos atractiva y usable desde pantallas pequeñas, integrando contenido, animaciones y una mecánica jugable dentro del mismo sitio.',
    problemEn: 'The challenge was to create an engaging video game experience that worked from small screens upward, combining content, animation, and playable mechanics in one website.',
    built: 'Construimos un sitio responsive con navegación, pantallas de acceso y un juego interactivo desarrollado con Canvas, acompañado por animaciones que refuerzan la identidad visual.',
    builtEn: 'We built a responsive website with navigation, sign-in screens, and an interactive Canvas game, supported by animations that reinforce its visual identity.',
    technicalDecisions: 'Aplicamos Mobile First, HTML semántico, JavaScript y animaciones con CSS Keyframes. El diseño se definió en Figma mediante un sistema de diseño, prototipos y modelos interactivos.',
    technicalDecisionsEn: 'We applied a Mobile First approach, semantic HTML, JavaScript, and CSS Keyframe animations. The interface was defined in Figma through a design system, prototypes, and interactive models.',
    result: 'El resultado es una experiencia publicada y jugable que se adapta a distintos dispositivos y combina diseño UX/UI con interacción en tiempo real.',
    resultEn: 'The result is a published, playable experience that adapts to different devices and combines UX/UI design with real-time interaction.',
    image: '/assets/screenshots-proyect/videogames-site/home.webp',
    images: ['/assets/screenshots-proyect/videogames-site/home.webp','/assets/screenshots-proyect/videogames-site/game.webp','/assets/screenshots-proyect/videogames-site/login.webp'],  
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
    subtitle: 'Catálogo administrable respaldado por una API REST en PHP',
    subtitleEn: 'Manageable catalogue powered by a PHP REST API',
    inProduction: false,
    description:
      'Aplicación para administrar un catálogo de vehículos y categorías mediante una API desarrollada en PHP. Utiliza el patrón MVC, Smarty como motor de plantillas y Bootstrap para la interfaz. El frontend consume la API mediante solicitudes asíncronas con JavaScript.',
    descriptionEn:
      'An application for managing a catalogue of vehicles and categories through a PHP API. It uses the MVC pattern, Smarty as its template engine, and Bootstrap for the interface. The frontend consumes the API through asynchronous JavaScript requests.',
    problem: 'La administración de vehículos y categorías requería una fuente de datos centralizada y una interfaz capaz de consultar y actualizar el catálogo sin recargar cada pantalla.',
    problemEn: 'Vehicle and category management required a centralized data source and an interface capable of querying and updating the catalogue without reloading every screen.',
    built: 'Construí una API en PHP para administrar el catálogo y una interfaz web que consume sus recursos mediante solicitudes asíncronas con JavaScript.',
    builtEn: 'I built a PHP API for managing the catalogue and a web interface that consumes its resources through asynchronous JavaScript requests.',
    technicalDecisions: 'Organicé el backend con el patrón MVC, utilicé Smarty para las plantillas y Bootstrap para una interfaz consistente. La separación mediante API mantiene desacopladas la presentación y la gestión de datos.',
    technicalDecisionsEn: 'I organized the backend with the MVC pattern, used Smarty for templates, and Bootstrap for a consistent interface. The API boundary keeps presentation and data management decoupled.',
    result: 'El resultado es un catálogo administrable de vehículos y categorías, con operaciones expuestas por API y una experiencia web dinámica para utilizarlas.',
    resultEn: 'The result is a manageable vehicle and category catalogue, with operations exposed through an API and a dynamic web experience for using them.',
    image: '/assets/screenshots-proyect/api-vehicles/diagram.webp',
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
    subtitle: 'Experiencia pixel perfect con animaciones CSS',
    subtitleEn: 'Pixel-perfect experience with CSS animations',
    inProduction: true,
    description:
      'Sitio web de Number Blocks, con enfoque en diseño pixel perfect y animaciones CSS con Keyframes. El proyecto fue desarrollado con HTML, CSS y JavaScript, y se centra en la experiencia del usuario y la estética visual.',
    descriptionEn:
      'Number Blocks website, focusing on pixel-perfect design and CSS animations with Keyframes. The project was developed using HTML, CSS, and JavaScript, emphasizing user experience and visual aesthetics.',
    problem: 'El proyecto requería trasladar un universo visual muy reconocible a la web con precisión, manteniendo una experiencia clara, animada y adaptable.',
    problemEn: 'The project required translating a highly recognizable visual universe to the web with precision while keeping the experience clear, animated, and adaptable.',
    built: 'Construí un sitio de Number Blocks centrado en la composición pixel perfect, la interacción visual y una navegación que conserva el carácter del diseño original.',
    builtEn: 'I built a Number Blocks website focused on pixel-perfect composition, visual interaction, and navigation that preserves the character of the original design.',
    technicalDecisions: 'Utilicé HTML, CSS y JavaScript sin dependencias de interfaz, con CSS Keyframes para las animaciones y Figma para definir y validar la propuesta visual.',
    technicalDecisionsEn: 'I used HTML, CSS, and JavaScript without UI dependencies, CSS Keyframes for animation, and Figma to define and validate the visual direction.',
    result: 'El resultado es una experiencia publicada que combina fidelidad visual, animaciones y adaptación responsive en una implementación web liviana.',
    resultEn: 'The result is a published experience combining visual fidelity, animation, and responsive behavior in a lightweight web implementation.',
    image: '/assets/screenshots-proyect/number-blocks/first.webp',
    images: ['/assets/screenshots-proyect/number-blocks/first.webp', '/assets/screenshots-proyect/number-blocks/second.webp', '/assets/screenshots-proyect/number-blocks/third.webp'],  
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
    subtitle: 'Catálogo modular en Angular orientado a comercio electrónico',
    subtitleEn: 'Modular Angular catalogue built for e-commerce',
    inProduction: true,
    description:
      'Catálogo de productos desarrollado con Angular 16 y TypeScript. Utiliza MockAPI para el almacenamiento de los productos, una arquitectura basada en módulos y SCSS para los estilos. El proyecto se encuentra en evolución, con foco en mejorar su interfaz y migrar hacia Angular 21.',
    descriptionEn:
      'A product catalogue developed with Angular 16 and TypeScript. It uses MockAPI for product storage, a module-based architecture, and SCSS for styling. The project is currently evolving, with a focus on improving its interface and migrating to Angular 21.',
    problem: 'La tienda necesitaba organizar y presentar un catálogo de productos con datos persistidos de forma remota y una base que pudiera evolucionar sin concentrar toda la lógica en una sola pantalla.',
    problemEn: 'The shop needed to organize and present a product catalogue with remotely persisted data and a foundation that could evolve without concentrating all logic in one screen.',
    built: 'Construí un catálogo de mates con Angular y TypeScript, conectado a MockAPI para almacenar y recuperar los productos desde una interfaz web.',
    builtEn: 'I built a mate catalogue with Angular and TypeScript, connected to MockAPI to store and retrieve products through a web interface.',
    technicalDecisions: 'La aplicación utiliza una arquitectura basada en módulos para separar responsabilidades y SCSS para mantener los estilos. Su evolución contempla mejorar la interfaz y migrar hacia Angular 21.',
    technicalDecisionsEn: 'The application uses a module-based architecture to separate responsibilities and SCSS to maintain its styles. Its evolution includes improving the interface and migrating to Angular 21.',
    result: 'El resultado es una base funcional y publicada para comercio electrónico, preparada para continuar mejorando su experiencia y actualizar su stack tecnológico.',
    resultEn: 'The result is a functional, published e-commerce foundation prepared for continued experience improvements and a future technology-stack update.',
    image: '/assets/screenshots-proyect/mates-shop/home.webp',
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
