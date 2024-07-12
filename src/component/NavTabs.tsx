import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import WaveReveal from "./WaveReveal";

const Navbar = () => {
  const menuItems = [
    { title: "Home", link: "home" },
    { title: "Services", link: "services" },
    { title: "Aboutme", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Contact", link: "contact" },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-[#BAB3A9] p-4 flex gap-10 items-center font-poppins"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <WaveReveal text="Welcome" className="md:text-md sm:text-md" />
      </motion.div>

      <ul className="flex justify-center gap-10 font-bold text-2xl">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <ScrollLink
              to={item.link}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
              activeClass="active-link"
              onClick={() => {
                if (item.link === "home") {
                  scrollToTop();
                }
              }}
            >
              <span className="hover:text-[#F1FE92]">{item.title}</span>
            </ScrollLink>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Navbar;
