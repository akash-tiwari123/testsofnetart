import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <p className=" text-center my-4 text-[15px] font-bold">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="text-center text-[15px] my-5">
        CHEMICALS & PROCESS
        <span className="border-r border-solid border-red-500 mx-1"> </span>
        POWER
        <span className="border-r border-solid border-red-500 mx-1"></span>
        WATER & WASTE WATER
        <span className="border-r border-solid border-red-500 mx-1"></span>
        OILS & GAS
        <span className="border-r border-solid border-red-500 mx-1"></span>
        PHARMA
        <span className="border-r border-solid border-red-500 mx-1"></span>
        SUGARS & DISTILLERIES
        <span className="border-r border-solid border-red-500 mx-1"></span>
        PAPER & PULP
        <span className="border-r border-solid border-red-500 mx-1"> </span>
        MARINE & DEFENCE
        <span className="border-r border-solid border-red-500 mx-1"></span>
        METAL & MINING
        <span className="border-r border-solid border-red-500 mx-1"> </span>FOOD
        & BEVERAGE
        <span className="border-r border-solid border-red-500 mx-1"></span>
        PETROCHEMICAL & REFINERIES
        <span className="border-r border-solid border-red-500 mx-1"></span>
        SOLAR
        <span className="border-r border-solid border-red-500 mx-1"> </span>
        BUILDING
        <span className="border-r border-solid border-red-500 mx-1"></span>
        HVAC<span className="border-r border-solid border-red-500 mx-1"> </span>
        FIRE FIGHTING
        <span className="border-r border-solid border-red-500 mx-1"></span>
        AGRICULTURE & RESIDENTIAL
      </p>

      <div className="py-10 w-[99%] my-2 bg-red-500 mx-auto  md:flex md:flex-row md:items-center flex justify-around flex-col items-center  ">
        <div className="flex items-center md:flex md:justify-center mb-2">
          <FaWhatsapp size={25} />
          <span className="ml-2 mt-4">Toll Free 1800 2000 1234</span>
        </div>
        <div className="flex items-center mb-2">
          <FaFacebook size={25} />
          <span className="ml-2  mt-4">www.facebook.com/cripumps</span>
        </div>

        <div className="flex items-center ">
          <IoBasketballOutline size={25} />
          <span className="ml-2  mt-4">www.crigroups.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
