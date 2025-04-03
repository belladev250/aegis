import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";


export default function Home() {
  return (
    <div className="">
      <main className="">   
  <div className="h-[80vh] lg:h-[95vh]  mt-8">
  <Image
    src="/bg.jpeg"
    alt="bg"
    width={700}
    height={700}
    className="w-full h-full object-cover"
  />
</div>

<div className="absolute top-32 lg:top-52 grid place-items-center space-y-8 lg:space-y-10">

  <div className="font-bold text-white text-3xl">
    <p>Rwanda: Context and Comparison </p>
  </div>

   <div className="text-white w-full lg:w-10/12 text-center text-lg">
  <p>Since 2014, the Aegis Trust with the financial support from the UK Department for International Development (DfID) and Swedish International Development Cooperation Agency (Sida) has provided competitive research grants to Rwandan researchers working on various topics examining Rwanda's past, present and future from various disciplinary perspectives that concern peacebuilding.</p>
  </div>

  <div className="flex space-x-10 lg:space-x-20 text-sm lg:text-lg">
    <button className="bg-maroon text-white p-3 rounded-md">Submit Your Research </button>
    <button className="bg-white text-maroon p-3 rounded-md">Join Our Community</button>
  </div>
  
</div>

{/* The second section area */}
<div className="p-20 flex w-full space-x-16">

<div className="space-y-6 w-1/2">
  <div className="space-y-4">
    <Image src='/community.png' alt="community" height={500} width={500} className="flex-shrink-0 object-cover"/>

    <div className="space-y-6">
      <p className="text-bold text-3xl text-navy">Aegis Research</p>
      <p>Since 2014, the Aegis Trust with the financial support from the UK Department for International Development (DfID) and Swedish International Development Cooperation Agency (Sida) has provided competitive research grants to Rwandan researchers working on various topics examining Rwanda's past, 
        present and future from various disciplinary perspectives that concern peacebuilding. </p>

       <div className="flex space-x-2 cursor-pointer">
      <p className="text-maroon texl-lg">Learn more </p>
      <IoChevronForward className="text-maroon text-xl"/>
      </div>

    </div>
  </div>

</div>

<div className="w-1/2 space-y-4">

<div className=" flex space-x-10  border -2 border-borderColor p-4 rounded-lg cursor-pointer  ">
  <Image src='/about.png' alt="default" width={80} height={80}/>

  <div className="flex mt-4 space-x-2">
      <p className="text-maroon text-xl"> Aegis Working Papers</p>
      <IoChevronForward className="text-maroon text-3xl "/>
 </div> 

</div>

<div className=" flex space-x-10  border -2 border-borderColor p-4 rounded-lg cursor-pointer  ">
  <Image src='/about.png' alt="default" width={80} height={80}/>

  <div className="flex mt-4 space-x-2">
      <p className="text-maroon text-xl"> Aegis Policy Briefs</p>
      <IoChevronForward className="text-maroon text-3xl "/>
 </div> 

</div>

<div className=" flex space-x-4  border -2 border-borderColor p-4 rounded-lg cursor-pointer  ">
  <Image src='/about.png' alt="default" width={80} height={80}/>

  <div className="flex mt-4 space-x-2">
      <p className="text-maroon text-xl"> RPHE Journal articles and book chapters</p>
      <IoChevronForward className="text-maroon text-3xl "/>
 </div> 

</div>

<div className=" flex space-x-4  border -2 border-borderColor p-4 rounded-lg cursor-pointer  ">
  <Image src='/about.png' alt="default" width={80} height={80}/>

  <div className="flex mt-4 space-x-2">
      <p className="text-maroon text-xl"> RPHE Journal articles and book chapters</p>
      <IoChevronForward className="text-maroon text-3xl "/>
 </div> 

</div>

</div>

</div>

{/* the third section  */}
<div className="p-16 flex w-full space-x-32 ">

  <div className="w-4/5 space-y-6">
  <p className="font-bold text-3xl">News</p>
  <p className="text-lg">This section presents news of activities organized around the Research, 
    Policy and Higher Education (RPHE) programme but also what happens around the world, 
    related to genocide and peacebuilding. The section also presents opportunities including our research consultation campaigns, 
    call for research proposals, conferences and research grants</p>

    <button className="p-4 border border-maroon text-maroon rounded-lg">See more articles</button>
  </div>

  <div className="w-1/2 object-cover">
  <Image src='/consultation.png' alt="default" width={400} height={400}/>

  </div>

</div>


 </main>
    
 
    </div>
  );
}
