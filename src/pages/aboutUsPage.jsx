import principalImg from '../assets/principal.webp';
import Amarnath from '../assets/amarnath.jpg';
import secretary_rotary from '../assets/secretary_rotary.jpg';
import president_rotary from '../assets/president_rotary.jpg';
import correspondent from '../assets/correspondent.jpg';
import TopAnnouncement from '../components/TopAnnouncement';

import { motion } from 'framer-motion'

function AboutUsPage() {


    

    return(
        <div className=" w-full bg-white relative" id='aboutUs'>
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
            <section className="py-12 md:py-16 relative z-10 " >
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Our Leadership Section */}
                    <div className="text-center mb-8 md:mb-12">
                        <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri" initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}>
                            Our Leadership
                        </motion.h2>
                        <motion.div className="w-24 h-1 bg-blue-600 mx-auto mt-4" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}></motion.div>
                    </div>

                    <motion.div
                        className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8 mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* Founder */}
                            <div>
                                <div className="float-left mr-9 mb-3">
                                    <motion.img
                                        src={Amarnath}
                                        alt="Rtn. K. Amaranath Shetty - Founder"
                                        className="w-48 h-48 md:w-64 md:h-72 object-cover rounded-lg shadow-lg border-4 border-orange-300"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-merri">
                                       Late Rtn. K. Amaranath Shetty
                                        <p className='text-sm mt-2'>(Ex-Minister, Govt. Of Karnataka)</p>
                                    </h3>
                                    <p className=" text-sm md:text-lg text-red-600 mb-4 font-nuno font-bold ">
                                        Founder President ~ Rotary Education Society
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <p className="mb-4">
                                        As the visionary founder of Rotary PU College, Rtn. K. Amaranath Shetty has dedicated his life to educational excellence and community development.
                                    </p>
                                    <p>
                                    </p>
                                </motion.div>
                            </div>

                            {/* Management Board */}
                            <div>
                                <h3 className="text-2xl md:text-3xl text-center font-bold text-gray-800 mb-6 font-merri">
                                    Management Board
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                    >
                                        <img
                                            src={secretary_rotary}
                                            alt="Rtn. Anantha Krishna Rao - Secretary"
                                            className="w-24 h-24 md:w-32 md:h-38 object-cover rounded-lg shadow-lg mx-auto mb-3"
                                        />
                                        <h4 className="text-lg font-semibold text-gray-800 font-merri">Rtn. Anantha Krishna Rao</h4>
                                        <p className="text-red-600 font-nuno font-semibold">Secretary</p>
                                    </motion.div>
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        <img
                                            src={president_rotary}
                                            alt="Rtn. Naryan - President"
                                            className="w-24 h-24 md:w-32 md:h-38 object-cover rounded-lg shadow-lg mx-auto mb-3"
                                        />
                                        <h4 className="text-lg font-semibold text-gray-800 font-merri">Rtn. Naryan P.M</h4>
                                        <p className="text-red-600 font-nuno font-semibold">President</p>
                                    </motion.div>
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                    >
                                        <img
                                            src={correspondent}
                                            alt="Rtn. Pinto - Correspondent"
                                            className="w-24 h-24 md:w-32 md:h-38 object-cover rounded-lg shadow-lg mx-auto mb-3"
                                        />
                                        <h4 className="text-lg font-semibold text-gray-800 font-merri">Rtn. J W Pinto</h4>
                                        <p className="text-red-600 font-nuno font-semibold">Correspondent</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="text-center mb-8 md:mb-12">
                        <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri" initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}>
                            Principal's Message
                        </motion.h2>
                        <motion.div className="w-24 h-1 bg-blue-600 mx-auto mt-4" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}></motion.div>
                    </div>

                    <motion.div
                        className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="float-left mr-9 mb-3">
                            <motion.img
                                src={principalImg}
                                alt="Principal Dr. Rajesh Kumar"
                                className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-merri">
                                Ravi Kumar
                            </h3>
                            <p className="text-lg text-blue-600 mb-6 font-nuno">
                                Principal, Rotary Pre-University College
                            </p>
                        </motion.div>
                        <motion.div
                            className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <p className="mb-4">
                                Dear Students, Parents, and Esteemed Colleagues,
                            </p>
                            <p className="mb-4">
                                It is my great pleasure to welcome you to Rotary Pre-University College, an institution dedicated to nurturing young minds and shaping future leaders. For over a decade, our college has been a beacon of academic excellence and holistic development in the heart of our community.
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
                        </motion.div>
                    </motion.div>

                    {/* Our History Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Our History
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <motion.div
                            className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="max-w-4xl mx-auto">
                                <motion.p
                                    className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg mb-8"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Rotary Pre-University College traces its roots to the esteemed Rotary Central School, established in 1980 as one of the oldest educational institutions in Moodbidri. Building on this rich legacy of educational excellence, Rotary PU College was founded in 2015 to provide comprehensive pre-university education that prepares students for higher education and professional careers.
                                </motion.p>

                                {/* Timeline */}
                                <motion.ul
                                    className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.2,
                                                delayChildren: 0.3
                                            }
                                        }
                                    }}
                                >
                                    <motion.li
                                        className="timeline-item"
                                        variants={{
                                            hidden: { opacity: 0, x: -30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                        }}
                                    >
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
                                            <time className=" italic font-nuno text-blue-600">1980</time>
                                            <div className="text-lg font-black font-merri text-blue-800">Rotary Central School Founded</div>
                                            Established as one of Moodbidri's oldest schools, laying the foundation for quality education in the region.
                                        </div>
                                        <hr className="bg-blue-200" />
                                    </motion.li>
                                    <motion.li
                                        className="timeline-item"
                                        variants={{
                                            hidden: { opacity: 0, x: 30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                        }}
                                    >
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
                                            <time className=" italic font-nuno text-red-600">2015</time>
                                            <div className="text-lg font-black font-merri text-red-800">Rotary PU College Established</div>
                                            Inaugurated with Science and Commerce streams, carrying forward the legacy of educational excellence.
                                        </div>
                                        <hr className="bg-yellow-200" />
                                    </motion.li>
                                    <motion.li
                                        className="timeline-item"
                                        variants={{
                                            hidden: { opacity: 0, x: -30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                        }}
                                    >
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
                                            <time className=" italic font-nuno text-yellow-600">2018</time>
                                            <div className="text-lg font-black font-merri text-yellow-800">Infrastructure Development</div>
                                            Modern science laboratories, well-equipped library, and sports facilities established.
                                        </div>
                                        <hr className="bg-blue-200" />
                                    </motion.li>
                                    <motion.li
                                        className="timeline-item"
                                        variants={{
                                            hidden: { opacity: 0, x: 30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                        }}
                                    >
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
                                            <time className=" italic font-nuno text-blue-600">2020</time>
                                            <div className="text-lg font-black font-merri text-blue-800">Digital Learning Initiative</div>
                                            Adopted online learning platforms and modern teaching methodologies for enhanced education delivery.
                                        </div>
                                        <hr className="bg-red-200" />
                                    </motion.li>
                                    <motion.li
                                        className="timeline-item"
                                        variants={{
                                            hidden: { opacity: 0, x: -30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                        }}
                                    >
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
                                            <time className=" italic font-nuno text-red-600">2023</time>
                                            <div className="text-lg font-black font-merri text-red-800">Academic Excellence</div>
                                            Achieved outstanding results in board examinations with students gaining admission to premier institutions.
                                        </div>
                                        <hr className="bg-yellow-200" />
                                    </motion.li>
                                    <motion.li
                                        className="timeline-item"
                                        variants={{
                                            hidden: { opacity: 0, x: 30 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                        }}
                                    >
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
                                            <time className=" italic font-nuno text-yellow-600">2025</time>
                                            <div className="text-lg font-black font-merri text-yellow-800">Future of Excellence</div>
                                            Continuing the legacy with innovative programs, advanced facilities, and unwavering commitment to student success.
                                        </div>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Vision & Mission Section */}
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merri">
                                Vision & Mission
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                        </div>

                        <motion.div
                            className="grid md:grid-cols-2 gap-8 md:gap-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {/* Vision */}
                            <motion.div
                                className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8"
                                variants={{
                                    hidden: { opacity: 0, x: -40, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        transition: { duration: 0.7, ease: "easeOut" }
                                    }
                                }}
                            >
                                <motion.div
                                    className="flex items-center mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri">
                                        Our Vision
                                    </h3>
                                </motion.div>
                                <motion.p
                                    className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    To be a premier educational institution that empowers students with knowledge, skills, and values to become responsible global citizens and leaders in their chosen fields, fostering innovation and excellence in education.
                                </motion.p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                className="bg-gradient-to-r from-stone-100 to-zinc-50 rounded-lg shadow-md p-6 md:p-8"
                                variants={{
                                    hidden: { opacity: 0, x: 40, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        transition: { duration: 0.7, ease: "easeOut" }
                                    }
                                }}
                            >
                                <motion.div
                                    className="flex items-center mb-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-merri">
                                        Our Mission
                                    </h3>
                                </motion.div>
                                <motion.ul
                                    className="text-gray-700 leading-relaxed font-nuno text-base md:text-lg space-y-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
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
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage
