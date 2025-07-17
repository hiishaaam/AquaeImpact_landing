import { Button } from "@/components/ui/button";
import React from "react";

const navigationItems = [
    { label: "Home", active: true },
    { label: "Who we are", active: false },
    { label: "What we do", active: false },
    { label: "Resources", active: false },
];

const NavbarSubsection = () => {
    const navStyle = {
        backgroundImage: "url('/image.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <nav 
            style={navStyle} 
            className="w-full h-[100px] flex items-center justify-between px-[30px] overflow-hidden"
        >

            <div className="flex items-center gap-3">
                <img 
                    src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
                    alt="AQUAE Impact Logo" 
                    className="w-12 h-12"
                />
                <div className="[font-family:'Russo_One-Regular',Helvetica] font-normal text-[#47bdaa] text-[28px] tracking-[0] leading-[42px]">
                    AQUAIMPACT
                </div>
            </div>

            <div className="flex items-center gap-[49px]">
                {navigationItems.map((item, index) => (
                    <div
                        key={index}
                        className={`[font-family:'Work_Sans-Medium',Helvetica] font-medium text-3xl tracking-[-1.50px] leading-[75px] whitespace-nowrap cursor-pointer ${
                            item.active ? "text-[#147866]" : "text-white"
                        }`}
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            <div className="flex items-center">
                <Button className="w-[225px] h-[72px] bg-[#00572b] border border-solid border-[#595858] rounded-[9px] shadow-[0px_4px_4px_#00000040] [font-family:'Work_Sans-Medium',Helvetica] font-medium text-3xl tracking-[-0.60px] text-white hover:bg-[#00572b]/90 h-auto">
                    Green Credits
                </Button>
            </div>
        </nav>
    );
};

export default NavbarSubsection;