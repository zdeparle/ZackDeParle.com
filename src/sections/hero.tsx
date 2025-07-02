import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 py-16 text-primary-foreground shadow-lg">
      <h1 className="mb-6 text-3xl font-semibold md:text-5xl">
        <MotionText delayOffset={0}>Hi, I'm Zack DeParle! 👋</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <video
            className="h-[300px] w-[300px] md:h-[300px] md:w-[300px]"
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
      <h1 className="text-2xl font-medium md:text-3xl">
        <MotionDiv delayOffset={0.8}>🎨Designer🎨</MotionDiv>
      </h1>
      <h1 className="text-2xl font-medium md:text-3xl">
        <MotionDiv delayOffset={1}>🔨Builder🔨</MotionDiv>
      </h1>
      <h1 className="text-2xl font-medium md:text-3xl">
        <MotionDiv delayOffset={1.2}>💡Problem Solver💡</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p className="text-lg md:text-xl">Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p className="text-lg md:text-xl">
            I'm currently a Mechanical Engineering and Computer Science student
            at Duke University, passionate about technology and engineering.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
