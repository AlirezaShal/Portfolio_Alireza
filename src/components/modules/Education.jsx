// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="px-10 xl:px-16 mt-16">
      <motion.h3 className="lg:text-3xl text-2xl font-bold w-fit text-neutral-700 mx-auto mb-6 border-b-2 lg:pb-2 border-purple-600">
        Education
      </motion.h3>
      <motion.div className="bg-white rounded-lg shadow-xl py-2 px-3">
        <motion.ol
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="relative border-s border-gray-200 dark:border-gray-700"
        >
          {/*  RWTH-Aachen University */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2014 – 2018
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              RWTH-Aachen University, Aachen, Germany
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              M.Sc. Electrical and Communications Engineering
            </h3>
            <p className="mt-2 text-gray-900 text-base font-normal">
              <span className="font-bold text-purple-700">Thesis:</span> Design,
              Simulation and Implementation of a Smart DC Microgrid
            </p>
            <p className="mt-2 text-gray-900 text-base font-normal">
              <span className="font-bold text-purple-700">Study Focus:</span>{" "}
              Communications systems and power electronics
            </p>
            <p className="mt-2 text-gray-900 text-base font-normal">
              Erasmus-Fonds für Forschungspraktikum an der Aalborg Universität,
              Dänemark 2016
            </p>
            <p className="mt-2 text-gray-900 text-m font-bold">GPA : 1.7</p>
            <p className="mt-2 text-gray-900 text-base font-normal">
              Ausgezeichnet mit dem Bildungsfonds-Stipendium der RWTH-Aachen
            </p>
          </motion.li>

          {/* K.N. Toosi University of Technology */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb 2002 – Feb 2005
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              K.N. Toosi University of Technology, Tehran, Iran
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              M.Sc. Electronics Engineering
            </h3>{" "}
            <p className="mt-2 text-gray-900 text-m font-bold">GPA : 1.8</p>
            <p className="mt-2 text-gray-900 text-base font-normal">
              <span className="font-bold text-purple-700">Thesis: </span>
              Modeling of poly Si TFT Applicable in AMLCDs
            </p>
            <p>
              <span className="font-bold text-purple-700">Study Focus: </span>
              Semiconductor device and circuit technology
            </p>
          </motion.li>

          {/* Azad University Lahijan */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              1996 – 2001
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Amir Kabir University of Technology, Tehran, Iran
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              B.Sc. Electrical and Electronic Engineering
            </h3>
            <p className="mt-2 text-gray-900 text-m font-bold">GPA : 2.1</p>
            <p className="mt-2 mb-2 text-gray-900 text-base font-normal">
              <span className="font-bold text-purple-700">Thesis: </span>
              Design and Fabrication of Numerical Text Reader
            </p>
            <p>
              <span className="font-bold text-purple-700">Study Focus: </span>
              Analog and digital electronic circuits and systems
            </p>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  );
}

export default Education;
