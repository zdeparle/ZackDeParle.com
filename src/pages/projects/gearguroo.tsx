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
    <motion.div initial="initial" animate="animate" exit="exit" className={styles.container}>
      <Head>
        <title>GearGuroo: Bicycle Gear Recommendation System</title>
      </Head>
      <main className={styles.mainContent}>
        {/* Team Image */}
        <motion.div variants={fadeInUp}>
          <Image src="/gearguroo/team.png" alt="Team" width={800} height={600} layout="responsive" className={styles.teamImage} />
        </motion.div>

        {/* Introduction */}
        <motion.div variants={fadeInUp}>
          <h1 className={styles.title}>GearGuroo: Enhancing Cycling with Smart Gear Recommendations</h1>
          <p className={styles.description}>
          As a passionate cyclist and technologist, I embarked on an ambitious project - GearGuroo. This innovative bicycle gear recommendation system was designed to elevate the cycling experience by providing dynamic gear shift suggestions. Our goal was to make cycling more efficient and enjoyable, especially for novice cyclists who may struggle with optimal gear selection.

{/* Include full content from each section */}
          </p>
        </motion.div>

        {/* Concept and Design */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>Concept and Design</h2>
          <p className={styles.description}>
          The idea behind GearGuroo was to create a system that could intelligently suggest gear changes based on various factors such as speed, terrain, and the cyclist's preference for ride difficulty. To achieve this, we integrated a combination of mechanical design, electronic engineering, and software development.{/* Continue with the description */}
          </p>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>Technical Implementation</h2>
          <p className={styles.description}>
          One of the core challenges was to design and implement a system that seamlessly combined hardware and software. We equipped the bicycle with sensors - a Hall effect sensor and an accelerometer - which were meticulously placed within the bike's frame. These sensors played a pivotal role in tracking speed and incline.
          A significant aspect of GearGuroo was the development of a user-friendly interface. We utilized Nextion software to design a custom display screen that presented gear suggestions in real-time. This feature was particularly beneficial for ensuring the system's accessibility and ease of use.
          {/* Continue with the description */}
          </p>
        </motion.div>

        {/* Software Development */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>Software Development</h2>
          <p className={styles.description}>
          The heart of GearGuroo's functionality lay in its ability to process data and provide intelligent suggestions. We employed machine learning algorithms to analyze the data collected from the bike's sensors. This analysis was crucial for making accurate gear change recommendations, tailored to the specific conditions and rider's preferences.
          {/* Continue with the description */}
          </p>
        </motion.div>

        {/* Project Skills and Tools */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.skillsTitle}>Project Skills and Tools</h2>
          <div className={styles.skillsContainer}>
          GearGuroo was not only about integrating different technologies but also about applying a diverse set of skills. We utilized various software and tools, including Autodesk Fusion 360 and Siemens NX for design, along with programming in C for software development. This multidisciplinary approach was key to the project's success.


            {/* Skills Utilized in This Project */}
            {/* Include SkillCard components as before */}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>Conclusion</h2>
          <p className={styles.description}>
          Completing GearGuroo was a fulfilling journey that combined my passion for cycling with my interest in technology. This project not only enhanced my technical skills but also gave me valuable insights into the importance of interdisciplinary collaboration in technology development.
          {/* Include the conclusion content */}
          </p>
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
