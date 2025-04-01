import Image from "next/image";

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


 </main>
    
 
    </div>
  );
}
