import MotionDiv from "@/components/motion-div";
import styles from '../styles/contact.module.css'; // Adjust the path to where your CSS file is located

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-6 rounded-xl bg-card px-6 py-12 shadow md:max-w-full"
    >
      

      <article className="flex flex-col items-center gap-4">
        

        {/* Email Button */}
        <MotionDiv delayOffset={0.5}>
          <a
            href="mailto:zachary.deparle@gmail.com"
            className={styles.contactButton}
            aria-label="Email Me"
          >
            📧 {"Email Me!"}
          </a>
        </MotionDiv>


       
      </article>
    </section>
  );
};

export default Contact;