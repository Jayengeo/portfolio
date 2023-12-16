import Head from "next/head";
import Layouts from "../components/Layouts";
import TransitionEffect from "../components/TransitionEffect";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "../../public/images/profile/Completed steps-pana.png";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";
import { GoPaperAirplane } from "react-icons/go";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbt19ta",
        "template_3cqxspt",
        form.current,
        "_Mdd6LqYXsZ5u2vKa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Jacky | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light 2xl:">
        <Layouts className="pt-0 md:pt-16 sm:pt-8">
          <AnimatedText
            text="Let's get in touch!"
            className="mt-6 mb-8 lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-4"
          />
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-4/5 md:w-1/2">
              <Image
                src={contact}
                alt="jacky"
                className="w-full h-auto px-10"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <form
              onSubmit={sendEmail}
              className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light px-10"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <label className="mt-4 ">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full rounded-br-2x1 rounded-3xl border-2 border-solid border-dark bg-light  p-6 dark:bg-dark dark:border-light mb-4"
              />

              <label className="mt-4">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full rounded-br-2x1 rounded-3xl border-2 border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light mb-4"
              />

              <label className="mt-4">Message</label>
              <textarea
                name="message"
                className="w-full rounded-br-2x1 rounded-3xl border-2 border-solid border-dark bg-light p-12 dark:bg-dark dark:border-light mb-4"
              />
              <div className="flex justify-center">
                <motion.div
                  className="flex flex-row items-center justify-center w-1/4 rounded-br-2x1 rounded-3xl border-2 border-solid border-dark dark:border-light cursor-pointer "
                  whileHover={{ scale: 1.05 }}
                >
                  <GoPaperAirplane size={24} />
                  <input
                    type="submit"
                    value="Send"
                    className="pl-2 py-4 cursor-pointer"
                  />
                </motion.div>
              </div>
            </form>
          </div>
        </Layouts>
      </main>
    </>
  );
};

export default Contact;
