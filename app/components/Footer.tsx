import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

const Footer = () => {
  return (
    
    <div className="sticky bottom-0 w-full h-[60vh] bg-maroon z-0 p-16 text-white flex justify-between space-x-8">
        <div className="space-y-4">
         <p className='text-xl font-bold'>About Us</p>
         <p className='text-md'>The Genocide Research Hub aims to contribute to building a 
            knowledge society around genocide prevention and peacebuilding
             policy and practice in Rwanda.</p>

             <div className="flex space-x-2 cursor-pointer">
      <p className=" texl-lg font-bold">Read more </p>
      <IoChevronForward className=" text-2xl"/>
      </div>
        </div>

        <div className="space-y-4">
            <p className='text-xl font-bold'>Latest News </p>

            <p className='text-md'>How Memory of Genocide Builds Peace
          Navigating Intergenerational Legacies: Insights from Aegis Trust's Research for Policy Conference
         Aegis strengthens Rwandan research capacity</p>

             <div className="flex space-x-2 cursor-pointer">
      <p className=" texl-lg font-bold">Read more </p>
      <IoChevronForward className=" text-2xl"/>
      </div>
            

        </div>

        <div className=" space-y-4">

            <p className='text-xl font-bold'>Latest Tweets</p>

<p className='text-md'>13 DAYS REMAINING to send in your application 
    for a Research Grant. If you are a Rwandan Researcher interested in writing about Peace-building,
     Genocide studies or Peace Education, Do not miss this</p>

 <div className="flex space-x-2 cursor-pointer">
<p className=" texl-lg font-bold">Read more </p>
<IoChevronForward className=" text-2xl"/>
</div>


        </div>


        <div className="">

            <p className='text-xl font-bold'>Contact Us</p>

        </div>

.
    <hr className='w-full border-borderColor' />
   
  </div>
  
  );
}

export default Footer;
