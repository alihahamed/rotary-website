import Achievements from '../components/achievements';
import pucStaff from '../assets/puc_staff.webp';
import nonTeaching from '../assets/non_teaching.webp';
import TopAnnouncement from '../components/TopAnnouncement';

function WhyChooseUsPage() {
    return(
        <div className=" w-full bg-white relative">
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
                    backgroundSize: "40px 40px",
                }}
            />
            <TopAnnouncement />
            <section className="py-12 md:py-16 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                            Why Choose Rotary PU College
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                            Discover what makes us the preferred choice for pre-university education
                        </p>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-12 md:mb-16">
                        <Achievements />
                    </div>

                    {/* Student Toppers Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Our Top Performers
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                            <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                                Celebrating academic excellence and outstanding achievements
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-merri">
                                    Student Toppers Gallery
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-6">
                                    Our students consistently achieve outstanding results in board examinations,
                                    securing admissions to premier institutions across India and abroad.
                                </p>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                    <p className="text-yellow-800 font-nuno text-sm md:text-base">
                                        <strong>Note:</strong> College toppers' posters will be displayed here once received from the administration.
                                        This section will showcase our brightest minds and their remarkable achievements.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                    {/* Placeholder cards for toppers */}
                                    {[1, 2, 3].map((index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                                            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2 font-merri">
                                                Topper {index}
                                            </h4>
                                            <p className="text-gray-600 font-nuno text-sm">
                                                Academic Year 2024-25
                                            </p>
                                            <p className="text-blue-600 font-nuno text-sm mt-1">
                                                Coming Soon
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Value Propositions */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                What Sets Us Apart
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Legacy & Heritage */}
                            <div className="bg-gradient-to-r from-white to-red-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri">
                                        Rich Legacy
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                    Building on 45+ years of educational excellence from Rotary Central School,
                                    established in 1980 as one of Moodbidri's oldest institutions.
                                </p>
                            </div>

                            {/* Holistic Development */}
                            <div className="bg-gradient-to-r from-white to-yellow-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri">
                                        Holistic Development
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                    Beyond academics, we nurture leadership, creativity, and social responsibility
                                    through sports, cultural activities, and community service.
                                </p>
                            </div>

                            {/* Modern Facilities */}
                            <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri">
                                        Modern Infrastructure
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                    State-of-the-art science laboratories, well-equipped library, sports facilities,
                                    and smart classrooms for enhanced learning experiences.
                                </p>
                            </div>

                            {/* Experienced Faculty */}
                            <div className="bg-gradient-to-r from-white to-red-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri">
                                        Expert Faculty
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                    Dedicated and qualified teachers who provide personalized attention,
                                    mentorship, and guidance to help every student succeed.
                                </p>
                            </div>

                            {/* Individual Attention */}
                            <div className="bg-gradient-to-r from-white to-yellow-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri">
                                        Personal Care
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                    Small class sizes ensure individual attention, regular progress monitoring,
                                    and personalized support for each student's growth journey.
                                </p>
                            </div>

                            {/* Career Guidance */}
                            <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-merri">
                                        Career Support
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base">
                                    Comprehensive career counseling, entrance exam preparation,
                                    and university admission guidance to shape successful futures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Faculty & Staff Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Our Faculty & Staff
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                            <p className="text-lg md:text-xl text-gray-600 mt-4 font-nuno">
                                Meet the dedicated professionals who make Rotary PU College exceptional
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Faculty Members */}
                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                                    Faculty Members
                                </h3>
                                <img
                                    src={pucStaff}
                                    alt="Rotary PU College Faculty Members"
                                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                    loading="lazy"
                                />
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                    Our experienced and qualified faculty members are committed to providing
                                    quality education and nurturing the potential of every student.
                                </p>
                            </div>

                            {/* Staff Members */}
                            <div className="text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri mb-4">
                                    Support Staff
                                </h3>
                                <img
                                    src={nonTeaching}
                                    alt="Rotary PU College Support Staff & Workers"
                                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                                    loading="lazy"
                                />
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                    Our dedicated support staff works tirelessly behind the scenes to ensure
                                    a smooth and conducive learning environment for all students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUsPage
