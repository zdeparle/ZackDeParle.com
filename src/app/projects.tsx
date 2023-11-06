// src/app/projects.tsx

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Layout from './layout'; // Adjust the import path if necessary

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects | Zack DeParle's Portfolio</title>
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-6">Projects</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-bold my-4">GearGuru</h2>
          <p className="text-lg">
            GearGuru is an innovative bicycle handlebar display that uses speed and 
            angle data to suggest gear changes in real-time, enhancing the cycling 
            experience and improving performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/GearGuru1.png" alt="GearGuru Device" width={300} height={200} />
            <Image src="/GearGuru2.png" alt="GearGuru Device" width={300} height={200} />
            <Image src="/GearGuru3.png" alt="GearGuru Device" width={300} height={200} />
          </div>
          {/* Embed CAD design viewer here */}
          <div className="cad-viewer">
            {/* You will need to use an appropriate CAD viewer component or iframe depending on how you want to integrate the CAD design */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
