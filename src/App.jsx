import React from "react";
import NavbarSubsection from "@/components/NavbarSubsection";
import HeroSubsection from "@/components/HeroSubsection";
import DesktopSubsection from "@/components/DesktopSubsection";
import DivWrapperSubsection from "@/components/DivWrapperSubsection";
import OverlapWrapperSubsection from "@/components/OverlapWrapperSubsection"; // Add this import
import DesktopWrapperSubsection from "@/components/DesktopWrapperSubsection";
import Frame from "@/components/Frame";

export default function App() {
  return (
    <>
      <NavbarSubsection /> {/* Add your navbar at the top */}
      <HeroSubsection />
      <DivWrapperSubsection />
      <div style={{ height: '1169px' }} />
      <DesktopSubsection />
      <OverlapWrapperSubsection /> {/* Render your new component */}
      <Frame />
      <DesktopWrapperSubsection />
    </>
  );
}
