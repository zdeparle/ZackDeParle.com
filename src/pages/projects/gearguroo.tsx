import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from '/src/styles/gearguroo.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { StaticImageData } from 'next/image';


import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import solidworksIcon from "@/assets/icons/solidworks.png";
import fusion360Icon from "@/assets/icons/fusion360.png";
import catiaIcon from "@/assets/icons/catia.png";
import autocadIcon from "@/assets/icons/autocad.png";
import autodeskInventorIcon from "@/assets/icons/autodesk-inventor.png";
import matlabIcon from "@/assets/icons/matlab.png";
import pytorchIcon from "@/assets/icons/pytorch.png";
import tensorflowIcon from "@/assets/icons/tensorflow.png";
import nxIcon from "@/assets/icons/nx.png";
import ntopologyIcon from "@/assets/icons/ntopology.png";
import prismaIcon from "@/assets/icons/prisma.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import macosIcon from "@/assets/icons/macos.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import CIcon from "@/assets/icons/CIcon.png";
function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
const GearGuroo = () => {
  const electronicsImages = [
    '/gearguroo/breadboard.jpeg',
    '/gearguroo/pcb.jpeg',
    // ... add other image paths as needed
  ];

  const enclosuresImages = [
    '/gearguroo/GearGuru1.png',
    '/gearguroo/GearGuru2.png',
    '/gearguroo/GearGuru3.png',
    '/gearguroo/clearprint.jpeg',
    '/gearguroo/elegoofinal.jpeg',
    '/gearguroo/elegoopriming.jpeg',
    '/gearguroo/firstgendisplay.jpeg',
    '/gearguroo/firstgendisplay2.jpeg',
    '/gearguroo/magholder.jpeg',
    '/gearguroo/midelegoo.jpeg',
    '/gearguroo/midelegoo2.jpeg',
    '/gearguroo/slafinal1.jpeg',
    '/gearguroo/slafinal2.jpeg',
    '/gearguroo/slafinal3.jpeg',
    '/gearguroo/slafinal4.jpeg',
    '/gearguroo/slafinal5.jpeg',
    // ... add other image paths as needed
  ];
  const cadLink = 'https://myhub.autodesk360.com/ue2a9dcff/shares/public/SH35dfcQT936092f0e43c2ee0711895f694d?mode=embed';
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.2, // Increased duration for a slower fade-in
        ease: "easeOut" // You can experiment with different easing like "linear", "easeInOut"
      } 
    },
    exit: { 
      y: 20, 
      opacity: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeIn" 
      } 
    }
  };
  const GearGurooSkills = [
    {
      skills: [
        {
          name: "Autodesk Fusion 360",
          icon: fusion360Icon, // Make sure you have imported this icon
        },
        {
          name: "Siemens NX",
          icon: nxIcon, // Make sure you have imported this icon
        },
        {
          name: "C",
          icon: CIcon, // Make sure you have imported this icon
        },
      ],
    },
    // ... other skill categories if needed ...
  ];
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
    >
      <Head>
        <title>GearGuroo: Bicycle Gear Recommendation System</title>
      </Head>
      <main className={styles.mainContent}>
        <motion.div variants={fadeInUp}>
          <Image
            src="/gearguroo/team.png"
            alt="Team"
            width={800}
            height={600}
            layout="responsive"
            className={styles.teamImage}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h1 className={styles.title}>GearGuroo: Bicycle Gear Recommendation System</h1>
        </motion.div>

        <motion.div variants={fadeInUp} className={styles.description}>
          <p>GearGuroo aids cyclists by suggesting gear changes through a display screen based on their speed, terrain, and ride difficulty preferences. It offers visual and audio cues for optimal gear selection, thereby enhancing the cycling experience.</p>
          <p>This project was developed by a team skilled in mechanical, electrical engineering, and computer science. We designed a system that calculates gear suggestions using data from speed and terrain, processed by machine learning algorithms. The incline of the ride is measured by an accelerometer, and gear suggestions are extrapolated from the RPM of the back tire, detected by a Hall Effect sensor.</p>
          <p>Our integrated sensors, the Hall effect sensor, and accelerometer, placed within the bike's frame, track speed and incline, while our custom-designed display screen using Nextion software provides a user-friendly interface for real-time gear change suggestions.</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>Electronics</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            className={styles.swiperContainer}
          >
            {electronicsImages.map((image, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Image
                  src={image}
                  alt={`Electronics Image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>3D Printed Enclosures</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            className={styles.swiperContainer}
          >
            {enclosuresImages.map((image, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Image
                  src={image}
                  alt={`Enclosure Image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>CAD View</h2>
          <iframe 
            src={cadLink} 
            width="640" 
            height="480" 
            allowFullScreen
            className={styles.cadIframe}
          ></iframe>
        </motion.div>
      </main>
      <motion.div variants={fadeInUp}>
  <h2 className={styles.skillsTitle}>Skills Utilized in This Project</h2>
  <div className={styles.skillsContainer}>
    {GearGurooSkills.map((category, index) => (
      <div key={index} className={styles.skillCategory}>
        <div className={styles.skillList}>
          {category.skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
</motion.div>

    </motion.div>
    
    
  );
};

export default GearGuroo;
