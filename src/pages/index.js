import Head from "next/head";
import Layouts from "../components/Layouts";
import Image from "next/image";
import profilePic from "../../public/images/profile/Home-page.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layouts className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="jacky" className="w-full h-auto" />
            </div>
            <div className= "w-1/2">
              <h1>Turning Visions Into Reality with Code and Design</h1>
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layouts>
      </main>
    </>
  );
}
