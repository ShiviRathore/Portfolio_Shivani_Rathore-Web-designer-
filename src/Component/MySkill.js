import React from 'react'

function MySkill() {
    const codingSkill = [
        { name: "Html", percentage: "90%" },
        { name: "CSS", percentage: "80%" },
        { name: "JavaScript", percentage: "60%" },
        { name: "JQuery", percentage: "70%" },
        { name: "UI & UX", percentage: "50%" },
    ]
    const ProfessionalSkills = [
        { technology: "Bootstrap", number: "80%" },
        { technology: "Tailwind Css", number: "80%"},
        { technology: "Sass Css", number: "60%" },
        { technology: "React", number: "60%" },
        { technology: "Material Ui", number: "60%"},
    ]
    return (
        <div>
            <div className='bg-[#071C2C] py-[100px]' id='skill'>
                <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
                    <h3 className='text-white mb-12 text-4xl font-bold' data-aos="flip-right">My <span className='text-sky-500'>Skill</span></h3>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className=''>
                            <h4 className='text-white text-xl font-bold mb-5'data-aos="fade-left">Coding Skills</h4>
                            <div className='text-white border-4 border-[#0488CC] rounded-xl p-6'>
                                {
                                    codingSkill.map((value, index) => {
                                        return (
                                            <>
                                                <div className='flex justify-between'>
                                                    <span className='text-sm mb-2'>{value.name}</span>
                                                    <span className='text-sm mb-2'>{value.percentage}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mb-5">
                                                    <div className="bg-sky-500 h-2 rounded-full" style={{ width: value.percentage }}></div>
                                                </div> 
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className='text-white text-xl font-bold mb-5' data-aos="fade-right">Professional Skills</h4>
                            <div className='text-white border-4 border-[#0488CC] rounded-xl p-6'>
                                {
                                    ProfessionalSkills.map((skill, index) => {
                                        return (
                                            <>
                                                <div className='flex justify-between'>
                                                    <span className='text-sm mb-2 text-white'>{skill.technology}</span>
                                                    <span className='text-sm mb-2 text-white'>{skill.number}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mb-5">
                                                    <div className="bg-sky-500 h-2 rounded-full" style={{ width: skill.number }}></div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkill;
