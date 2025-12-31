import MotionDiv from "@/components/motion-div";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="group relative mx-auto my-20 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-card/50 px-6 py-16 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:px-12"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <MotionDiv delayOffset={0.2}>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
        </MotionDiv>
        
        <MotionDiv delayOffset={0.4}>
          <p className="max-w-2xl text-center text-lg text-foreground/80 md:text-xl">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and engineering!
          </p>
        </MotionDiv>

        {/* Email Button */}
        <MotionDiv delayOffset={0.6}>
          <a
            href="mailto:zachary.deparle@gmail.com"
            className="group/button relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-indigo-600 px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
            aria-label="Email Me"
          >
            <Mail className="h-5 w-5 transition-transform duration-300 group-hover/button:scale-110" />
            <span>Email Me!</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 group-hover/button:opacity-100" />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;