import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/projects.module.css';
import { projectsData } from '../data/projectsData';

const Projects = () => {
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
          <Link key={project.id} href={`/projects/${project.id}`} passHref>
            <motion.div
              className={styles.gridItem}
              variants={variants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
