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
import expressjsIcon from "@/assets/icons/express-js.png"; // Add expressjs icon
import CIcon from "@/assets/icons/CIcon.png";
// Rest of the code remains the same
// Rest of the code remains the same

export default function skills() {
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
        }
        
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
        ,
        // Add more machine learning skills as needed
      ],
    },
   
    // Add more skill categories as needed
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
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

function SkillCard({ icon, name }: { icon: string; name: string }) {
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
