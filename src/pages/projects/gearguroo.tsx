import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Navigation}  from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const GearGuroo = () => {
  // Define the details for the GearGuroo project
  // This data can be extracted from your previous modal implementation
  const electronicsImages = [
    '/gearguroo/breadboard.jpeg',
    '/gearguroo/pcb.jpeg',
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
    // ... any other images that should be included
  ];
  

  const detailedDescription = `
    <p>GearGuroo aids cyclists by suggesting gear changes through a display screen based on their speed, terrain, and ride difficulty preferences. It offers visual and audio cues for optimal gear selection, thereby enhancing the cycling experience.</p>
    <p>This project was developed by a team skilled in mechanical, electrical engineering, and computer science. We designed a system that calculates gear suggestions using data from speed and terrain, processed by machine learning algorithms. The incline of the ride is measured by an accelerometer, and gear suggestions are extrapolated from the RPM of the back tire, detected by a Hall Effect sensor.</p>
    <p>Our integrated sensors, the Hall effect sensor, and accelerometer, placed within the bike's frame, track speed and incline, while our custom-designed display screen using Nextion software provides a user-friendly interface for real-time gear change suggestions.</p>
  `;

  const cadLink = 'https://myhub.autodesk360.com/ue2a9dcff/shares/public/SH35dfcQT936092f0e43c2ee0711895f694d?mode=embed';

  return (
    <>
      <Head>
        <title>GearGuroo: Bicycle Gear Recommendation System</title>
      </Head>
      <main>
        {/* Team Picture */}
        <Image
          src="/gearguroo/team.png"
          alt="Team"
          width={800}
          height={600}
          layout="responsive"
        />

        <h1>GearGuroo: Bicycle Gear Recommendation System</h1>
        <p>GearGuroo is a cutting-edge bicycle gear suggestion tool that dynamically suggests gear shifts to cyclists.</p>

        <div dangerouslySetInnerHTML={{ __html: detailedDescription }} />

        {/* Electronics Section Carousel */}
        <h2>Electronics</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
        >
          {electronicsImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Electronics Image ${index + 1}`}
                width={800}
                height={600}
                layout="responsive"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 3D Printed Enclosures Section Carousel */}
        <h2>3D Printed Enclosures</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
        >
          {enclosuresImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Enclosure Image ${index + 1}`}
                width={800}
                height={600}
                layout="responsive"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CAD Viewer Section */}
        <h2>CAD View</h2>
        <iframe src={cadLink} width="640" height="480" allowFullScreen></iframe>
      </main>
    </>
  );
};

export default GearGuroo;
