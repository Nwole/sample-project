import React, { useState } from "react"
import "./Home.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import deved from "../../../src/assets/dev-ed-wave.png";
import react from "../../../src/assets/react-logo.png";
import vue from "../../../src/assets/vue-transparent.png";
import reactNative from "../../../src/assets/React_native.png";
import web1 from "../../../src/assets/web1.png";
import web2 from "../../../src/assets/web2.png";
import web3 from "../../../src/assets/web3.png";
import web4 from "../../../src/assets/web4.png";
import web5 from "../../../src/assets/web5.png";
import web6 from "../../../src/assets/web6.png";
const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" >
      <section className=" min-h-screen">
        <nav className="py-10 pb-12 flex justify-between">
          <h1 className="text-xl fon">Developedbyed </h1>
          <ul className="flex items-center ">
            <li>
              <LightModeIcon onClick={() => setDarkMode=(!darkMode)} className="cursor-pointer text-2xl" />
            </li>
            <l>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                href="#"
              >
                Resume
              </a>
            </l>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Dimitri Marco
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto">
            Freelancer providing services and programming and design content
            needs. join me down below and let's get cracking
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:w-96 md:h-96">
          <img src={deved} layout="fill" objectfit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Services i offer</h3>
          <p className="text-md py-2 loading-8 text-gray-800">
            Since the begining of my journey as a freelancer and developer, i
            have done a remote work
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups</span> and
            collaborated with talented people to create to ceate digital
            products for consumers
          </p>
          <p className="text-md py-2 loading-8 text-gray-800">
            I offer from a wide range of services include brand design and
            programmin and teaching
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-lg my-10">
            <img src={react} width={100} height={100} />
            <h3 className="text-lg font-md pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for yoor needs and designs theory
            </p>
            <h4 className="py-4 text-teal-600">I write the following languages</h4>
            <p className="text-gray-800 py-1">React js</p>
            <p className="text-gray-800 py-1">React Native</p>
            <p className="text-gray-800 py-1">Vue</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-lg my-10">
            <img src={vue} width={100} height={100} />
            <h3 className="text-lg font-md pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for yoor needs and designs theory
            </p>
            <h4 className="py-4 text-teal-600">I write the following languages</h4>
            <p className="text-gray-800 py-1">React js</p>
            <p className="text-gray-800 py-1">React Native</p>
            <p className="text-gray-800 py-1">Vue</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-lg my-10">
            <img src={reactNative} width={100} height={100} />
            <h3 className="text-lg font-md pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for yoor needs and designs theory
            </p>
            <h4 className="py-4 text-teal-600">I write the following languages</h4>
            <p className="text-gray-800 py-1">React js</p>
            <p className="text-gray-800 py-1">React Native</p>
            <p className="text-gray-800 py-1">Vue</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
          <p className="text-md py-2 loading-8 text-gray-800">
            Since the begining of my journey as a freelancer and developer, i
            have done a remote work
            <span className="text-teal-500">agencies</span>
            consulted for <span className="text-teal-500">startups</span> and
            collaborated with talented people to create to ceate digital
            products for consumers
          </p>
          <p className="text-md py-2 loading-8 text-gray-800">
            I offer from a wide range of services include brand design and
            programmin and teaching
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <img
              src={web1}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src={web2}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src={web3}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src={web4}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src={web5}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src={web6}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
