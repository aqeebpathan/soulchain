import Link from "next/link";
import LineAnimation from "@/components/LineAnimation";
import { footerDescription, contactLinks, supportLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="sm:px-16 xs:p-8 px-6  ">
      <div className="2xl:max-w-[1000px] w-full mx-auto">
        <LineAnimation
          styles={"mt-[20px] mb-[20px] lg:mt-[110px] lg:mb-[47px]"}
        />
        <div className="text-[4vw] sm:text-[22px] md:text-[30px] lg:text-[40px] leading:[21] sm:leading-[1.1] font-[400] tracking-[-1px]">
          {footerDescription.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="flex flex-col-reverse sm:flex-row  mt-[96px] sm:mb-[48px]">
          <div className="flex-1 mt-[40px] mb-[40px] sm:m-0 pt-[20px] leading-[24px]">
            <a
              href="#"
              className="text-[14px] font-[600] leading-[16px] tracking-[1px] "
            >
              SoulChain
            </a>
            <p className="mt-[40px] text-[12px] font-[500] leading-[24px] text-[#e9efff]">
              Developed By <Link href="https://aqeeb.dev">aqeeb.dev/</Link>
            </p>
            <p className="text-[12px] font-[400] leading-4 opacity-[.8] text-[#e9efff] sm:pr-10">
              DISCLAIMER: This website is a clone created for non-commercial
              learning purposes only. We do not claim ownership of the original
              content.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="lg:mr-[48px]">
                <h2 className="text-[12px] tracking-[.6px] font-[500] leading-[24px] mt-[20px] mb-[30px] md:mb-[48px]">
                  Company:
                </h2>
                <ul>
                  {contactLinks.map((item) => (
                    <li key={item.title} className="cursor-pointer">
                      <a
                        href={item.link}
                        className="text-[12px] tracking-[1px] font-[500] leading-[24px] text-[#e9efff]"
                      >
                        {item.title}
                      </a>
                      <LineAnimation styles={"mt-[10px] mb-[16px] "} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:mr-[48px]">
                <h2 className="text-[12px] tracking-[.6px] font-[500] leading-[24px] mt-[20px] mb-[30px] md:mb-[48px]">
                  Supports:
                </h2>
                <ul>
                  {supportLinks.map((item) => (
                    <li key={item.title} className="cursor-pointer">
                      <a
                        href={item.link}
                        className="text-[12px] tracking-[1px] font-[500] leading-[24px] text-[#e9efff]"
                      >
                        {item.title}
                      </a>
                      <LineAnimation styles={"mt-[10px] mb-[16px] "} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
