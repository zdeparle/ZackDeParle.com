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
      title: 'GearGuroo: Bicycle Gear Recommendation System',
      thumbnail: '../GearGurooThumbnail.jpg',
      images: [
        '../GearGuru1.png',
        '../GearGuru2.png',
        '../GearGuru3.png',
        // ... more images
      ],
      description: "GearGuroo is a cutting-edge bicycle gear suggestion tool that dynamically suggests gear shifts to cyclists.",
      detailedDescription: `
        <p>GearGuroo aids cyclists by suggesting gear changes through a display screen based on their speed, terrain, and ride difficulty preferences. It offers visual and audio cues for optimal gear selection, thereby enhancing the cycling experience.</p>
        <p>This project was developed by a team skilled in mechanical, electrical engineering, and computer science. We designed a system that calculates gear suggestions using data from speed and terrain, processed by machine learning algorithms. The incline of the ride is measured by an accelerometer, and gear suggestions are extrapolated from the RPM of the back tire, detected by a Hall Effect sensor.</p>
        <p>Our integrated sensors, the Hall effect sensor, and accelerometer, placed within the bike's frame, track speed and incline, while our custom-designed display screen using Nextion software provides a user-friendly interface for real-time gear change suggestions.</p>
        `,
      cadLink: '<iframe src="https://myhub.autodesk360.com/ue2a9dcff/shares/public/SH35dfcQT936092f0e43c2ee0711895f694d?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>', // Your Autodesk CAD viewer link
    },
    // ... other project objects
  ];
  