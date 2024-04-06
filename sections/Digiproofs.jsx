import Image from "next/image";

import LineAnimation from "@/components/LineAnimation";
import { digiProofsPara1, digiProofsPara2 } from "@/constants";

const Digiproofs = () => {
  return (
    <section
      id="digi-proofs"
      className="relative sm:px-16 pb-12 xs:px-8 px-6  pt-[96px]  z-40"
    >
      <div className="2xl:max-w-[1000px] w-full mx-auto ">
        <LineAnimation />
        <div className="flex justify-between ">
          <div className="text-3xl sm:text-[40px] md:text-7xl lg:text-8xl uppercase leading-none pt-5">
            <h1>Digi-Proofs </h1>
          </div>
          <div className="pt-5">
            <h4 className="font-[500]">03</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-[144px]  ">
          <div className="flex-1 mt-[-55px] ">
            <Image
              src="/knot.png"
              alt="knot"
              width={320}
              height={320}
              className="w-[320px] animate-bounce slow-bounce "
            />
          </div>
          <div className="flex-1 mb-[20px] sm:mb-[140px] md:mb-[88px]">
            <p className="text-[12px] leading-[32px] tracking-wide mb-3">
              {digiProofsPara1}
            </p>
            <p className="text-[12px] leading-[32px] tracking-wide mb-3">
              {digiProofsPara2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digiproofs;
