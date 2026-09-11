export interface WorkExperience {
  id: string;
  startYear: number;
  endYear?: number;
  current?: boolean;
  skillIds: string[];
  hasDescription?: boolean;
}

export interface Course {
  id: string;
  durationHours: number;
  certificateImage?: string;
}

export interface AcademicExperience {
  id: string;
  startYear: number;
  endYear: number;
}

export const workExperience: WorkExperience[] = [
  {
    id: 'kelsoftMeli',
    startYear: 2025,
    current: true,
    skillIds: ['catalogue', 'products', 'quality', 'teamwork', 'learning', 'adaptability'],
  },
];

export const courses: Course[] = [
  {
    id: 'springBootAngular',
    durationHours: 35,
    certificateImage: '/assets/certificates/Springboot-Angular.webp',
  },
];

export const academicExperience: AcademicExperience[] = [
  {
    id: 'softwareDevelopment',
    startYear: 2022,
    endYear: 2025,
  },
];
