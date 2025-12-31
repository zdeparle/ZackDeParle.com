import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function Hero() {
  return (
    <section className="group relative my-8 flex min-h-[85vh] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-indigo-600 to-purple-600 py-16 text-primary-foreground shadow-2xl before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] before:opacity-0 before:transition-opacity before:duration-1000 hover:before:opacity-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          <MotionText delayOffset={0}>
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Hi, I'm Zack DeParle!
            </span>
            <span className="ml-3 inline-block animate-bounce">👋</span>
          </MotionText>
        </h1>
        
        <div className="relative mb-8 overflow-hidden rounded-full p-2 ring-4 ring-white/20 backdrop-blur-sm transition-all duration-500 hover:ring-white/40 hover:scale-105">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
          <MotionDiv>
            <video
              className="relative h-[280px] w-[280px] rounded-full md:h-[320px] md:w-[320px]"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src={"/animoji.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </MotionDiv>
        </div>
        
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <MotionDiv delayOffset={0.8}>
            <div className="group/tag relative rounded-full bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <span className="text-xl font-semibold md:text-2xl">🎨 Designer</span>
            </div>
          </MotionDiv>
          <MotionDiv delayOffset={1}>
            <div className="group/tag relative rounded-full bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <span className="text-xl font-semibold md:text-2xl">🔨 Builder</span>
            </div>
          </MotionDiv>
          <MotionDiv delayOffset={1.2}>
            <div className="group/tag relative rounded-full bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <span className="text-xl font-semibold md:text-2xl">💡 Problem Solver</span>
            </div>
          </MotionDiv>
        </div>
        
        <div className="my-8 flex w-full max-w-3xl flex-col gap-4 text-center">
          <MotionDiv delayOffset={1.2}>
            <p className="text-xl font-medium text-white/95 md:text-2xl">
              Welcome to my personal page!
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={1.4}>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">
              I'm currently a Mechanical Engineering and Computer Science student
              at Duke University, passionate about technology and engineering.
            </p>
          </MotionDiv>
        </div>
        
        <div className="my-8">
          <ContactList delayOffset={1.45} showWhenInView={false} />
        </div>
      </div>
    </section>
  );
}
