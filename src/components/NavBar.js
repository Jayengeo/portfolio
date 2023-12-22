import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import { MdOutlineMail } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { BsQuestionSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";



const CustomLink = ({ href, title, className = "", icon }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      <div className="flex justify-between items-center ">
        <div className="mr-2">{icon}</div>
        <div>{title}</div>
      </div>
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle, icon }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center ">
        <div className="mr-2">{icon}</div>
        <div>{title}</div>
      </div>
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? " opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://github.com/Jayengeo"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jacky-jn-ngo/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
        <nav className="flex justify-between">
          <CustomLink
            href="/"
            title="Home"
            className="mr-4"
            icon={<GrHomeRounded />}
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4"
            icon={<BsQuestionSquare />}
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="ml-4"
            icon={<FaCode />}
          />
          <CustomLink
            href="/contact"
            title="Contact"
            className="ml-8"
            icon={<MdOutlineMail />}
          />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              icon={<GrHomeRounded />}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              icon={<BsQuestionSquare />}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              icon={<FaCode />}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="contact"
              className=""
              icon={<MdOutlineMail />}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="https://github.com/Jayengeo"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark "
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jacky-jn-ngo/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 "
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default NavBar;
