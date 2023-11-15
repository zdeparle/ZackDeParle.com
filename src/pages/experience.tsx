import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/experience.module.css'; // Ensure this path is correct

const ExperiencePage = () => {
  return (
    <>
      <Head>
        <title>Work Experience</title>
      </Head>
      <main className={styles.experiencePage}>
        {/* Tesla Motors Experience */}
        <section className={styles.experienceSection}>
          <div className={styles.titleContainer}>
            <Image src="/assets/teslalogoblack.png" alt="Tesla Logo" width={100} height={50} />
            <h2>Tesla Motors, Manufacturing Mechanical Engineer Intern</h2>
          </div>
          <p>Fremont, CA, May – August 2023</p>
          <p>
            At Tesla Motors, I revolutionized the manufacturing process by reducing equipment downtime by 2.16 hours monthly. This was achieved by designing and 3D printing ergonomic betafoam RFID-trigger and button tools, optimizing the workflow for manufacturing associates. My approach involved leveraging advanced 3D CAD software and additive manufacturing techniques. Furthermore, I spearheaded a storage efficiency project for the Model 3 painting process, influencing a seven-figure investment in floor trucks. This initiative doubled the manufacturing efficiency of Cybertruck parts by engineering a custom parts rack, thereby enhancing space utilization significantly.
          </p>
        </section>
        
        {/* General Motors Experience */}
        <section className={styles.experienceSection}>
          {/* Replace with actual image source */}
          <h2>General Motors, Manufacturing Mechanical Engineer Intern</h2>
          <p>Spring Hill, TN, May – August 2022</p>
          <p>
            My tenure at General Motors was marked by significant contributions to the Cadillac Lyriq EV. I engineered a protective cockpit installation shield, collaborating with interdisciplinary teams, and successfully prevented annual damage costs estimated at $1.5 million. This involved using complex CAD software to design and test the shield. Additionally, I developed production line procedures that not only yielded a 1% boost in plant electrical efficiency but also played a pivotal role in reducing production defects, marking a step forward in manufacturing optimization.
          </p>
        </section>
        
        {/* Oak Ridge National Laboratory Experience */}
        <section className={styles.experienceSection}>
          {/* Replace with actual image source */}
          <h2>Oak Ridge National Laboratory (ORNL), Research Intern</h2>
          <p>Oak Ridge, TN, June – August 2021</p>
          <p>
            At ORNL, I delved into the cutting-edge field of machine learning, developing models to extract chemical properties data from text sequences. This required a deep understanding of data science and machine learning methodologies, and I frequently utilized Python and other data analysis tools. Additionally, I was involved in researching the prediction of chemical properties of polymers using Summit, the world's leading Quantum supercomputer. This work demanded a high level of technical skill and innovative thinking in computational modeling.
          </p>
        </section>
        
        {/* National Institutes of Health Experience */}
        <section className={styles.experienceSection}>
          {/* Replace with actual image source */}
          <h2>National Institutes of Health (NIH), Research Intern</h2>
          <p>Bethesda, MD, January 2018 – February 2021</p>
          <p>
            My experience at NIH was both challenging and fulfilling, as I utilized CAD and 3D printing to develop a functional electrical stimulation exoskeleton. This exoskeleton aimed to improve the mobility and gait of children with cerebral palsy. The project required intricate CAD modeling and an adept understanding of 3D printing technologies. Through this, I honed my skills in designing medical devices that are both effective and empathetic to the user's needs.
          </p>
        </section>
        
        {/* Gall Group Laboratory Experience */}
        <section className={styles.experienceSection}>
          {/* Replace with actual image source */}
          <h2>Gall Group Laboratory, Research Assistant</h2>
          <p>Durham, NC, March 2021 – Present</p>
          <p>
            At the Gall Group Laboratory, I applied advanced CAD modeling and 3D printing techniques to create various lattice structures for "dog-bone" specimens. This involved a meticulous approach to designing and testing these structures using CAD software and ensuring they met the required specifications. Additionally, I conducted extensive stress-strain testing and utilized machine learning algorithms in MATLAB to process complex data sets, forecasting the durability and functional longevity of these lattice structures for cartilage implant applications. My work here combined mechanical engineering principles with innovative data analysis techniques.
          </p>
        </section>
      </main>
    </>
  );
};

export default ExperiencePage;
