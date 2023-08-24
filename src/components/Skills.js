import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8x1 mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Figma" x="15vw" y="-12vw" />
        <Skill name="Ruby" x="15vw" y="15vw" />
        <Skill name="Tailwind CSS" x="-25vw" y="15vw" />
        <Skill name="NodeJS" x="0vw" y="-20vw" />
        <Skill name="Typescript" x="-25vw" y="15vw" /> 
        <Skill name="Express" x="-30vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;
