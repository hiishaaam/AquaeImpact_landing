import { Button } from "@/components/ui/button";
import React from "react";

export const HeroSubsection = () => {
  return (
    <section
      className="relative w-full h-[1040px] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/main_bg1.jpeg')" }}
    >
      <div className="absolute w-[509px] h-[300px] top-[479px] left-[83px]">
        <div className="absolute w-[509px] h-[173px] top-0 left-0">
          <p className="absolute w-[507px] -top-px -left-px [-webkit-text-stroke:1px_#f3f3f361] [font-family:'Work_Sans-Light',Helvetica] font-light text-[#a7d9bb] text-[27px] tracking-[-0.54px] leading-10">
            We invite you to join us to realize the value of this biodiversity
            as tokenized credits
          </p>
        </div>

        <div className="absolute w-[233px] h-[99px] top-[123px] left-0 shadow-[0px_4px_4px_#00000040]">
          <div className="w-[235px] h-[99px]">
            <div className="relative w-[233px] h-[99px] -top-px">
              <Button
                className="absolute w-[233px] h-[82px] top-2.5 left-0 bg-[#143c2b] border border-[#a7d9bb] rounded-[12px] shadow-md flex items-center justify-center hover:bg-[#1a4d37] transition-colors duration-200"
                variant="outline"
              >
                <span className="text-white text-[28px] tracking-wide drop-shadow-md font-sans whitespace-nowrap">
                  EXPLORE MORE
                </span>
              </Button>
              {/* Reflection effect */}
              <div className="absolute w-[233px] h-[40px] left-0 top-[90px] pointer-events-none select-none opacity-40" style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 60%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 60%, transparent 100%)',
              }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-[28px] tracking-wide font-sans whitespace-nowrap" style={{
                    transform: 'scaleY(-1)',
                    opacity: 0.4,
                    filter: 'blur(1px)'
                  }}>
                    EXPLORE MORE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[233px] h-[86px] top-[214px] left-0">
          <div className="w-[235px] h-[86px]">
            <div className="relative w-[233px] h-[86px]">
              <Button
                className="w-[233px] h-[51px] top-7 bg-[linear-gradient(0deg,rgba(69,169,109,0.17)_20%,rgba(54,116,79,0.17)_50%,rgba(2,8,7,0.17)_86%)] opacity-40 absolute left-0 rounded-[9px] hover:opacity-60 h-auto"
                variant="ghost"
                disabled
              >
                <span className="absolute w-[189px] top-0 left-[22px] bg-[linear-gradient(180deg,rgba(137,135,135,1)_0%,rgba(0,0,0,1)_84%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-transparent text-[25px] tracking-[-0.50px] leading-[100px] whitespace-nowrap">
                  EXPLORE MORE
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <header className="absolute w-[821px] h-[311px] top-[106px] left-[83px]">
        <h1 className="absolute w-[821px] top-0 left-0 [text-shadow:0px_4px_4px_#282424] [font-family:'Wittgenstein-Medium',Helvetica] font-medium text-[#e9f9f0] text-[65px] tracking-[-1.30px] leading-[75px]">
          Biomass is what connects all life, Biodiversity signifies its strength
          and beauty.
        </h1>

        <cite className="absolute w-[325px] top-[237px] left-[312px] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-[#c3e8d2] text-3xl tracking-[-0.60px] leading-[75px] whitespace-nowrap">
          -Dr. Ranil Senanayake
        </cite>
      </header>
    </section>
  );
};

export default HeroSubsection;
