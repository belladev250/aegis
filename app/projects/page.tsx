import Image from 'next/image';
import Link from 'next/link';

const ResearchProjects = () => {
    return (
        <div className='absolute inset-0'>
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    <div className='w-full lg:w-2/4 mb-8 space-y-4'>
                        <Link href="/research" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
                            ← AEGIS Research
                        </Link>
                        <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Research Projects</h1>
                        <p>Our research projects are aimed at answering diverse research questions giving the opportunity to study an area of interest in depth.
                            Under the Research and Engagement programme, different projects are run and administrated with the purpose to inform action, gather
                            evidence for theories, and contribute to develop knowledge on peace building and peace education.</p>
                        <Link href="" className='inline-block bg-maroon text-white px-4 py-2 lg:p-3 rounded-md hover:bg-maroon-dark transition-colors'>
                            Submit Research
                        </Link>
                    </div>
                    <div className='w-full lg:w-2/4 lg:mt-0 flex justify-center'>
                        <Image src='/projects.jpg' alt='Consultation Image' height={500} width={600} className='h-72 mt-8 w-full md:w-[70%] rounded-lg' priority />
                    </div>
                </div>

                {/* Section two */}
                <div className="container mx-auto flex flex-col lg:flex-row px-4 space-x-8 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    {/* First Research Project */}
                    <div className="rounded-lg mb-8 w-1/2 border border-lg">
                        <div className="md:w-full">
                            <Image
                                src="/project-1.png" // Replace with your actual image path
                                alt="Peace education in Rwandan schools"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Building Cultures Of Peace in Rwandan Schools
                            </h3>
                            <div>
                                <span className="font-semibold">Funder:</span> Global Research Fund-UK
                            </div>
                            <div>
                                <span className="font-semibold">Period:</span> January 2020 – March 2022
                            </div>
                        </div>
                    </div>


                    {/* Second Research Project */}
                    <div className="rounded-lg mb-8 w-1/2 border border-lg">
                        <div className="md:w-full">
                            <Image
                                src="/project-2.jpg" // Replace with your actual image path
                                alt="Peace education in Rwandan schools"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Research-Led Peace Education As Crisis Prevention In Central Africa
                            </h3>
                            <div>
                                <span className="font-semibold">Funder:</span> British Academy Funded Project
                            </div>
                            <div>
                                <span className="font-semibold">Period:</span> March 2020 – March 2022
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ResearchProjects;