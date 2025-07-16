import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function DesktopSubsection() {
  const circleData = [
    {
      src: "/Environment.png",
      alt: "Environmental circle",
      position: "top-0 left-0",
      label: "Environmental",
      labelPosition: "top-[349px] left-[51px]",
    },
    {
      src: "/social.png",
      alt: "Social circle",
      position: "top-0 left-[611px]",
      label: "Social",
      labelPosition: "top-[349px] left-[746px]",
    },
    {
      src: "/governance.png",
      alt: "Governance circle",
      position: "top-[300px] left-[311px]",
      label: "Governance",
      labelPosition: "top-[649px] left-96",
    },
  ];

  return (
    <section className="relative w-full h-[1073px] overflow-hidden bg-gradient-to-b from-[#0b4d41] via-[#0d473c] via-[24%] from-[#082620] via-[59%] to-black">

      <main className="relative">
        <h1
          className="w-full text-center mt-[95px] font-medium text-[#54b19c] text-[63px] tracking-[0] leading-normal"
          style={{ fontFamily: "Wittgenstein-Medium, Helvetica" }}
        >
          ECOSYSTEM AND SOCIAL GOVERNANCE
        </h1>

        <p
          className="w-full text-center mt-8 font-normal text-[#a7d9bb] text-[35px] tracking-[-0.35px] leading-[45px]"
          style={{ fontFamily: "Work_Sans-Regular, Helvetica" }}
        >
          We provide innovative solutions for ecological restoration, blue
          carbon markets, and sustainable brands.
        </p>

        <div className="flex justify-center items-end gap-[80px] mt-[120px]">
          {/* Environmental */}
          <div className="flex flex-col items-center">
            <img
              className="w-[300px] h-[300px]"
              alt="Environmental circle"
              src="/Environment.png"
            />
            <div
              className="mt-6 font-normal text-[#48ffd4] text-[35px] tracking-[-0.35px] leading-[45px] whitespace-nowrap"
              style={{ fontFamily: "Work_Sans-Regular, Helvetica" }}
            >
              Environmental
            </div>
          </div>
          {/* Governance (center) */}
          <div className="flex flex-col items-center">
            <img
              className="w-[340px] h-[340px]"
              alt="Governance circle"
              src="/governance.png"
            />
            <div
              className="mt-6 font-normal text-[#48ffd4] text-[35px] tracking-[-0.35px] leading-[45px] whitespace-nowrap"
              style={{ fontFamily: "Work_Sans-Regular, Helvetica" }}
            >
              Governance
            </div>
          </div>
          {/* Social */}
          <div className="flex flex-col items-center">
            <img
              className="w-[300px] h-[300px]"
              alt="Social circle"
              src="/social.png"
            />
            <div
              className="mt-6 font-normal text-[#48ffd4] text-[35px] tracking-[-0.35px] leading-[45px] whitespace-nowrap"
              style={{ fontFamily: "Work_Sans-Regular, Helvetica" }}
            >
              Social
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
