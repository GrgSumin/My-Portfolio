import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Github, Instagram } from "lucide-react";
import "../App.css";

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.2,
        ease: "backOut",
      },
    },
  };

  return (
    <footer className="footer " ref={footerRef}>
      <motion.div
        className="footer-left font-bold"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <motion.h1 variants={textVariants}>Hola</motion.h1>
        <motion.p variants={textVariants}>
          Contact me: grgsumin666@gmail.com
        </motion.p>
        <motion.p variants={textVariants}>&copy; 2024</motion.p>
        <motion.p variants={textVariants}>All rights reserved</motion.p>
      </motion.div>
      <motion.div
        className="footer-right"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={iconVariants}
      >
        <motion.a
          href="https://github.com/GrgSumin"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
        >
          <Github />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/grg_sumin99/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
        >
          <Instagram />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/sumin.gurung.5494/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
        >
          <Facebook />
        </motion.a>
      </motion.div>
    </footer>
  );
}

export default Footer;
