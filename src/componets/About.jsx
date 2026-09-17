import React from 'react'
import about_banner from '../assets/about_banner.png'
function About() {
    const text_style = {
        fontFamily: "Merriweather",
        fontOpticalSizing: "auto",
    };
    return (
        <>
            {/* About Section */}

            < div >
                <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-6 text-center mt-10">
                    A Legacy of Legal Experience
                </h3>
                <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-8 px-6 md:px-12 mb-10 ">

                    {/* Image - 5 columns */}
                    <div className="w-full md:col-span-5 p-10 sm:p-10">
                        <img
                            src={about_banner}
                            alt="CT Associates"
                            className="w-full rounded-2xl"
                        />
                    </div>

                    {/* Text - 7 columns */}
                    <div id="" className="w-full md:col-span-7 p-4 sm:p-6 scroll-mt-20" style={text_style}>



                        <p className="text-gray-700 leading-8 text-justify mb-5">
                            C.T. Ahammed Kutty is an experienced legal professional with
                            more than three decades of practice as an Advocate and Notary
                            Public. Since beginning his legal practice in 1994, he has
                            developed extensive experience in litigation and legal advisory
                            services.
                        </p>

                        <p className="text-gray-700 leading-8 text-justify mb-8">
                            His professional experience covers a wide range of legal areas,
                            including Writ, Civil, Criminal, Insurance, Co-operative,
                            Environment, University, Energy and Compensation matters. He
                            has also served as a trusted Legal Adviser to banking, financial
                            and government institutions.
                        </p>

                        {/* Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="border-l-4 border-[#C9A227] pl-4">
                                <p className="text-sm text-gray-500">Qualification</p>
                                <p className="font-semibold text-gray-900">B.A., LL.B.</p>
                            </div>

                            <div className="border-l-4 border-[#C9A227] pl-4">
                                <p className="text-sm text-gray-500">Bar Enrollment</p>
                                <p className="font-semibold text-gray-900">20 March 1994</p>
                            </div>

                            <div className="border-l-4 border-[#C9A227] pl-4">
                                <p className="text-sm text-gray-500">Bar Roll No.</p>
                                <p className="font-semibold text-gray-900">K/594/94</p>
                            </div>

                            <div className="border-l-4 border-[#C9A227] pl-4">
                                <p className="text-sm text-gray-500">Notary Practice</p>
                                <p className="font-semibold text-gray-900">19 Years</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div >

        </>

    )
}

export default About