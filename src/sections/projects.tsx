import React from 'react';
import Image from 'next/image';

const GearGuruProject = () => {
  return (
    <div className="project-container">
      <h1>GearGuru</h1>
      <p>
        GearGuru is an innovative bicycle handlebar display that uses speed and 
        angle data to suggest gear changes in real-time, enhancing the cycling 
        experience and improving performance.
      </p>
      <div className="image-container">
        <Image src="/GearGuru1.png" alt="GearGuru Device" width={500} height={300} />
        <Image src="/GearGuru2.png" alt="GearGuru Device" width={500} height={300} />
        <Image src="/GearGuru3.png" alt="GearGuru Device" width={500} height={300} />
      </div>
      {/* Embed CAD design viewer here */}
      <div className="cad-viewer">
        {/* You will need to use an appropriate CAD viewer component or iframe depending on how you want to integrate the CAD design */}
      </div>
    </div>
  );
};

export default GearGuruProject;
