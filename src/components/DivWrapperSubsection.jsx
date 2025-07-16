import React from "react";

const DivWrapperSubsection = () => {
  const sdgIcons = [
    {
      src: "/img1.jpeg",
      alt: "SDG Icon 1",
      className: "w-[125px] h-[111px] top-[115px] left-[916px]",
    },
    {
      src: "/img2.jpeg",
      alt: "SDG Icon 2",
      className: "w-[122px] h-[110px] top-[243px] left-[778px]",
    },
    {
      src: "/img3.jpeg",
      alt: "SDG Icon 3",
      className: "w-[123px] h-[110px] top-[243px] left-[1060px]",
    },
    {
      src: "/img4.jpeg",
      alt: "SDG Icon 4",
      className: "w-[124px] h-[110px] top-[243px] left-[1205px]",
    },
    {
      src: "/img5.jpeg",
      alt: "SDG Icon 5",
      className: "w-[140px] h-[125px] top-[363px] left-[912px]",
    },
    {
      src: "/img6.jpeg",
      alt: "SDG Icon 6",
      className: "w-[124px] h-[109px] top-[372px] left-[1205px]",
    },
    {
      src: "/img7.jpeg",
      alt: "SDG Icon 7",
      className: "w-[122px] h-[118px] top-[497px] left-[778px]",
    },
    {
      src: "/img8.jpeg",
      alt: "SDG Icon 8",
      className: "w-[124px] h-28 top-[497px] left-[1062px]",
    },
    {
      src: "/img9.jpeg",
      alt: "SDG Icon 9",
      className: "w-[131px] h-[115px] top-[621px] left-[912px]",
    },
    {
      src: "/img10.jpeg",
      alt: "SDG Icon 10",
      className: "w-[124px] h-[111px] top-[625px] left-[1062px]",
    },
    {
      src: "/img11.jpeg",
      alt: "SDG Icon 11",
      className: "w-[122px] h-[111px] top-[751px] left-[778px]",
    },
    {
      src: "/img12.jpeg",
      alt: "SDG Icon 12",
      className: "w-[127px] h-[109px] top-[753px] left-[916px]",
    },
    {
      src: "/img13.jpeg",
      alt: " SDG Icon 13",
      className: "w-[124px] h-[111px] top-[753px] left-[1205px]",
    },
    {
      src: "/img14.jpeg",
      alt: "SDG Icon 14",
      className: "w-[122px] h-[111px] top-[880px] left-[778px]",
    },
    {
      src: "/img15.jpeg",
      alt: "SDG Icon 15",
      className: "w-[124px] h-[111px] top-[880px] left-[1062px]",
    },
    {
      src: "/img16.jpeg",
      alt: "SDG Icon 16",
      className: "w-[124px] h-[111px] top-[1001px] left-[916px]",
    },
    {
      src: "/img17.jpeg",
      alt: "SDG Icon 17",
      className: "w-[125px] h-[111px] top-[1001px] left-[1205px]",
    },
  ];

  return (
    <section className="h-[1169px] top-[1140px] bg-blend-color-burn bg-[url(/desktop-22.png)] bg-cover bg-[50%_50%] absolute w-[1440px] left-0">
      <h2 className="absolute w-[648px] top-[88px] left-[111px] [font-family:'Yeseva_One-Regular',Helvetica] font-normal text-[#195c65] text-[63px] tracking-[0] leading-[normal]">
        ALIGNING OUR MISSION WITH UNSDG
      </h2>

      <p className="absolute w-[548px] top-[349px] left-[111px] [font-family:'Instrument_Sans-Regular',Helvetica] font-normal text-black text-[25px] tracking-[-0.50px] leading-[32.5px]">
        At AQUAE Impact, we provide innovative solutions to help <br />
        industrial businesses navigate the climate and environmental <br />
        pressures they face. We believe that adopting <br />
        comprehensive strategies aligned with the Sustainable <br />
        Development Goals (SDGs) is essential for sustainable growth. <br />
        <br />
        By integrating SDGs, companies can effectively mitigate <br />
        environmental and social risks, <br />
        while driving sustainable development on a global scale. <br />
        Together, we can foster a future where business <br />
        success is synonymous with environmental stewardship.
      </p>

      {sdgIcons.map((icon, index) => (
        <img
          key={`sdg-icon-${index}`}
          className={`absolute ${icon.className} object-cover`}
          alt={icon.alt}
          src={icon.src}
        />
      ))}
    </section>
  );
};

export default DivWrapperSubsection;
