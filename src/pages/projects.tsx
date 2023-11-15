import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/projects.module.css';

// Define your project data structure and data here
const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "Description for Project One",
    thumbnail: '/path-to-thumbnail-1.jpg',
    // Add other project details like images and descriptions
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for Project Two",
    thumbnail: '/path-to-thumbnail-2.jpg',
    // Add other project details like images and descriptions
  },
  // ...more projects
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  // Animation variants for Framer Motion
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>Projects | Zack DeParle's Portfolio</title>
      </Head>
      <div className={styles.gridContainer}>
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className={styles.gridItem}
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleProject(project.id)}
          >
            <Image
              src={project.thumbnail}
              alt={`${project.title} Thumbnail`}
              width={300} // Set desired width
              height={200} // Set desired height
              layout="responsive" // This will make the image responsive
              className={styles.thumbnailImage}
            />
            <h2>{project.title}</h2>
            {activeProjectId === project.id && <p className={styles.projectDescription}>{project.description}</p>}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
