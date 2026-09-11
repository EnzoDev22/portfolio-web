import type { ImageMetadata } from 'astro';
import scooterDiagram from '../assets/screenshots-proyect/api-monopatines/diagram.webp';
import vehiclesDiagram from '../assets/screenshots-proyect/api-vehicles/diagram.webp';
import inventoryAddCategory from '../assets/screenshots-proyect/inventory-system/add-category.webp';
import inventoryAddProduct from '../assets/screenshots-proyect/inventory-system/add-product.webp';
import inventoryCategories from '../assets/screenshots-proyect/inventory-system/categories.webp';
import inventoryLogin from '../assets/screenshots-proyect/inventory-system/login.webp';
import matesHome from '../assets/screenshots-proyect/mates-shop/home.webp';
import numberBlocksFirst from '../assets/screenshots-proyect/number-blocks/first.webp';
import numberBlocksSecond from '../assets/screenshots-proyect/number-blocks/second.webp';
import numberBlocksThird from '../assets/screenshots-proyect/number-blocks/third.webp';
import videogamesGame from '../assets/screenshots-proyect/videogames-site/game.webp';
import videogamesHome from '../assets/screenshots-proyect/videogames-site/home.webp';
import videogamesLogin from '../assets/screenshots-proyect/videogames-site/login.webp';

export interface ProjectTechnology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  inProduction: boolean;
  image: ImageMetadata;
  images: ImageMetadata[];
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
    inProduction: false,
    image: inventoryCategories,
    images: [inventoryCategories, inventoryAddCategory, inventoryAddProduct, inventoryLogin],
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
    inProduction: false,
    image: scooterDiagram,
    images: [],  
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
    inProduction: true,
    image: videogamesHome,
    images: [videogamesHome, videogamesGame, videogamesLogin],
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
    inProduction: false,
    image: vehiclesDiagram,
    images: [],  
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
    inProduction: true,
    image: numberBlocksFirst,
    images: [numberBlocksFirst, numberBlocksSecond, numberBlocksThird],
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
    inProduction: true,
    image: matesHome,
    images: [],  
    githubUrl: 'https://github.com/EnzoDev22/mates-shop-angular',
    projectUrl: 'https://mates-shop-angular.vercel.app/mates',
    technologies: [
      technology('TypeScript', 'tech-typescript.svg'),
      technology('Angular 16', 'tech-angular.svg'),
      technology('SCSS', 'tech-scss.svg'),
    ],
  },
];
