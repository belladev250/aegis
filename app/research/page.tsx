import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

export default function Research() {
    return (
        <div className="">
            <main className="relative">
                {/* Full-width background image */}
                <div className="h-[80vh] lg:h-[95vh] mt-8">
                    <Image
                        src="/about.png"
                        alt="bg"
                        width={700}
                        height={700}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Centered content with transparent black background - NOW WIDER */}
                <div className="absolute top-32 lg:top-52 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
                    <div className="bg-black/70 p-8 lg:p-10 rounded-lg grid space-y-8 lg:space-y-10 text-center mx-auto w-11/12 lg:w-10/12">
                        <div className="text-white text-md">
                            <p>Since 2014, the Aegis Trust – with the financial support from the UK Department for International Development (DfID)
                                and Swedish International Development Cooperation Agency (Sida) – has provided competitive research grants to Rwandan
                                researchers working on various topics examining Rwanda's past, present and future from various disciplinary perspectives
                                that concern peacebuilding. Commissioned Working Papers and Policy Briefs cover topics within the following categories:
                                memory, identity and narrative, reconciliation and social cohesion, transitional justice, trauma and
                                psychological/psycho-social issues, gender dimensions of post-genocide recovery, post-genocide economic development,
                                education, media, and peacebuilding.</p>
                        </div>

                        <div className="text-md">
                            <button className="bg-maroon text-white px-8 py-3 rounded-md hover:bg-maroon/90 transition-colors">
                                Submit Your Research
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <div className="mt-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-800 leading-relaxed space-y-4">
                <h1 className='text-md sm:text-lg md:text-xl font-bold mb-4 text-gray-900'>AEGIS Research</h1>
                <p>After years of involvement in peacebuilding work in Rwanda, particularly in the field of memorialization, the Aegis Trust
                    established a Research Policy and Higher Education (RPHE) programme out of a felt necessity to inform practice (including
                    the organization’s own practice) and policy-making in Rwanda with high quality, locally generated, scientific evidence.
                    Involvement in research is intended to provide a certain visibility and voice to Rwandan researchers in the global sphere.
                    It is premised on an awareness of the limited visibility, if not relative absence, of Rwandan scholars in relevant, high
                    profile global academic publications or other settings where Rwanda and/or peacebuilding are debated.</p>
                <p>It is a fact that Rwanda’s social, economic and political experiment in reconstructing a broken society continues to
                    generate an ever-growing literature analyzing the various facets of this journey. Post-genocide politics, legal processes,
                    social and economic policies are constantly subjected to scrutiny by researchers from around the world. In essence,
                    “Rwanda studies” has become a prolific, multidisciplinary field of study. The field suffers from two major flaws: it
                    remains quite polarized and dominated by non-Rwandan scholars. Nearly every aspect of Rwanda’s history and politics –
                    more specifically, the genocide and post-genocide reconstruction – has been a source of contentious reading of the country’s
                    past, present and future.</p>
                <p>By enabling Rwandan researchers to produce works that can be published in reputable journals and presented before any relevant
                    international setting, the Aegis Trust pursues its goals of fostering a dynamic research environment and promoting evidence-based
                    policy-making and practice in Rwanda. Such an ambitious mission can only be truly achieved if research is guided by the principles
                    of academic rigour, independence and integrity. In pursuit of these key values, the Aegis Trust’s funding to specific research
                    projects covers research costs, an advisory service by established Rwanda/Africa scholars and, academic workshops/meetings where
                    research materials are discussed at various stages. The full package is intended to ensure that the research outcomes conform to
                    the highest standards of academic research and can therefore be published in renowned international journals</p>
            </div>
        </div>
    );
}