import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="sm:px-16 pb-12 xs:px-8 px-6 pt-[96px] ">
      <div className="2xl:max-w-[1000px] w-full mx-auto gradient-bg">
        <div className="text-3xl sm:text-[40px] md:text-7xl lg:text-8xl text-center uppercase leading-none pt-5 ">
          <h1>Secure Your</h1>
          <h1 className="relative z-40">Company&apos;s</h1>
          <h1 className="relative z-40">.Soul Today</h1>
        </div>
        <Image
          src="/bubbles.png"
          alt="bubbles"
          width={1024}
          height={1024}
          className="relative w-[60%] mt-[-95px] md:mt-[-335px]  md:w-[80%] lg:w-[90%] mx-auto object-contain  z-10 animate-bounce slow-bounce"
        />
        <div className="flex justify-center items-center md:mt-[-100px] lg:mt-[-150px] mb-[50px] md:mb-[150px] mt-5 lg:mb-[155px]">
          <a
            className="flex justify-center items-center text-[12px] text-[#fff] bg-[#6816b9] w-fit py-[5px] px-[20px] sm:py-6 sm:px-12 rounded-[64px] font-[500] cursor-pointer group z-30"
            href="#"
          >
            <span className="mr-5">Waitlist Application</span>
            <Image
              src="/right-arrow-white.svg"
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

export default Contact;
