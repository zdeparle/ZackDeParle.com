import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projects.module.css';
import { Project, projectsData } from '../data/projectsData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleProject = (project: Project) => {
    setActiveProject(activeProject === project ? null : project);
    setCurrentImageIndex(0); // Reset image index when a project is opened or closed
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeProject) {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % activeProject.images.length
        );
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [activeProject]);

  const changeImage = (direction: 'next' | 'prev') => {
    if (activeProject) { // Ensure activeProject is not null before accessing its properties
      setCurrentImageIndex((prevIndex) => {
        const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
        return (newIndex + activeProject.images.length) % activeProject.images.length;
      });
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setActiveProject(null);
  };

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
              width={300}
              height={200}
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
            onClick={handleBackdropClick}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActiveProject(null)}>Close</button>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>

              {/* CAD Viewer Section */}
              <h3>CAD View</h3>
              {activeProject.cadLink && (
                <div className={styles.cadViewer} dangerouslySetInnerHTML={{ __html: activeProject.cadLink }} />
              )}

              {/* Image Carousel Section */}
              <h3>Gallery</h3>
              <div className={styles.carouselContainer}>
                <button className={styles.carouselButton} onClick={() => changeImage("prev")}>{"<"}</button>
                <div className={styles.imageContainer}>
                  <Image
                    src={activeProject.images[currentImageIndex]}
                    alt={`${activeProject.title} Image ${currentImageIndex + 1}`}
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                </div>
                <button className={styles.carouselButton} onClick={() => changeImage("next")}>{">"}</button>
              </div>

              {/* Detailed Description Section */}
              <h3>Project Details</h3>
              <div dangerouslySetInnerHTML={{ __html: activeProject.detailedDescription }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
