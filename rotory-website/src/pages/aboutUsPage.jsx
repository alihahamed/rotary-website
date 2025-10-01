import principalImg from '../assets/principal.webp';
import TopAnnouncement from '../components/TopAnnouncement';
import { useEffect } from 'react';

function AboutUsPage() {


    useEffect(() => {
            
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        }, []);

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
            <TopAnnouncement  />
            <section className="py-12 md:py-16 relative z-10 " id='aboutUs'>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                            Principal's Message
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                    </div>

                    <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8">
                        <div className="float-left mr-9 mb-3">
                            <img
                                src={principalImg}
                                alt="Principal Dr. Rajesh Kumar"
                                className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-merri">
                            Ravi Kumar
                        </h3>
                        <p className="text-lg text-blue-600 mb-6 font-nuno">
                            Principal, Rotary Pre-University College
                        </p>
                        <div className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                            <p className="mb-4">
                                Dear Students, Parents, and Esteemed Colleagues,
                            </p>
                            <p className="mb-4">
                                It is my great pleasure to welcome you to Rotary Pre-University College, an institution dedicated to nurturing young minds and shaping future leaders. For over two decades, our college has been a beacon of academic excellence and holistic development in the heart of our community.
                            </p>
                            <p className="mb-4">
                                At Rotary PU College, we believe that education goes beyond textbooks and examinations. We strive to create an environment where students not only excel academically but also develop strong character, leadership skills, and a sense of social responsibility. Our comprehensive curriculum, experienced faculty, and state-of-the-art facilities are designed to prepare students for the challenges of higher education and life beyond.
                            </p>
                            <p className="mb-4">
                                We are committed to fostering a culture of innovation, critical thinking, and creativity. Through various extracurricular activities, sports, cultural events, and community service initiatives, we ensure that our students receive a well-rounded education that prepares them to become responsible global citizens.
                            </p>
                            <p className="mb-4">
                                I invite you to explore our campus, meet our faculty, and experience the vibrant learning atmosphere that makes Rotary PU College a preferred destination for pre-university education. Together, let us embark on a journey of discovery, growth, and achievement.
                            </p>
                            <div className="clear-both mt-6">
                                <p className="text-gray-600 font-semibold font-nuno">
                                    Warm regards,<br />
                                    Ravi Kumar
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our History Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Our History
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8">
                            <div className="max-w-4xl mx-auto">
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-8">
                                    Rotary Pre-University College traces its roots to the esteemed Rotary Central School, established in 1980 as one of the oldest educational institutions in Moodbidri. Building on this rich legacy of educational excellence, Rotary PU College was founded in 2015 to provide comprehensive pre-university education that prepares students for higher education and professional careers.
                                </p>

                                {/* Timeline */}
                                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                    <li className="timeline-item">
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 text-blue-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-start mb-10 md:text-end">
                                            <time className="font-mono italic font-nuno text-blue-600">1980</time>
                                            <div className="text-lg font-black font-merri text-blue-800">Rotary Central School Founded</div>
                                            Established as one of Moodbidri's oldest schools, laying the foundation for quality education in the region.
                                        </div>
                                        <hr className="bg-blue-200" />
                                    </li>
                                    <li className="timeline-item">
                                        <hr className="bg-red-200" />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 text-red-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-end md:mb-10">
                                            <time className="font-mono italic font-nuno text-red-600">2015</time>
                                            <div className="text-lg font-black font-merri text-red-800">Rotary PU College Established</div>
                                            Inaugurated with Science and Commerce streams, carrying forward the legacy of educational excellence.
                                        </div>
                                        <hr className="bg-yellow-200" />
                                    </li>
                                    <li className="timeline-item">
                                        <hr className="bg-yellow-200" />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 text-yellow-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-start mb-10 md:text-end">
                                            <time className="font-mono italic font-nuno text-yellow-600">2018</time>
                                            <div className="text-lg font-black font-merri text-yellow-800">Infrastructure Development</div>
                                            Modern science laboratories, well-equipped library, and sports facilities established.
                                        </div>
                                        <hr className="bg-blue-200" />
                                    </li>
                                    <li className="timeline-item">
                                        <hr className="bg-blue-200" />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 text-blue-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-end md:mb-10">
                                            <time className="font-mono italic font-nuno text-blue-600">2020</time>
                                            <div className="text-lg font-black font-merri text-blue-800">Digital Learning Initiative</div>
                                            Adopted online learning platforms and modern teaching methodologies for enhanced education delivery.
                                        </div>
                                        <hr className="bg-red-200" />
                                    </li>
                                    <li className="timeline-item">
                                        <hr className="bg-red-200" />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 text-red-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-start mb-10 md:text-end">
                                            <time className="font-mono italic font-nuno text-red-600">2023</time>
                                            <div className="text-lg font-black font-merri text-red-800">Academic Excellence</div>
                                            Achieved outstanding results in board examinations with students gaining admission to premier institutions.
                                        </div>
                                        <hr className="bg-yellow-200" />
                                    </li>
                                    <li className="timeline-item">
                                        <hr className="bg-yellow-200" />
                                        <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5 text-yellow-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="timeline-end md:mb-10">
                                            <time className="font-mono italic font-nuno text-yellow-600">2025</time>
                                            <div className="text-lg font-black font-merri text-yellow-800">Future of Excellence</div>
                                            Continuing the legacy with innovative programs, advanced facilities, and unwavering commitment to student success.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Vision & Mission Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Vision & Mission
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* Vision */}
                            <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri">
                                        Our Vision
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg">
                                    To be a premier educational institution that empowers students with knowledge, skills, and values to become responsible global citizens and leaders in their chosen fields, fostering innovation and excellence in education.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri">
                                        Our Mission
                                    </h3>
                                </div>
                                <ul className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg space-y-3">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Provide quality education that meets international standards
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Foster holistic development through academic and co-curricular activities
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Promote ethical values, leadership, and social responsibility
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Create an inclusive environment that celebrates diversity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage
