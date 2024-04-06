import Image from "next/image";

import { heroSubheading } from "@/constants";

const Hero = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 gradient-bg ">
      <div className="2xl:max-w-[1280px] w-full mx-auto ">
        <div className="text-3xl  md:text-7xl lg:text-8xl uppercase text-center leading-[1] overflow-hidden">
          <h1>Bringing</h1>
          <h1 className="relative hover:opacity-[.05] preserve-3d transition duration-1000 ease-in-out cursor-pointer mt-5 z-40">
            Transparency
          </h1>
          <h1 className="relative z-40">To Web3</h1>
          <h1 className="relative z-40"> Affiliations</h1>
          <Image
            src="/spiral-curve.png"
            alt="spiral-curve"
            width={1080}
            height={1080}
            draggable={false}
            className="relative w-[100vw] sm:w-[50%] mt-[-180px] sm:mt-[-140px] md:mt-[-335px] md:w-[75%] mx-auto object-contain lg:mt-[-550px] z-10 animate-bounce slow-bounce"
          />
        </div>
        <p className="text-[10px] md:text-[12px] leading-5 md:leading-8 tracking-wider font-[400px] text-center max-w-[487px] mx-auto z-10 relative mt-[10px] lg:mt-[-200px] ">
          {heroSubheading}
        </p>
        <div className="flex justify-center items-center mb-[104px] sm:mb-[100px] mt-5 lg:mb-[155px] lg:mt-8">
          <a
            className="flex justify-center items-center text-[12px] text-[#6816b9] bg-[#fff] w-fit py-[5px] px-[20px] sm:py-2 sm:px-8 rounded-[64px] font-[500] cursor-pointer group z-30"
            href="#"
          >
            <span className="mr-[8px]">Waitlist Application</span>
            <Image
              src="/right-arrow-purple.svg"
              alt="right arrow"
              width={28}
              height={28}
              className="transition-transform transform-gpu ease-in-out group-hover:translate-x-3 sm:group-hover:translate-x-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
