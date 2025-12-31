import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Projects | Zack DeParle's Portfolio</title>
      </Head>
      <div className="my-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Projects
          </span>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} Thumbnail`}
                    width={400}
                    height={250}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
