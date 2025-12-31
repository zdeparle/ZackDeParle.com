import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="group relative mx-auto my-20 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/50 px-6 py-12 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl lg:flex-row lg:items-start lg:gap-16 lg:px-12"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-6 w-full text-center text-3xl font-bold tracking-tight md:mb-8 md:text-4xl">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </MotionDiv>
        <article className="flex flex-col gap-6 text-base leading-relaxed md:text-lg">
          <MotionDiv delayOffset={0.4}>
            <p className="text-foreground/90">
              Hello, I'm <span className="font-semibold text-foreground">Zachary (Zack) DeParle</span>. I'm a
              Mechanical Engineering and Computer Science student at Duke
              University, and I'm passionate about technology and engineering.
              Last summer, I interned at <span className="font-semibold text-primary">Tesla Motors</span> in Fremont California. The summer before, 
              I interned at <span className="font-semibold text-primary">General Motors</span> in Spring Hill Tennessee, and the summer before I interned remotely at <span className="font-semibold text-primary">Oak Ridge National Laboratory</span>.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p className="text-foreground/90">
              I have experience in various engineering projects, including
              designing and 3D printing tools, optimizing production processes,
              and conducting research in machine learning and materials
              science. 
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p className="text-foreground/90">
              I began my engineering journey in high school, where I led our Robotics team, competing in FIRST and MATE competitions. 
              When our lab's 3D printer broke I built my own and taught myself Fusion360. I used this knowledge both to help our robotics team by designing and producing custom parts, but also to assist research at the <span className="font-semibold text-primary">National Institutes of Health</span> in my free time after school, working in a Cerebral Palsy rehabilitation lab under Thomas Bulea Ph.D. 
            </p> 
          </MotionDiv>
          <MotionDiv delayOffset={0.7}>
            <p className="text-foreground/90">
              Design is my passion in engineering. To me, what makes engineering such an intriguing field is that engineers get to make things that help people and solve problems. 
              Solving problems is rewarding, and I love the feeling of accomplishment that comes with designing a solution to a problem.
              I find that studying both Mechanical Engineering and Computer Science helps me to understand the full scope of modern technologies and assists me in design projects.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="relative z-10 lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <div className="relative group/image">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-indigo-500 to-purple-500 opacity-20 blur-xl transition-opacity duration-500 group-hover/image:opacity-40" />
            <img
              src="/photo.jpeg"
              alt="Zack DeParle"
              className="relative w-full max-w-[350px] rounded-2xl ring-2 ring-primary/20 shadow-xl transition-all duration-500 hover:ring-primary/40 hover:scale-[1.02]"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
