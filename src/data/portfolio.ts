export { projects } from './projects';

export const skills = [
  ['HTML', '/assets/tech-html.svg'],
  ['CSS', '/assets/tech-css.svg'],
  ['JavaScript', '/assets/tech-javascript.svg'],
  ['TypeScript', '/assets/tech-typescript.svg'],
  ['Angular', '/assets/tech-angular.svg'],
  ['Java', '/assets/tech-java.svg'],
  ['GitHub', '/assets/tech-github.svg'],
  ['PHP', '/assets/tech-php.svg'],
  ['npm', '/assets/tech-npm.svg'],
  ['Git', '/assets/tech-git.svg'],
] as const;

export const education = [
  {
    eyebrow: '20XX · FORMACIÓN',
    eyebrowEn: '20XX · EDUCATION',
    title: 'Título o carrera',
    titleEn: 'Degree or program',
    source: 'Institución · Modalidad',
    sourceEn: 'Institution · Format',
    body: 'Agregá aquí una breve descripción del recorrido, los contenidos principales y lo que incorporaste.',
    bodyEn: 'Add a short summary of the program, its main subjects, and what you learned.',
  },
  {
    eyebrow: '20XX · CERTIFICACIÓN',
    eyebrowEn: '20XX · CERTIFICATION',
    title: 'Certificación destacada',
    titleEn: 'Featured certification',
    source: 'Entidad emisora · Credencial',
    sourceEn: 'Issuing organization · Credential',
    body: 'Incluí las competencias validadas y, si corresponde, el enlace o identificador de la credencial.',
    bodyEn: 'Describe the validated skills and, when relevant, include the credential link or identifier.',
  },
  {
    eyebrow: 'ACTUALIDAD',
    eyebrowEn: 'CURRENT',
    title: 'Aprendizaje continuo',
    titleEn: 'Continuous learning',
    source: 'Cursos · Práctica · Proyectos',
    sourceEn: 'Courses · Practice · Projects',
    body: 'Un espacio para mostrar que seguís aprendiendo y aplicando nuevas herramientas de forma constante.',
    bodyEn: 'A place to show how you keep learning and applying new tools consistently.',
  },
] as const;
