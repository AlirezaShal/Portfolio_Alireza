// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

import profile from "../../assets/projects/mypic.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Introduction() {
  return (
    <div className="flex flex-col xl:flex-row lg:mt-16 mt-8 px-6 xl:px-16 py-10 bg-gradient-to-b from-stone-100 gap-10 xl:gap-20 items-center justify-center">
      {/* Column 1: Profile Image */}
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        src={profile}
        alt="Profile"
        className="w-full max-w-xs xl:max-w-[280px] h-auto rounded-2xl object-cover shadow-md"
      />

      {/* Column 2: Text Info */}
      <div className="flex flex-col items-start">
        <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="lg:text-2xl text-lg font-semibold text-neutral-700"
        >
          I am <span className="text-purple-600">Alireza</span>,
        </motion.p>

        <motion.p
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="lg:text-xl text-m font-semibold mt-1 text-neutral-700"
        >
          Senior Electronic Designer and HW Developer
        </motion.p>
      </div>

      {/* Column 3: Social Icons */}
      <motion.div
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <FaGithub className="h-6 w-6 text-purple-700 hover:text-neutral-600" />
          <a
            href="https://github.com/AlirezaShal"
            target="_blank"
            rel="noreferrer"
          >
            github.com/AlirezaShal
          </a>
        </p>

        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <FaLinkedin className="h-6 w-6 text-purple-700 hover:text-neutral-600" />
          <a
            href="https://www.linkedin.com/in/alireza-ahadpour-shal/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/alireza-ahadpour-shal
          </a>
        </p>

        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <MdEmail className="h-6 w-6 text-purple-700 hover:text-neutral-600" />
          <a
            href="mailto:alirezaahadpoor@yahoo.com"
            target="_blank"
            rel="noreferrer"
          >
            alirezaahadpoor@yahoo.com
          </a>
        </p>
        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <MdPhone className="h-6 w-6 text-purple-700" />
          <a href="tel:+4915753440502">+49 15753440502</a>
        </p>
        <p className="flex items-center gap-2 text-neutral-700 hover:text-purple-700">
          <MdPhone className="h-6 w-6 text-purple-700" />
          <a href="tel:+4915906634676">+49 15906634676</a>
        </p>
      </motion.div>
    </div>
  );
}

export default Introduction;
