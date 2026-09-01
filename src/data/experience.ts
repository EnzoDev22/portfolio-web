export interface ExperienceSkill {
  label: string;
  labelEn: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  roleEn: string;
  startYear: number;
  endYear?: number;
  current?: boolean;
  skills: ExperienceSkill[];
  description?: string;
  descriptionEn?: string;
}

export interface Course {
  title: string;
  titleEn: string;
  institution: string;
  durationHours: number;
  certificateImage?: string;
  certificateAlt?: string;
  certificateAltEn?: string;
}

export interface AcademicExperience {
  title: string;
  titleEn: string;
  institution: string;
  institutionEn: string;
  startYear: number;
  endYear: number;
  description: string;
  descriptionEn: string;
}

export const workExperience: WorkExperience[] = [
  {
    company: 'Grupo Kelsoft',
    role: 'Analista E-commerce · Proyecto Catálogo MELI',
    roleEn: 'E-commerce Analyst · MELI Catalogue Project',
    startYear: 2025,
    current: true,
    skills: [
      {
        label: 'Gestión y mejora del catálogo de Mercado Libre',
        labelEn: 'Mercado Libre catalogue management and improvement',
      },
      {
        label: 'Creación, modificación y eliminación de productos',
        labelEn: 'Product creation, updates and removal',
      },
      {
        label: 'Calidad de publicaciones',
        labelEn: 'Listing quality',
      },
      {
        label: 'Trabajo en equipo',
        labelEn: 'Teamwork',
      },
      {
        label: 'Aprendizaje continuo',
        labelEn: 'Continuous learning',
      },
      {
        label: 'Adaptabilidad',
        labelEn: 'Adaptability',
      },
    ],
  },
];

export const courses: Course[] = [
  {
    title: 'Spring Boot y Angular: Creando aplicaciones como Full Stack',
    titleEn: 'Spring Boot and Angular: Building Full Stack Applications',
    institution: 'Udemy',
    durationHours: 35,
    certificateImage: 'public/assets/certificates/Springboot-Angular.jpg',
    certificateAlt: 'Certificado de finalización del curso de Spring Boot y Angular',
    certificateAltEn: 'Certificate of completion for Spring Boot and Angular course',
  },
];

export const academicExperience: AcademicExperience[] = [
  {
    title: 'Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas',
    titleEn: 'University Technical Degree in Software Development',
    institution: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
    institutionEn: 'National University of Central Buenos Aires Province',
    startYear: 2022,
    endYear: 2025,
    description: 'Formación integral en análisis, diseño, desarrollo, pruebas y mantenimiento de aplicaciones a lo largo del ciclo de vida del software.',
    descriptionEn: 'Comprehensive training in application analysis, design, development, testing and maintenance throughout the software development life cycle.',
  },
];