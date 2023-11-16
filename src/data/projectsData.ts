// src/data/projectsData.ts

export interface Project {
    id: number;
    title: string;
    thumbnail: string; // URL or path to the thumbnail image
    images: string[]; // Array of URLs or paths to additional images
    description: string; // Short description of the project
    detailedDescription: string; // Detailed description, can include HTML tags if needed
    cadLink?: string; // Optional: URL to the CAD viewer for this project
    // ... you can add more properties as needed
  }
  
  export const projectsData: Project[] = [
    {
      id: 1,
      title: 'Project One with Autodesk CAD',
      thumbnail: '/path/to/thumbnail1.jpg',
      images: [
        '/path/to/image1.jpg',
        '/path/to/image2.jpg',
        // ... more images
      ],
      description: 'Short description of Project One',
      detailedDescription: `
        <p>Detailed information about Project One.</p>
        <p>More details...</p>
        <!-- You can use HTML tags for formatting if you plan to render this as dangerouslySetInnerHTML in React. -->
      `,
      cadLink: 'https://autode.sk/3G6fzR2', // Your Autodesk CAD viewer link
    },
    // ... other project objects
  ];
  