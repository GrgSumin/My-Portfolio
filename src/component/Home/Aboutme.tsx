import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import WaveReveal from "../WaveReveal";

function Aboutme() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refElement = ref.current;
    if (!refElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(refElement);

    return () => {
      observer.unobserve(refElement);
    };
  }, [controls]);

  const skills = [
    {
      title: "TypeScript Mastery",
      description: "In-depth knowledge of TypeScript for robust applications.",
    },
    {
      title: "React Development",
      description: "Creating dynamic user interfaces with React.",
    },
    {
      title: "React Native",
      description:
        "Building cross-platform mobile applications with React Native.",
    },
    {
      title: "Node.js Expertise",
      description: "Developing scalable and efficient Node.js applications.",
    },
    {
      title: "Firebase Expertise",
      description:
        "Integrating Firebase services into web and mobile applications.",
    },
    {
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly interfaces.",
    },
  ];

  return (
    <div
      ref={ref}
      className="mb-20 m-auto w-3/5 p-5 border-b-2 border-t-2 rounded-3xl border-[#BAB3A9]"
    >
      <motion.div
        className="text-[#BAB3A9] lg:flex lg:flex-row-reverse lg:items-center justify-center gap-3 mb-10 font-poppins"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <WaveReveal text="About me" className="mb-5" />
        <p className="text-left w-full font-semibold ">
          With a robust background in TypeScript, React, React Native, Node.js,
          and Firebase, I have helped clients achieve their goals through
          innovative solutions and efficient coding practices.
        </p>
      </motion.div>
      <div className="text-[#BAB3A9] flex flex-wrap gap-7 justify-center font-poppins">
        {skills.map((skill, index) => (
          <motion.div
            className="w-56"
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h1 className="text-xl font-bold">{skill.title}</h1>
            <p className="text-left w-full font-normal">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Aboutme;
