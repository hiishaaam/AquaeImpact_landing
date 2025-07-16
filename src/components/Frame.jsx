import React from "react";

export default function Frame() {
  return (
    <div className="relative w-full min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Fullscreen background image */}
      <img
        src="/freepik__the-style-is-candid-image-photography-with-natural__52475.jpeg"
        alt="Shield with leaf"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay for darkening if needed */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
      {/* Text content on the right */}
      <div className="relative z-20 flex flex-col items-end justify-center w-full h-full px-8 md:px-24 py-24">
        <div className="w-full text-right">
          <h1 className="font-extrabold text-5xl md:text-8xl text-[#bfcdb2] mb-8 leading-tight w-full text-right">
            Bankable &amp; Insured <br />
            Sustainable-Based <br />
            Assets
          </h1>
          <p className="text-lg md:text-4xl text-white leading-relaxed mt-4 w-full text-right font-serif">
            A unique ecosystem for sustainable assets<br />that utilizes Blockchain &amp; Artificial<br />Intelligence technologies to advance the Sustainable<br />Development Goals (SDGs) capturing Biodiversity Credits.
          </p>
        </div>
      </div>
    </div>
  );
} 