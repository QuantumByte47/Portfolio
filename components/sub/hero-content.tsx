"use client";

export const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-between px-20 mt-20 w-full z-[20] max-w-[1400px] mx-auto">
      {/* Left side - Text content */}
      <div className="h-full w-1/2 flex flex-col gap-3 justify-center text-start pr-10">
        <div className="flex flex-col gap-4 text-6xl text-bold text-black max-w-[600px] w-auto h-auto">
          <span>
            Hi, I&apos;m{" "}
            <span className="text-blue-800">
              Talha Islam
            </span>
          </span>
        </div>

        <p className="text-lg text-gray-600 my-3 max-w-[600px]">
          AI Engineer & Data Scientist with 6+ years of experience building real-time AI systems, 
          multi-modal platforms, and enterprise-grade automation solutions. Specializing in 
          machine learning, deep learning, and scalable AI applications.
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:Talhaislam471@gmail.com"
            className="py-3 px-6 text-center text-white cursor-pointer rounded-lg border border-blue-800 bg-blue-800 hover:bg-blue-900 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#skills"
            className="py-3 px-6 border border-black text-center text-black cursor-pointer rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            View Skills
          </a>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="relative">
          <img
            src="/img1.png"
            alt="Talha Islam"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
