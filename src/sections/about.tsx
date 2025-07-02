import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 rounded-xl bg-card px-6 py-10 shadow lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4 text-lg leading-relaxed">
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
              science. 
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              I began my engineering journey in high school, where I led our Robotics team, competing in FIRST and MATE competitions. 
              When our lab's 3D printer broke I built my own and taught myself Fusion360. I used this knowledge both to help our robotics team by designing and producing custom parts, but also to assist research at the National Institutes of Health in my free time after school, working in a Cerebral Palsy rehabilitation lab under Thomas Bulea Ph.D. 
              </p> 
          </MotionDiv>
          <MotionDiv delayOffset={0.7}>
            <p>
              Design is my passion in engineering. To me, what makes engineeering such an intriguing field is that engineers get to make things that help people and solve problems. 
              Solving problems is rewarding, and I love the feeling of accomplishment that comes with designing a solution to a problem.
              I find that studying both Mechanical Engineering and Computer Science helps me to understand the full scope of modern technologies and assists me in design projects.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl ring-4 ring-primary/30 transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
