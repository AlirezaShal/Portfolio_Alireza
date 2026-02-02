// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="px-10 xl:px-16 mt-16">
      <motion.h3 className="lg:text-3xl text-2xl font-bold w-fit text-neutral-700 mx-auto mb-6 border-b-2 lg:pb-2 border-purple-600">
        Professional Experience
      </motion.h3>
      <motion.div className="bg-white rounded-lg shadow-xl py-2 px-3">
        <motion.ol
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="relative border-s border-gray-200 dark:border-gray-700"
        >
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2021 – Now
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Senior and lead HW Developer
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Gardena Manufacturing GmbH, Husqvarna, Karlstein am Main, Germany
              (HVA)
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className="font-bold text-purple-700">Tasks: </span>
              <li>BMS design for battery applications</li>
              <li>
                Design according to requirements, standards, safety concepts,
                Battery product mass production and tooling requirements, cell
                specs, …
              </li>
              <li>Helping system engineer defining high level requirements</li>
              <li>HW level requirement definition</li>
              <li>
                HW Architecture definition, HW description and HW-SW interface
                definition
              </li>
              <li>Optimization of power consumption and mode definition</li>
              <li>Performing FMEDA, MTTF</li>
              <li>Circuit design and review</li>
              <li>PCBA design and review for other project teams</li>
              <li>
                E-BOM preparation and optimum and multi-source HW component
                selection, adding Symbols and foot prints to data base and
                working closely with component engineers and sourcing team
              </li>
              <li>
                Technical debate with IC suppliers, EMSs, and other business
                units
              </li>
              <li>
                Close cooperation with SW and Mechanical design team to have the
                best fit design for the system
              </li>
              <li>Test and verification of BMS HW and Batteries packs</li>
              <li>
                Preparing HW test plan in development phase, PTS for PCBA mass
                production, and helping to define required instrument and test
                setup for automated test system for EOL testing
              </li>
              <li>Help T&V team for battery level testing</li>
              <li>Documentation according to company process and format</li>
              <li>
                Providing mass production output file, End of line testing and
                technical support outputs for industrialization team and
                extremal suppliers
              </li>
              <li>
                Technical support for other teams like test and automation team,
                quality team, Pre-study team, prototype technicians, HW-LAB
                development, new colleague trainings, …
              </li>
            </ul>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className="font-bold text-purple-700">
                Technical Highlights:{" "}
              </span>
              <li>
                V, I, T, motion sensing, EMI and filtering, clamping and
                transient protection, MOSFET and MOSFET driver circuits, Relays,
                SPI, UART, CAN physical interface, Cell balancing, AFEs, SPFs,
                DCDC converters, MCUs, EEPROM, …
              </li>
              <li>
                OrCAD CS and PCBA design, Lt-spice, various documentation tools,
                process-based working (Jira, PLM, office tools)
              </li>
              <li>
                Robotic professional batteries and E.V. wheeled products
                batteries
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb 2020 – May 2021
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              HW Senior Project Engineer – Full-time
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Brunnel GmbH, <span>project work at</span>FEW Europe GmbH, Aachen,
              Germany
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                <span className="text-purple-700">Project A:</span>{" "}
                <span className="text-gray-900">
                  Project Engineer at Automotive Battery Systems Department{" "}
                </span>
              </li>
              <li>
                Conduct reviewing 4 automotive high voltage battery projects as
                HW review engineer
              </li>
              <li>
                Review and partial design of electric vehicle battery systems
                including Battery Management Units, Cell Monitoring Units, and
                power distribution unit. (CMU, BMU/BMS and PDU)
              </li>
              <li>
                Design and review of I-V-T measurements, CAN communication unit,
                CMU, BMS, PDU, …
              </li>
              <li>
                Preparation of documents based on ISO26262 according to chapter
                5, hardware development, as well as cooperation with FUSY team
                to perform FMEDA and FMEA
              </li>
              <li>
                Close contact with design team for EE and 3D routing, lay outing
                inside battery
              </li>
              <li>
                <span className="font-bold text-purple-700">Project B:</span>{" "}
                <span className="text-gray-900">
                  Architect Eng. at EE department for development of an electric
                  vehicle
                </span>
              </li>
              <li>
                EE-BOM management of EE department and control of consistency of
                EE BOM with 3D packaging of the parts in car
              </li>
              <li>
                Using In-Step as well as Team Center tools to manage EE BOM,
                part documentation, structure management, assembly management
                and versioning based on software, ...
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Sub-management{" "}
                </span>
                and close cooperation with EE CREs to assure the consistency of
                EE topology and circuit with BOM.
              </li>
            </ul>
          </motion.li>

          {/* Portfolio */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Oct 2018 – Feb 2020
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Hardware Pre-development Engineer
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Brunel GmbH, Project work at Auto-Kabel GmbH, Monchengladbach,
              Germany (AK)
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className="font-bold text-purple-700">Tasks: </span>
              <li>
                {" "}
                Predevelopment of new electronic products for automotive safety
              </li>
              <li>HW development project management (QCT)</li>
              <li> Circuit design, selection of components, PCBA design</li>
              <li> PCBA prototype production and assembly</li>
              <li>Provision and performing of the HW tests</li>
              <li>Reports, documentation and researches</li>
            </ul>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className="font-bold text-purple-700">
                Technical Topics:{" "}
              </span>
              <li>
                Current separation and isolation units, activation and control
                of semiconductor switches
              </li>
              <li>MOSFETs and Smart MOSFETs</li>
              <li>
                {" "}
                Data transmission units: LIN, UART, CAN physical interface
              </li>
              <li>Standards and specification-based design and lay outing</li>
              <li>Current and voltage measuring circuits</li>
              <li> galvanic and optical isolation</li>
              <li> FIT Rate Calculations</li>
              <li>Tools: Altium, Lt-spice, MS Office ...</li>
            </ul>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className="font-bold text-purple-700">
                Invention Registration:{" "}
              </span>
              <li>1-"Electronic Over Current Fuse"</li>
              <li>2- "Electronic ATO Fuse"</li>
              <li>3-"Car Brain's supply in board net 4.0"</li>
            </ul>
          </motion.li>

          {/* Portfolio */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Oct 2016 – Mar 2017 & Sep 2017 - Dec 2017
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Research assistant and internship
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Energy Technology Department, Aalborg University, Esbjerg, Denmark
              (AU)
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className=" font-bold text-purple-700">Tasks: </span>
              <li>Design, Simulation, Implementation, Test and Measurement</li>
              <li>Research and Publication</li>
            </ul>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <span className="font-bold text-purple-700">
                Technical Topics:{" "}
              </span>
              <li>
                Implementation, Smart control, Power management and regulation
                of a (48V) DC Micro Grid test bed (PV, PEV, Storage, DC EL, ACG
                simulator, power supply, et)
              </li>
              <li> IoT (hardware, software and infrastructures)</li>
              <li> Wireless technologies</li>
              <li>Modular multi-level convertors</li>
              <li> Sensors, Optical fibers, Optical isolation</li>
              <li> galvanic and optical isolation</li>
              <li> FIT Rate Calculations</li>
              <li>
                {" "}
                <span className="font-bold text-purple-700">Tools: </span>
                dSPACE MicroLabBox, MATLAB and PLECS
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              Sep 2006 – Oct 2014 | Feb 2018 – Sep 2018
            </time>

            <h3 className="text-md font-semibold text-gray-500">
              Lecturer & Academic Member
            </h3>

            <h3 className="text-lg font-semibold text-gray-900">
              Islamic Azad University (LIAU), Lahijan, Iran
            </h3>

            {/* Tasks */}
            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1 text-base">
              <span className="font-bold text-purple-700">Tasks:</span>
              <li>
                Teaching, Presentation, Thesis Supervision, Research and
                Publication
              </li>
              <li>Educational Administration</li>
            </ul>

            {/* Teaching Topics */}
            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1 text-base">
              <span className="font-bold text-purple-700">
                Teaching Topics:
              </span>
              <li>
                Design and Analysis of Analog Electronic Circuits I, II, III
              </li>
              <li>Analog Electrical Circuits I, II</li>
              <li>Basics of Digital Circuit Design</li>
              <li>Technical English</li>
              <li>Electronic Laboratory</li>
              <li>PLC Laboratory</li>
              <li>Supervision of more than 150 BSc theses</li>
              <li>Five professional research projects</li>
            </ul>

            {/* Research & Projects */}
            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1 text-base">
              <span className="font-bold text-purple-700">
                Professional Research & Projects:
              </span>
              <li>
                Analysis and Modeling of WDFB Laser with Three Rate Equations
                Model
              </li>
              <li>
                Synthesis and Characterization of Fe3O4, ZnO and Fe3O4–ZnO
                Core-Shell Nanoparticles
              </li>
              <li>Analysis and Circuit Modeling of High-Speed APDs</li>
              <li>
                Design of Low-Voltage and Low-Power Amplifier Utilizing Bulk
                Driven Technique and Its Application in Active-RC Filters
              </li>
            </ul>

            {/* Achievements */}
            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1 text-base">
              <span className="font-bold text-purple-700">Achievements:</span>
              <li>6 journal papers and 13 international conference papers</li>
              <li>
                Head of Electronic Group for nearly 3 years (25 lecturers,
                1500–2000 BSc students)
              </li>
              <li>Awarded as Best Lecturer at LIAU (2009)</li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              Sep 2008 – Sep 2012
            </time>

            <h3 className="text-md font-semibold text-gray-500">
              Senior Electronic Engineer & Consultant (Part-time)
            </h3>

            <h3 className="text-lg font-semibold text-gray-900">
              Azaran Kavosh Shomal, Rasht, Iran (AKS)
            </h3>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">Tasks:</span>
              <li>Project management and technical consultation</li>
              <li>Design, implementation, testing, and repair</li>
            </ul>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">
                Technical Topics:
              </span>
              <li>Digital measurement and testing circuit & system design</li>
              <li>AC and DC motor drive systems</li>
              <li>Embedded systems with microcontrollers and CPUs</li>
              <li>LED panels</li>
            </ul>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">Others:</span>
              <li>
                Recognized as Professional Electronic Engineer by ANZSCO
                (Engineering Assessment Organization, Australia)
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              Sep 2005 – Mar 2006
            </time>

            <h3 className="text-md font-semibold text-gray-500">
              Electrical Engineer (Part-time)
            </h3>

            <h3 className="text-lg font-semibold text-gray-900">
              Nour Gostar Shams Khazar, Rasht, Iran (NGSK)
            </h3>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">Tasks:</span>
              <li>Sales and marketing</li>
              <li>Installation and testing</li>
            </ul>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">
                Technical Topics:
              </span>
              <li>UPS and battery charging systems</li>
              <li>Biomedical instruments</li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              Jul 2005 – Sep 2006
            </time>

            <h3 className="text-md font-semibold text-gray-500">
              Electronic & Hardware Engineer
            </h3>

            <h3 className="text-lg font-semibold text-gray-900">
              GIC GmbH, Aataneh, Iran (GIC)
            </h3>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">Tasks:</span>
              <li>Sales and assembly</li>
              <li>Customer consultation for PC purchases</li>
              <li>PC assembly and software installation</li>
              <li>Guarantee and maintenance of PC systems</li>
            </ul>
          </motion.li>
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              Oct 2003 – Oct 2004
            </time>

            <h3 className="text-md font-semibold text-gray-500">
              Market Research Project Supervisor
            </h3>

            <h3 className="text-lg font-semibold text-gray-900">
              JMR GmbH, Tehran, Iran (JMR)
            </h3>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">Tasks:</span>
              <li>
                Supervising and managing different product market research
                projects
              </li>
            </ul>

            <ul className="list-disc ml-6 mt-2 text-gray-500 space-y-1">
              <span className="font-bold text-purple-700">Topics:</span>
              <li>Customer consultation and definition of research methods</li>
              <li>Localization of questionnaires</li>
              <li>Validation of reports</li>
              <li>Project control</li>
              <li>
                <span className="font-semibold text-gray-800">
                  Management of more than 30 questioners{" "}
                </span>
                in market research teams
              </li>
            </ul>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  );
}

export default Experience;
