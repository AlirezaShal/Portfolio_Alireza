// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div
      className=" xl:flex sm:grid md:grid lg:flex md:items-center xl:px-16 px-6 items-center justify-between"
      id="about"
    >
      <div className="grid">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="lg:text-3xl text-2xl w-fit border-b-2 mx-auto lg:pb-2 mb-4 lg:mb-8 border-purple-600 font-bold text-neutral-800">
            About Me
          </h4>
          <p className="lg:text-xl text-m mx-auto leading-8 text-neutral-600 text-justify ">
            Senior HW developer with nearly 20 years of experience in{" "}
            <span className="font-bold">electronic circuit </span> and{" "}
            <span className="font-bold">PCBA design </span> , from concept to
            mass production. Expert in requirement analysis, architecture, HW-SW
            interfaces, safety analysis,{" "}
            <span className="font-bold">FMEA/FMEDA</span>, and component
            optimization. Experienced in{" "}
            <span className="font-bold">Agile</span> and{" "}
            <span className="font-bold">V-model development</span> for
            automotive and consumer electronics, including battery management
            systems. Former lecturer and consultant in analog and digital
            electronics, supporting technical teams and suppliers. Passionate
            about advancing clean E-mobility solutions while contributing to
            high-performing, professional teams.
          </p>
          <p className="mb-4 lg:text-xl text-m leading-8 text-neutral-600 text-justify">
            ............................................................
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
