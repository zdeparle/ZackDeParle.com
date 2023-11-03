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
              Hello, I'm Zachary DeParle. You can call me Zach. I'm a
              Mechanical Engineering and Computer Science student at Duke
              University, and I'm passionate about technology and engineering.
              Currently, I'm interning as a Manufacturing Mechanical Engineer at
              Tesla Motors in Fremont, CA.
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
              Outside of my engineering pursuits, I'm also a photographer and
              filmmaker. I'm passionate about capturing the beauty of the world
              through the lens of my camera. You can check out my photography
              and filmmaking works on my social media profiles.
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
