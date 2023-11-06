import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm Zachary (Zack) DeParle. I'm a
              Mechanical Engineering and Computer Science student at Duke
              University, and I'm passionate about technology and engineering.
              Last summer, I interned at Tesla Motors in Fremont California. The summer before, 
              I interned at General Motors in Spring Hill Tennessee, and the summer before I interned remotely at Oak Ridge National Laboratory.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              I have experience in various engineering projects, including
              designing and 3D printing tools, optimizing production processes,
              and conducting research in machine learning and materials
              science. In my free time, I enjoy robotics and have been involved
              in FIRST and MATE Robotics teams.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              I am interested in the intersection between the fields of Mechanical Engineering and Computer Science.
              I find that studying both fields helps me to understand the full scope of modern technologies and assists me in design projects.
              Design is my passion in engineering. 
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
