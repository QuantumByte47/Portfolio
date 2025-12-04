"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from 'react-type-animation';

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI Engineer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-white">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <div className="text-2xl font-semibold mb-2 text-white">
            I am a{" "}
            <TypeAnimation
              sequence={[
                'Lead AI Engineer',
                1000,
                'Data Scientist',
                1000,
                'Voice AI Expert',
                1000,
                'RAG Architect',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </div>
          <p className="leading-relaxed">
            4+ years of experience building real-time AI systems,
            multi-modal platforms, and enterprise-grade platforms.
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,66,248,0.5)]"
          >
            View Projects
          </a>
          <a
            href="mailto:Talhaislam471@gmail.com"
            className="py-2 px-4 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:bg-[#7042f81a] transition-all duration-300 hover:border-[#7042f8]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[500px] h-[500px] group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>

          <img
            src="/img1.png"
            alt="work icons"
            height={650}
            width={650}
            className="relative z-10 drop-shadow-[0_0_15px_rgba(112,66,248,0.5)] rounded-full object-cover w-[500px] h-[500px]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
