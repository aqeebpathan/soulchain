import Image from "next/image";

import LineAnimation from "@/components/LineAnimation";
import Odometer from "@/components/Odometer";
import { aboutAffiliation, provingRecords } from "@/constants";

const Affiliations = () => {
  return (
    <section
      id="proving-affiliations"
      className="relative  sm:px-16 pb-12 xs:px-8 px-6 pt-[96px] z-40"
    >
      <div className="2xl:max-w-[1000px] w-full mx-auto">
        <LineAnimation />
        <div className="flex justify-between ">
          <div className="text-3xl sm:text-[40px] md:text-7xl lg:text-8xl uppercase leading-none pt-5">
            <h1>Proving </h1>
            <h1>Affiliations</h1>
          </div>
          <div className="pt-5">
            <h4 className="font-[500]">02</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-[4px] ">
          <div className="flex flex-1 flex-col gap-5 justify-between items-center">
            <p className="text-[12px] leading-[30px] mt-[60px] md:mt-[86px] mb-3 tracking-wider ">
              {aboutAffiliation}
            </p>
            <Image
              src="/polygon.png"
              alt="polygon"
              width={320}
              height={320}
              className="animate-bounce slow-bounce w-[240px]  sm:w-[320px] "
            />
          </div>

          <ul className="flex-1 ">
            {provingRecords.map((record, index) => (
              <li key={index} className=" md:mt-[96px]">
                <LineAnimation />
                <h4 className="text-[14px] w-[280px] mt-6">{record.title}</h4>
                <p className="mt-6">
                  <span className="text-[48px] sm:text-[64px] text-bg ">
                    {record.value === 8 && (
                      <span>
                        <span className="text-[31px]">$</span>2.
                      </span>
                    )}
                    {
                      <Odometer
                        initialValue={0}
                        finalValue={record.value}
                        speed={record.speed}
                      />
                    }
                    {record.value === 8 && <span>B</span>}
                    {record.value === 150 && <span>.000+</span>}
                    {record.value === 425 && <span>M</span>}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
