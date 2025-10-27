import React from "react";
import KhushalImg from "../assests/images/khushalimg.jpeg";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Hero() {
  return (
    <>
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-center text-white">
        <img
          src={KhushalImg}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-yellow-200 shadow-lg object-cover mb-6"
        />
        <h1 className="text-4xl font-bold font-serif tracking-tighter ">
          WEB DEVELOPER
        </h1>
        <p className="text-gray-400 text-sm font-extralight font-poppins tracking-tighter mt-2">
          I design and develop modern web applications that blend creativity,
          performance, and precision <br />— because great ideas deserve great
          execution.
        </p>
      </div>
      <About />
      <section className="flex flex-col  md:flex-row gap-6 p-6">
        <div className="md:w-1/2">
          <Skills />
        </div>
        <div className="md:w-1/2">
          <Projects />
        </div>
      </section>
    </>
  );
}
