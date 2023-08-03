"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { Property } from "@types";
import { propertyTypesResult } from "@constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface PropCardProps {
  property: Property;
}

const PropCard = ({ property }: PropCardProps) => {
  const handleScroll = () => {
    const nextSection = document.getElementById("contact");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex flex-col p-3 m-3 justify-start items-start text-black-100 bg-white shadow-md hover:shadow-xl rounded-2xl border border-blue-400 group pop-up w-[325px]">
      <div className="relative w-full h-40 my-3 justify-start">
          <Image
            src={property.primary_photo?.href || "/defaultHouse.jpg"}
            alt="Property Image"
            fill
            priority
            style={{objectFit:"contain"}}
          />
      </div>

      <div className="grid grid-cols-2 w-full text-[16px] gap-x-8">

        <div className="flex items-start flex-row justify-start p-2 gap-2">
          <Image src="/house.png" width={20} height={20} alt="propertyType" />
            {propertyTypesResult[property.description.type as keyof typeof propertyTypesResult]}
        </div>
        
        <div className="flex items-start flex-row justify-start p-2 gap-2">
          <Image src="/bed.png" width={20} height={20} alt="bedrooms" />
          {property.description.beds || "0"}
        </div>

        <div className="flex items-start flex-row justify-start p-2 gap-2 ">
          <Image src="/size.png" width={20} height={20} alt="squareFootage" />
          {property.description.sqft || "0"}
        </div>        

        <div className="flex items-start flex-row justify-start p-2 gap-2">
          <Image src="/bath.png" width={20} height={20} alt="bathrooms" />
          {property.description.baths || "0"}
        </div>

        

        <div className="flex items-start flex-row justify-start p-2 gap-2">
          <Image src="/garage.png" width={20} height={20} alt="garage" />
          {property.description.garage || "0"}
        </div>
        
        <div className="flex items-start flex-row justify-start p-2 gap-2">
            <Image src="/garage.png" width={20} height={20} alt="garage" />
            {property.description.year_built || "0"}
          </div>
          
      </div>
      <div className="flex items-start flex-row justify-start p-2 gap-2">
          <Image src="/location.png" width={20} height={20} alt="location" />
          {property.location.address.line}, <br />
          {property.location.address.postal_code}{" "}
          {property.location.address.state}
        </div>
      <div className="w-full grid grid-cols-2 justify-items-center items-center mt-auto" id="price-and-more-button">
        <p className="flex text-[32px] leading-[38px] font-extrabold ml-1">
          {property.list_price}
          <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        </p>
        <div className="flex justify-center flex-1 h-[40px]">
          <CustomButton
            title="Besichtigung"
            containerStyles="bg-blue-400 text-white rounded-lg hover:bg-blue-500 pop-up w-full mx-4"
            handleClick={handleScroll}
          />
        </div>
      </div>

      
    </div>
  );
};

export default PropCard;