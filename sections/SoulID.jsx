import Image from "next/image";

import LineAnimation from "@/components/LineAnimation";
import { builtScenarios, soulIdDescription } from "@/constants";
import RadioButtons from "@/components/RadioButtons";

const SoulID = () => {
  return (
    <section id="soul-id" className="sm:px-16 xs:px-8 px-6 lg:pt-[96px]">
      <div className="2xl:max-w-[1000px] w-full mx-auto">
        <LineAnimation />
        <div className="flex justify-between ">
          <div className="text-3xl sm:text-[40px] md:text-7xl lg:text-8xl uppercase leading-none pt-5">
            <h1>Soul ID</h1>
          </div>
          <div className="pt-5">
            <h4 className="font-[500]">04</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-[88px]">
          <div className="flex-1 flex justify-center ">
            <Image
              src="/soulchain.png"
              alt="soulchain"
              width={500}
              height={500}
              className="w-[300px] sm:w-[360px]"
            />
          </div>

          <div className="flex-1 flex items-center">
            <p className="text-[12px] leading-[32px] tracking-wide">
              {soulIdDescription}
            </p>
          </div>
        </div>

        <LineAnimation />
        <LineAnimation />

        <div className="flex flex-col lg:flex-row mt-[100px] mb-[100px]">
          <div className="flex-1">
            <h1 className="text-3xl md:text-[64px] leading-none uppercase">
              Built for
            </h1>
            <h1 className="text-3xl md:text-[64px] leading-none uppercase">
              Every
            </h1>
            <h1 className="text-3xl md:text-[64px] leading-none uppercase">
              Scenario
            </h1>
            <div className="flex ">
              <ul className="w-full grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 text-[12px] font-[500] mt-[40px] sm:mt-[124px]">
                {builtScenarios.map((secenario, index) => (
                  <li
                    key={index}
                    className="row-span-1 sm:mb-[24px] pr-2 sm:pr-8"
                  >
                    <p>{secenario.title}</p>
                    <LineAnimation styles="mt-[24px] mb-[24px]" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <form className="flex flex-col font-[400] lg:pl-[25px] leading-[32px] mt-16 lg:mt-0">
              <div className="flex justify-between items-center leading-[32px] text-[13px] mb-2">
                <label htmlFor="name">Reciever Soul:</label>
                <span>01.</span>
              </div>
              <input
                type="name"
                placeholder="soulchain.app"
                className="text-[18px] sm:text-[20px] p-[16px] sm:p-6 border-none rounded-2xl text-[#e9efff] bg-[#2f3031] placeholder-[#e9efff] mb-[48px]"
              />

              <div className="flex justify-between items-center leading-[32px] text-[13px] mb-2">
                <label htmlFor="name">Select Digi-Proof:</label>
                <span>02.</span>
              </div>
              <RadioButtons />

              <div className="flex justify-between items-center leading-[32px] text-[13px] mb-2">
                <label htmlFor="name">Description:</label>
                <span>03.</span>
              </div>
              <textarea
                placeholder="This is digital-proof of a collaboration between soulchain.app and aqeeb.dev."
                className="text-[20px] p-6 border-none rounded-2xl bg-[#2f3031] text-[#e9efff] placeholder-[#e9efff] min-h-[300px] mb-[48px]"
              />

              <div className="flex justify-between items-center leading-[32px] text-[13px] mb-2">
                <label htmlFor="name">Digi-Proof background JPEG:</label>
                <span>04.</span>
              </div>
              <div className="h-[300px] border-2 border-dashed border-opacity-20 border-blue-200 rounded-[16px] flex flex-col justify-center items-center mb-[48px]">
                <Image
                  src="/image-icon.png"
                  alt="image-icon"
                  width={40}
                  height={40}
                />
                <p className="text-[#e9efff] tracking-[.5] text-[20px] mt-2 ">
                  Add Background
                </p>
              </div>

              <div className="flex justify-center items-center gap-4 bg-[#6816b9] pt-[24px] pb-[24px] rounded-[64px] text-[12px] font-[400] leading-[24px] group cursor-pointer">
                <p>Submit for Approval</p>
                <Image
                  src="/right-arrow-white.svg"
                  alt="purple"
                  width={32}
                  height={32}
                  className="transition-transform transform-gpu ease-in-out group-hover:translate-x-6"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoulID;
