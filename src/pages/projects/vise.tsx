import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '/src/styles/vise.module.css'; // Ensure the path is correct

const Vise = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <Head>
        <title>Vise Stop Project</title>
      </Head>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Vise Stop Project</h1>
        <p className={styles.description}>
          I completed a project where I machined and assembled a vise stop, a useful tool for machining. This involved studying detailed engineering drawings, understanding the functions of vise stops, and preparing machining plans for the parts "Vise Jaw - Left" and "Vise Jaw - Right." I paid particular attention to engineered fits, reference dimensions, and tolerances, which required precise machining operations.
        </p>
        <p className={styles.description}>
          I identified the necessary tools, such as end mills, drill bits, and reamers, and developed a step-by-step plan for machining each part. Working from a steel bar, I cut my pieces to length, ensuring extra material for squaring. I carefully planned my time in the Student Machine Shop, balancing machining, orientation, and cleanup.
        </p>
        <p className={styles.description}>
          Throughout the project, I focused on safety and efficiency, asking for guidance when needed. My final step involved marking my assembled vise stop with my last name before submission. This project not only enhanced my machining skills but also taught me the importance of meticulous planning and execution in mechanical design.
        </p>
        <iframe 
        src="https://myhub.autodesk360.com/ue2a9dcff/shares/public/SH512d4QTec90decfa6e76f3d59aac9339d2?mode=embed" 
        width="640" 
        height="480" 
        allowFullScreen 
        frameBorder="0"
        className={styles.cadIframe}
  ></iframe>

      </main>
    </motion.div>
  );
};

export default Vise;
