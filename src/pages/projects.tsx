import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projects.module.css';
import { Project, projectsData } from '../data/projectsData'; // Import the Project interface and projects data

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const toggleProject = (project: Project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  // This function will be called when the backdrop is clicked
  const handleBackdropClick = (event: React.MouseEvent) => {
    // Prevent clicks from the modal content from reaching the backdrop
    event.stopPropagation();
    setActiveProject(null); // Close the modal
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
        {projectsData.map((project: Project) => (
          <motion.div
            key={project.id}
            className={styles.gridItem}
            variants={variants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleProject(project)}
          >
            <Image
              src={project.thumbnail}
              alt={`${project.title} Thumbnail`}
              width={300} // Set desired width
              height={200} // Set desired height
              layout="responsive"
            />
            <h2>{project.title}</h2>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className={styles.fullScreenModal}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleBackdropClick} // This handles clicking outside the modal content
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal content from closing it
            >
              <button onClick={() => setActiveProject(null)}>Close</button>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              {/* Render all images */}
              {activeProject.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${activeProject.title} Image ${index + 1}`}
                  width={800} // Actual width of the image
                  height={600} // Actual height of the image, maintaining the aspect ratio
                  layout="responsive"
                />
              ))}
              {/* CAD Viewer - make sure this iframe only renders when there is a CAD link available */}
              {activeProject.cadLink && (
                <iframe
                  src={activeProject.cadLink}
                  frameBorder="0"
                  allowFullScreen
                  className={styles.cadViewer} // Apply styling through this class
                ></iframe>
              )}
              {/* Detailed Description */}
              <div dangerouslySetInnerHTML={{ __html: activeProject.detailedDescription }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
