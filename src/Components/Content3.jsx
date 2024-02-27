import React from 'react';
import part from './asserts/3.png';

const Content3 = () => {
  return (
    <div>
      <p className='text-[14px] m-5 font-semibold'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </p>
      <img className='w-full md:w-4/5 mx-auto h-auto md:h-[390px] object-cover' src={part} alt="" />
      <p className='text-center my-4'>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
      </p>
      <div className='my-4 h-[2px]  mx-auto w-[95%] bg-orange-600'></div>
    </div>
  );
};

export default Content3;
