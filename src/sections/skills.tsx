import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
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
import { StaticImageData } from 'next/image';

import expressjsIcon from "@/assets/icons/express-js.png"; // Add expressjs icon

export default function Skills() {
  const data = [
    {
      title: "CAD and Design",
      skills: [
        {
          name: "Solidworks",
          icon: solidworksIcon,
        },
        {
          name: "Fusion 360",
          icon: fusion360Icon,
        },
        {
          name: "CATIA",
          icon: catiaIcon,
        },
        {
          name: "AutoCAD",
          icon: autocadIcon,
        },
        {
          name: "Autodesk Inventor",
          icon: autodeskInventorIcon,
        },
        {
          name: "Siemens NX",
          icon: nxIcon,
        },
        {
          name: "nTopology",
          icon: ntopologyIcon,
        },
        // Add more CAD and design skills as needed
      ],
    },
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Express.js", // Added Express.js
          icon: expressjsIcon,
        },
        // Add more web development skills as needed
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "C",
          icon: CIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
        {
          name: "MATLAB",
          icon: matlabIcon,
        },
        // Add more programming languages as needed
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          name: "PyTorch",
          icon: pytorchIcon,
        },
        {
          name: "Tensorflow",
          icon: tensorflowIcon,
        },
        // Add more machine learning skills as needed
      ],
    },
    // Add more skill categories as needed
  ];

  return (
    <section id="skills" className="my-20 flex w-full flex-col items-center text-center">
      <MotionDiv>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:mb-8 md:text-4xl">
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
      </MotionDiv>
      <div className="flex w-full flex-col gap-12">
        {data.map((item, index) => (
          <MotionDiv key={index} delayOffset={index * 0.1}>
            <div className="mb-6 md:px-2">
              <h3 className="mb-6 text-xl font-semibold text-foreground/90 md:text-2xl">
                {item.title}
              </h3>
              <MotionList className="flex flex-wrap justify-center gap-4 md:gap-6 md:px-6">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-5 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={icon} 
            alt={name} 
            priority 
            className="transition-all duration-300 group-hover:brightness-110"
          />
        </div>
        <p className="font-semibold text-sm transition-colors duration-300 group-hover:text-primary">{name}</p>
      </div>
    </div>
  );
}
