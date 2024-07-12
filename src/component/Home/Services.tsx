import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WaveReveal from "../WaveReveal";
import MenuAnimation from "../MenuAnimation";

interface Service {
  name: string;
  description: string;
}

function Services() {
  const services: Service[] = [
    {
      name: "Web Development",
      description:
        "Building responsive and user-friendly websites with modern technologies like React and Next.js.",
    },
    {
      name: "Mobile Development",
      description:
        "Developing mobile applications using React Native for iOS and Android.",
    },
    {
      name: "UI/UX Design",
      description:
        "Creating visually appealing and user-friendly interfaces for web and mobile applications.",
    },
    {
      name: "Backend Development",
      description:
        "Building scalable and efficient backend systems using Node.js and Firebase.",
    },
  ];

  return (
    <div className="text-[#BAB3A9] text-center mb-20 w-3/4 m-auto">
      <WaveReveal
        text="My Services"
        className="border-b-2 border-[#BAB3A9] p-8"
      />
      <div className="space-y-8 font-poppins">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="border-b-2 border-[#BAB3A9] p-8 "
    >
      <MenuAnimation
        description={service.description}
        menuItems={service.name}
      />
    </motion.div>
  );
};

export default Services;
