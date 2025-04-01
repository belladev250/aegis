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

       
 
      </main>
    
 
    </div>
  );
}
