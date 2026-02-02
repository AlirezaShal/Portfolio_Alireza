// Skills.jsx
import { motion } from "framer-motion";
import {
  FaWindows,
  FaCogs,
  FaLaptopCode,
  FaBatteryFull,
  FaStar,
} from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

const MySkills = [
  {
    category: "Hardware Design",
    skills: [
      {
        label: (
          <>
            <span className="text-black font-bold">PCBA Design:</span> OrCAD,
            Altium Designer, Eagle
          </>
        ),
        icon: FaCogs,
        rating: 5,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">Simulation:</span> MATLAB –
            Simulink
          </>
        ),
        icon: FaLaptopCode,
        rating: 4,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">Circuit Verification:</span>{" "}
            LTspice, PSPICE, EWB Multisim, Proteus, etc.
          </>
        ),
        icon: FaCogs,
        rating: 5,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">
              Circuit & System Level Design:
            </span>{" "}
            (ICs, MOSFET, DC-DC, BMS, Solar Panels)
          </>
        ),
        icon: FaBatteryFull,
        rating: 5,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">Sensors:</span> Current,
            Voltage, Temperature, Acceleration, Hall effect, Infra-red,
            Vibration, Gas, Movement, Distance, etc.
          </>
        ),
        rating: 5,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">
              Data Communication Protocol:
            </span>{" "}
            CAN, LIN, Optical RX-TX, SPI, UART, Wireless, Power Line
            Communication
          </>
        ),
        rating: 4,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">Instruments:</span> Different
            Measurement & Analysis Instruments
          </>
        ),
        rating: 4,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">Programmable Devices:</span>{" "}
            ATMEGA, dSPACE, Programmable Power Supplies and electronic load,
            Battery Simulator, etc.
          </>
        ),
        rating: 4,
      },
      {
        label: (
          <>
            <span className="text-black font-bold">Multidisciplinary:</span>{" "}
            <span className="text-black font-bold">
              Electronic + Power Electronic + Communication + Semiconductor
              Devices
            </span>
          </>
        ),
        rating: 4,
      },
    ],
  },
  {
    category: "Software",
    skills: [
      { label: "Windows", icon: FaWindows, rating: 4 },
      { label: "MS Office", icon: FaLaptopCode, rating: 4 },
      { label: "Digital Working Environments", rating: 5 },
      { label: "C Programming", icon: SiC, rating: 3 },
      { label: "C++ Programming", icon: SiCplusplus, rating: 2 },
      { label: "Assembly", icon: FaLaptopCode, rating: 2 },
    ],
  },
  {
    category: "Languages",
    skills: [
      { label: "English", rating: 5 },
      { label: "Persian", rating: 5 },
      { label: "German", rating: 3 },
    ],
  },
  {
    category: "Others",
    skills: [{ label: "Driving Licence: B" }],
  },
];

function Skills() {
  return (
    <div className="grid xl:px-16 px-6 mx-auto mb-4 lg:mb-10 pb-2 lg:pb-8">
      <h4 className="lg:text-3xl text-2xl w-fit px-3 font-bold mx-auto text-neutral-700 mt-8 border-b-2 lg:pb-2 border-purple-600">
        Skills
      </h4>

      {MySkills.map((categoryItem, catIndex) => (
        <div key={catIndex} className="mt-8">
          <h5 className="text-xl lg:text-2xl font-semibold text-purple-600 mb-4">
            {categoryItem.category}
          </h5>
          <motion.div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {categoryItem.skills.map(({ label, icon: Icon, rating }, index) => (
              <motion.div
                key={index} // ✅ Use index as unique key
                className="flex flex-col bg-stone-100 p-3 rounded-md hover:border-b-2 hover:border-purple-500 transition-colors cursor-pointer"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05 + catIndex * 0.1,
                }}
              >
                {Icon && <Icon className="w-6 h-6 text-purple-600 mb-1" />}
                <span className="text-sm text-neutral-700 font-medium">
                  {label}
                </span>
                {rating && (
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 mr-1 ${
                          i < rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
