import { useEffect } from "react";
import AnimatedGradientText from "./AnimatedGradientText";
import Marquee from "./Marquee";
import TextBorderAnimation from "../extBorderAnimation";
import TextFlip from "./TextFlip";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const skills = [
    "React",
    "TailwindCSS",
    "Typescript",
    "React",
    "React Native",
    "NodeJS",
    "Firebase",
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const elementVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="">
      <div className="flex justify-center items-center mb-2 p-10 gap-5">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col p-10 w-[56%]"
        >
          <AnimatedGradientText className="text-7xl mb-4 w-[50vw] font-poppins">
            Welcome to my portfolio!
          </AnimatedGradientText>
          <motion.p
            className="text-[#BAB3A9CC] text-2xl w-80 mb-4"
            variants={elementVariants}
          >
            Discover how my skills can elevate your projects to new heights.
          </motion.p>
          <motion.p
            className="text-[#BAB3A9CC] text-xl w-80"
            variants={elementVariants}
          >
            Delivering excellence, efficiency, and innovation in every line of
            code.
          </motion.p>
          <motion.div
            className="flex items-center gap-5 mt-4 w-[50vw]"
            variants={elementVariants}
          >
            <button className="bg-[#F1FE92] p-3 w-36 border-none rounded-xl">
              See More
            </button>
            <TextBorderAnimation
              className="text-xl text-[#F1FE92]"
              text="grgsumin666@gmail.com"
            />
          </motion.div>
        </motion.div>
        <div className="p-5 w-96 text-[#BAB3A9CC] sm:hidden lg:block text-4xl">
          <TextFlip />
        </div>
      </div>
      <div className="bg-[#151515] mb-20 relative flex font-bold w-[97vw]">
        <Marquee applyMask>
          {skills.map((skill, index) => (
            <div key={index} className="m-2 text-5xl p-5 text-[#BAB3A9CC]">
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
