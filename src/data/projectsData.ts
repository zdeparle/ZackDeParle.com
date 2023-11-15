// src/data/projectsData.ts

interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    // Add other project properties here
  }
  
  export const projectsData: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "Description for Project One",
      thumbnail: '/path-to-thumbnail-1.jpg',
      // other details...
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description for Project Two",
      thumbnail: '/path-to-thumbnail-2.jpg',
      // other details...
    },
    // ...more projects
  ];
  