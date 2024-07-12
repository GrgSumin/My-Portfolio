import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const CustomButton = styled(Button)({
  border: "1px solid #BAB3A9",
  color: "#BAB3A9",
  "&:hover": {
    backgroundColor: "#BAB3A9",
    color: "#FFFFFF",
  },
});

const CustomTextField = styled(TextField)({
  "& label": {
    color: "#BAB3A9",
  },
  "& label.Mui-focused": {
    color: "#BAB3A9",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#BAB3A9",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#BAB3A9",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#BAB3A9",
  },
  "& .MuiInputBase-input": {
    color: "#BAB3A9",
  },
});

const Form: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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

  const fieldVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="mb-20 p-5 lg:flex lg:gap-6 border-t-2 border-b-2 border-[#BAB3A9] rounded-2xl">
      <div className="text-[#BAB3A9] mb-10 flex flex-col justify-center lg:w-1/2">
        <motion.h1
          className="text-4xl mb-2 font-semibold"
          initial="hidden"
          animate={controls}
          variants={fieldVariants}
        >
          Ready to Turn Your Vision Into Reality
        </motion.h1>
        <motion.p
          className=""
          initial="hidden"
          animate={controls}
          variants={fieldVariants}
        >
          Connect with me and let's build something amazing together!
        </motion.p>
      </div>
      <motion.div
        className="h-3/5 w-96 p-3 rounded-2xl border-2 border-[#BAB3A9] m-auto"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-center text-2xl font-semibold text-[#BAB3A9]"
          variants={fieldVariants}
        >
          Let's Get Started
        </motion.h1>
        <div className="flex flex-col gap-8 p-10 w-full m-auto">
          <motion.div variants={fieldVariants}>
            <CustomTextField
              id="email"
              label="Email"
              variant="standard"
              type="email"
            />
          </motion.div>
          <motion.div variants={fieldVariants}>
            <CustomTextField
              id="name"
              label="Name"
              variant="standard"
              type="text"
            />
          </motion.div>
          <motion.div variants={fieldVariants}>
            <CustomTextField
              id="phone"
              label="Phone Number"
              variant="standard"
              type="number"
            />
          </motion.div>
          <motion.div variants={fieldVariants}>
            <CustomTextField
              placeholder="Message"
              multiline
              rows={2}
              maxRows={4}
            />
          </motion.div>
          <motion.div variants={fieldVariants}>
            <CustomButton variant="outlined">Send</CustomButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;
