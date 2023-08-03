"use client";

import Image from "next/image";
import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex lg:flex-row flex-col xs:gap-0 lg:gap-3 relative z-0 max-w-[1440px] mx-auto pb-5">
      <div className="lg:flex-[1.5] flex justify-center md:justify-start items-start w-full xl:h-screen" id="hero image">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/hero.jpg" alt="hero" fill className="object-contain" priority/>
        </div>
      </div>
      <div className="flex-1 sm:pt-0 px-5 lg:pt-36 margin-x" id="hero Descriptions">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
        Finden Sie <br/>
        Ihr Traumhaus Hier!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
        Entdecken Sie unsere umfangreichen Angebote an wunderschönen Immobilien.
        </p>

        <div className="flex justify-center"> 
          <CustomButton
            title="Entdecken"
            containerStyles="bg-red-500 text-white rounded-full mt-10  hover:bg-red-600 pop-up"
            handleClick={handleScroll}
          />
        </div> 
      </div>
    </div>
  );
};

export default Hero;
