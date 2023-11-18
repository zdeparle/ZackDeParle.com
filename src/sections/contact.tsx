import MotionDiv from "@/components/motion-div";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20 md:max-w-full"
    >
      <MotionDiv delayOffset={0.2}>
        <h2 className="mb-3 w-full text-center md:mb-6">Contact Me</h2>
      </MotionDiv>

      <article className="flex flex-col items-center gap-4">
        

        {/* Email Button */}
        <MotionDiv delayOffset={0.5}>
          <a href="mailto:zachary.deparle@gmail.com" className="contact-button">
            Email Me
          </a>
        </MotionDiv>

        {/* LinkedIn Button */}
        <MotionDiv delayOffset={0.6}>
          <a href="https://www.linkedin.com/in/zachary-deparle" target="_blank" rel="noopener noreferrer" className="contact-button">
            LinkedIn Profile
          </a>
        </MotionDiv>
      </article>
    </section>
  );
};

export default Contact;