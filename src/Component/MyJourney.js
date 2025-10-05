import React from 'react'

function MyJourney() {
    return (
        <div>
            <section className="bg-[#081B29] text-white py-12" id='journey'>
                <div className="container max-w-6xl mx-auto xl:px-16 px-8">
                    <h2 className="text-center text-4xl font-bold mb-12" data-aos="fade-up">
                        My <span className="text-sky-500">Journey</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6" data-aos="fade-right">Education</h3>
                            <div className="relative border-l-2 border-[#0488CC] space-y-8 pl-6" data-aos="fade-right" data-aos-delay="500" >
                                 <div className="relative bg-slate-900 p-4 rounded-lg border-4 border-[#0488CC]">
                                    <span className="absolute -left-[37px] top-4 w-4 h-4 bg-sky-500 rounded-full"></span>
                                    <h4 className="font-semibold">Web Designer Certificate</h4>
                                    <p className="text-sm text-gray-400">[2022]</p>
                                    <p className="text-gray-300">Infoviaan Technology Indore</p>
                                </div>
                                <div className="relative bg-slate-900 p-4 rounded-lg border-4 border-[#0488CC]">
                                    <span className="absolute -left-[37px] top-4 w-4 h-4 bg-sky-500 rounded-full"></span>
                                    <h4 className="font-semibold">MCA (Master of Computer Application)</h4>
                                    <p className="text-sm text-gray-400">[2020-2022]</p>
                                    <p className="text-gray-300">RGPV University Bhopal</p>
                                </div>
                                <div className="relative bg-slate-900 p-4 rounded-lg border-4 border-[#0488CC]">
                                    <span className="absolute -left-[37px] top-4 w-4 h-4 bg-sky-500 rounded-full"></span>
                                    <h4 className="font-semibold">BSC (Bachelor of Computer Science)</h4>
                                    <p className="text-sm text-gray-400">[2017-2020]</p>
                                    <p className="text-gray-300">Barkatullah University Bhopal</p>
                                </div>
                               
                            </div>
                        </div>
                        {/* Experience */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6" data-aos="fade-left">Experience</h3>
                            <div className="relative border-l-2  border-[#0488CC] space-y-8 pl-6" data-aos="fade-left" data-aos-delay="500" >
                                <div className="relative bg-slate-900 p-4 rounded-lg border-4 border-[#0488CC]">
                                    <span className="absolute -left-[37px] top-4 w-4 h-4 bg-sky-500 rounded-full"></span>
                                    <h4 className="font-semibold">BestPeers InfoSystem Indore</h4>
                                    <p className="text-sm text-gray-400">[Journey 2025 - Present]</p>
                                    <p className="text-gray-300">Web Designer</p>
                                </div>
                                <div className="relative bg-slate-900 p-4 rounded-lg border-4 border-[#0488CC]">
                                    <span className="absolute -left-[37px] top-4 w-4 h-4 bg-sky-500 rounded-full"></span>
                                    <h4 className="font-semibold">CloudWapp Technology Indore</h4>
                                    <p className="text-sm text-gray-400">[Aug 2024 - Dec 2024]</p>
                                    <p className="text-gray-300">Web Designer</p>
                                </div>
                                <div className="relative bg-slate-900 p-4 rounded-lg border-4 border-[#0488CC]">
                                    <span className="absolute -left-[37px] top-4 w-4 h-4 bg-sky-500 rounded-full"></span>
                                    <h4 className="font-semibold">Infosparkles Technology Indore</h4>
                                    <p className="text-sm text-gray-400">[May 2023 - Aug 2024]</p>
                                    <p className="text-gray-300">Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MyJourney;
