import React from "react";
import Head from "next/head";
import Layouts from "@/components/Layouts";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Jacky| Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layouts className="pt-16">
          <AnimatedText text="Check this out" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12 ">
              <FeaturedProject
                img={project1}
                title="Doggo Dash"
                summary="Doggo Dash is a multi-page application which allows users to register as a dog owner looking for dog sitters, or as a dog sitter looking to provide their services."
                link="/"
                type="Featured Project"
                github="https://github.com/Jayengeo/Doggo-Dash"
              />
            </div>
            <div className="col-span-6 ">Project-1</div>
            <div className="col-span-6 ">Project-2</div>
            <div className="col-span-6 ">Project-3</div>
            <div className="col-span-6 ">Project-4</div>
          </div>
        </Layouts>
      </main>
    </>
  );
};

export default projects;