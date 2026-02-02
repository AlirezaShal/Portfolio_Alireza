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
            <span className="text-black font-bold">Circuit Verification:</span>{" "}
            LTspice, PSPICE, EWB Multisim, Proteus, etc.
          </>
        ),
        icon: FaCogs,
        rating: 4,
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
    ],
  },
  {
    category: "Simulation & Programming",
    skills: [
      { label: "MATLAB – Simulink", icon: FaLaptopCode },
      { label: "C Programming", icon: SiC },
      { label: "C++ Programming", icon: SiCplusplus },
      { label: "Assembly", icon: FaLaptopCode },
      { label: "Digital & Analog Design Tools" },
    ],
  },
  {
    category: "Data Communication",
    skills: [
      {
        label:
          "Protocols: CAN, LIN, Optical RX-TX, SPI, UART, Wireless, Power Line Communication",
      },
    ],
  },
  {
    category: "Instruments & Devices",
    skills: [
      { label: "Measurement & Analysis Instruments" },
      {
        label:
          "Programmable Devices: ATMEGA, dSPACE, Programmable Power Supplies, Battery Simulator",
      },
    ],
  },
  {
    category: "Software",
    skills: [
      { label: "Windows", icon: FaWindows },
      { label: "MS Office", icon: FaLaptopCode },
      { label: "Digital Working Environments" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { label: "English", rating: 4 },
      { label: "Persian", rating: 4 },
      { label: "German", rating: 4 },
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
                <span className="text-sm text-neutral-700 font-medium">{label}</span>
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
