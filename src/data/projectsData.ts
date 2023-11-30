// src/data/projectsData.ts

export interface Project {
  id: string; // Changed from number to string
  title: string;
  thumbnail: string;
}

export const projectsData: Project[] = [
  {
    id: 'gearguroo', // Use a string identifier
    title: 'GearGuroo: Bicycle Gear Recommendation System',
    thumbnail: '/gearguroo/GearGurooThumbnail.jpg',
  },
  {
    id: 'vise',
    title: 'Vise: Machine Shop Project',
    thumbnail: '/vise/1.jpg',
  },
  // ... other projects
];
