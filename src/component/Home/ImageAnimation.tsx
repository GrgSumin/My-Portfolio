import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";
import WaveReveal from "../WaveReveal";
import DiscloseImage from "../DiscloseImage";

const images: { image: string; title: string; description: string }[] = [
  {
    image:
      "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?cs=srgb&dl=pexels-goumbik-296234.jpg&fm=jpg",
    title: "React",
    description: "Sample description for React image",
  },
  {
    image:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/bluebird.jpg",
    title: "React Native",
    description: "Sample description for React Native image",
  },
  {
    image:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/bluebird.jpg",
    title: "Node.js",
    description: "Sample description for Node.js image",
  },
  {
    image:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/bluebird.jpg",
    title: "Firebase",
    description: "Sample description for Firebase image",
  },
];

const ImageAnimation: React.FC = () => {
  const imageControls = images.map(() => useAnimation());
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      imageControls.forEach((controls) => controls.start("visible"));
    } else {
      imageControls.forEach((controls) => controls.start("hidden"));
    }
  }, [imageControls, inView]);

  const imageVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="">
      <WaveReveal
        text="My Projects"
        className="text-[#BAB3A9] p-8 text-center "
      />
      <div
        ref={ref}
        className="flex flex-wrap gap-5 m-auto p-5 ml-5 justify-center lg:w-[70vw]"
      >
        {images.map((imageData, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-5 font-poppins"
            initial="hidden"
            animate={imageControls[index]}
            variants={imageVariants}
          >
            <DiscloseImage
              src={imageData.image}
              alt={`Image ${index + 1}`}
              className="w-96 h-96 bg-black"
            />
            <h1 className="text-center text-lg mt-2 text-[#BAB3A9]">
              {imageData.title}
            </h1>
            <p className="text-center text-[#BAB3A9]">
              {imageData.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageAnimation;
