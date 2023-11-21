import React from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layouts from "../components/Layouts";
import About4 from "../../public/images/profile/Mind map-pana.png";
import About2 from "../../public/images/profile/Construction costs-pana.png";
import About1 from "../../public/images/profile/Webinar-pana.png";
import About3 from "../../public/images/profile/Telecommuting-pana.png";
import Image from "next/image";
import Skills from "../components/Skills";
import TransitionEffect from "../components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Jacky| About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layouts className="pt-16">
          <AnimatedText
            text="A little bit about me"
            className="mb-16 lg:!text-7x1 sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-10 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              {/* <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2> */}
              <p className="font-medium mt-20">
                Hello! My name is Jacky, Im a Fullstack Developer who has a passion for developing aesthetic and intuitive web appications
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={About1}
                alt="jacky"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <p className="font-medium">
                I originally studied architecture while in post secondary and
                got some hands on experience working for organizations such as
                Mattamy Homes as a purchaser and as a assitant project manager
                with the city of mississauga
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={About2}
                alt="jacky"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <p className="font-medium">
               Upon graduating, I had the oportunity to work for a  remote techstart where I worked in tech sales, later transitioning to a client success manager
              </p>
            </div>

            
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={About3}
                alt="jacky"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <p className="font-medium">
                I originally studied architecture while in post secondary and
                got some hands on experience working for organizations such as
                Mattamy Homes as a purchaser and as a assitant project manager
                with the city of mississauga
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={About4}
                alt="jacky"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div>
              {/* <div>
                <span>50+</span>
              </div> */}
            </div>
          </div>
          <Skills />
        </Layouts>
      </main>
    </>
  );
};
export default about;
