import React from "react";
import award from "./asserts/1.png";
import photo from "./asserts/2.png";

const Content1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
      <div className="md:w-1/2">
        <img className="md:h-[680px] md:ml-7 w-full" src={award} alt="" />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <p className="text-center md:text-left mt-8 md:my-2 text-[15px] font-bold">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
        </p>
        <ul className="list-disc ml-0">
          <li className="mt-2 md:mt-0 font-semibold text-sm">
            C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
          </li>
          <li className="mt-2 md:mt-0 font-semibold text-sm">
            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
          </li>
        </ul>
        <div className="w-full mt-6 md:mt-0">
          <img className="md:h-[480px] w-full" src={photo} alt="" />
        </div>
        <div className="mt-4">
          <p className="md:ml-0 mr-4 md:mr-0 font-semibold text-sm">
            Government of India has awarded the <span className="font-bold">"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content1;
